// Pure scenario placement. Reserved volumes are shared by generation, collision and rendering.
export function scenarioLayout(world) {
  const h = world.config.streetWidth / 2;
  const object = (id, category, x, z, label, actions, range = 2.2) => ({
    id,
    category,
    position: { x, z },
    orientation: 0,
    range,
    label,
    actions,
    connections: [],
    conditions: [],
  });
  const objects = [
    object("terminal", "terminal", world.terminal.x, 2, "Relay / 07", ["open"]),
    object("notice", "inspectable", -h + 1, 7, "Maintenance tag", ["inspect"]),
    object("relay", "relay", -h + 1, -8.5, "Junction R-07", ["inspect"]),
    object("power", "power", h - 1, -1, "Manual transfer cabinet", [
      "inspect",
      "bypass",
      "normal",
    ]),
    object("door", "door", h - 2, -6, "Palisade archive", ["open", "close"]),
    object(
      "archive",
      "inspectable",
      h - 2,
      -9,
      "Recovered recorder",
      ["inspect"],
      1.35,
    ),
  ];
  objects[0].connections = ["relay"];
  objects[2].connections = ["power"];
  objects[3].connections = ["door"];
  objects[4].conditions = ["storefront power or latched emergency release"];
  objects[5].conditions = ["door open", "inside alcove"];
  return {
    objects,
    room: { minX: h - 3.5, maxX: h - 0.5, minZ: -10, maxZ: -6 },
    reserves: objects.map((o) => ({
      x: o.position.x,
      z: o.position.z,
      r: o.id === "door" || o.id === "archive" ? 2.2 : 1.5,
    })),
  };
}
export function inReservedArea(layout, x, z, margin = 0.6) {
  return layout.reserves.some(
    (o) => Math.hypot(x - o.x, z - o.z) < o.r + margin,
  );
}
export function scenarioColliders(layout) {
  const r = layout.room;
  return [
    { minX: r.minX - 0.12, maxX: r.minX + 0.12, minZ: r.minZ, maxZ: r.maxZ },
    { minX: r.maxX - 0.12, maxX: r.maxX + 0.12, minZ: r.minZ, maxZ: r.maxZ },
    { minX: r.minX, maxX: r.maxX, minZ: r.minZ - 0.12, maxZ: r.minZ + 0.12 },
  ];
}
export const journalText = {
  notice:
    "Maintenance tag: credential LINE7. R-07 should route to POWER; then energize the power feed. The manual transfer cabinet is independent of that route.",
  relay:
    "R-07 has no downstream route. Its contacts show no heat damage. Someone isolated this link.",
  power:
    "The transfer cabinet has an independent service feed. BYPASS supplies the archive without the network.",
  door: "Palisade archive: electrical access lost. Its emergency release latches after the first restoration.",
  archive:
    "Recorder 03: “The relay did not fail. I cut it at 01:47. If the archive wakes, they will know someone stayed.” A second voice answers: “Then leave the light on.”",
};
const initial = () => ({
  routed: false,
  feed: false,
  manual: false,
  doorOpen: false,
  accessGranted: false,
  complete: false,
  discovered: [],
  connected: "terminal",
  authorized: false,
  revision: 0,
});
export function createGame(world, saved = null) {
  const game = {
    seed: world.config.seed,
    layout: scenarioLayout(world),
    state: initial(),
  };
  if (saved) {
    try {
      const p = JSON.parse(saved);
      if (
        p.version === 2 &&
        p.seed === game.seed &&
        [
          "routed",
          "feed",
          "manual",
          "doorOpen",
          "accessGranted",
          "complete",
        ].every((k) => typeof p[k] === "boolean") &&
        Array.isArray(p.discovered) &&
        p.discovered.every((k) => k in journalText)
      ) {
        for (const k of [
          "routed",
          "feed",
          "manual",
          "accessGranted",
          "complete",
        ])
          game.state[k] = p[k];
        game.state.discovered = [...new Set(p.discovered)];
        game.state.accessGranted =
          game.state.accessGranted || game.state.complete || powered(game);
        game.state.doorOpen = p.doorOpen && game.state.accessGranted;
      }
    } catch {
      /* Invalid or old saves start a fresh scenario. */
    }
  }
  return game;
}
export function powered(game) {
  return game.state.manual || (game.state.routed && game.state.feed);
}
export function saveGame(game) {
  const s = game.state;
  return JSON.stringify({
    version: 2,
    seed: game.seed,
    routed: s.routed,
    feed: s.feed,
    manual: s.manual,
    doorOpen: s.doorOpen,
    accessGranted: s.accessGranted,
    complete: s.complete,
    discovered: s.discovered,
  });
}
export function resetGame(game) {
  game.state = initial();
}
function changed(game) {
  if (powered(game)) game.state.accessGranted = true;
  game.state.revision++;
}
function discover(game, id) {
  if (journalText[id] && !game.state.discovered.includes(id)) {
    game.state.discovered.push(id);
    game.state.revision++;
  }
  return journalText[id];
}
export function canInteract(game, id, p) {
  const o = game.layout.objects.find((o) => o.id === id);
  if (!o || Math.hypot(o.position.x - p.x, o.position.z - p.z) > o.range)
    return false;
  if (id === "archive")
    return (
      game.state.doorOpen &&
      p.z < -6.35 &&
      p.x > game.layout.room.minX &&
      p.x < game.layout.room.maxX
    );
  return true;
}
export function nearby(game, p, yaw) {
  let selected = null,
    distance = Infinity;
  for (const o of game.layout.objects) {
    if (!canInteract(game, o.id, p)) continue;
    const dx = o.position.x - p.x,
      dz = o.position.z - p.z,
      d = Math.hypot(dx, dz);
    if (d > 0.35 && (-Math.sin(yaw) * dx - Math.cos(yaw) * dz) / d < 0.2)
      continue;
    if (d < distance) {
      selected = o;
      distance = d;
    }
  }
  return selected;
}
export function act(game, id, action, p) {
  if (!canInteract(game, id, p))
    return "Move closer with a clear path to this object.";
  const o = game.layout.objects.find((o) => o.id === id);
  if (!o.actions.includes(action)) return "That action is not available.";
  const s = game.state;
  if (action === "inspect") {
    const text = discover(game, id);
    if (id === "archive") {
      s.complete = true;
      changed(game);
    }
    return text || "No additional markings.";
  }
  if (id === "power") {
    discover(game, id);
    s.manual = action === "bypass";
    changed(game);
    return s.manual
      ? "Manual service feed engaged. Archive power restored."
      : "Transfer returned to NORMAL. Network feed controls the archive.";
  }
  if (id === "door") {
    discover(game, id);
    if (action === "open" && !s.accessGranted)
      return "Access unpowered. Trace R-07 or inspect the transfer cabinet.";
    s.doorOpen = action === "open";
    changed(game);
    return s.doorOpen
      ? "Emergency release accepted. The archive is open."
      : "Archive closed. Emergency release remains available.";
  }
  return "Relay terminal ready.";
}
export function reachable(game) {
  const links = {
      terminal: ["relay"],
      relay: game.state.routed ? ["terminal", "power"] : ["terminal"],
      power: ["relay", "door"],
      door: ["power"],
    },
    seen = new Set(["terminal"]),
    queue = ["terminal"];
  while (queue.length) {
    for (const id of links[queue.shift()] || [])
      if (!seen.has(id)) {
        seen.add(id);
        queue.push(id);
      }
  }
  return [...seen];
}
export function runCommand(game, input) {
  const parts = input.trim().split(/\s+/),
    cmd = (parts.shift() || "").toLowerCase(),
    args = parts.map((s) => s.toLowerCase()),
    s = game.state;
  const target = args[0] || s.connected;
  switch (cmd) {
    case "exit":
      return null;
    case "help":
      return "LOCAL SIMULATION / no external connections\nhelp · status · scan · connect <device> · inspect [device]\nauth <maintenance credential> · route relay power|off\npower on|off (connect power first) · disconnect\nLegacy: directory · about · exit\nFind a maintenance tag in the street. Arrow keys recall commands.";
    case "status":
      return `DISTRICT 07 / RELAY ONLINE\nR-07 route: ${s.routed ? "POWER" : "ISOLATED"}\nNetwork feed: ${s.feed ? "ON" : "OFF"} / manual transfer: ${s.manual ? "BYPASS" : "NORMAL"}\nArchive supply: ${powered(game) ? "LIVE" : "DEAD"} / door: ${s.doorOpen ? "OPEN" : s.accessGranted ? "UNLOCKED" : "LOCKED"}\nSession: ${s.connected} / ${s.authorized ? "MAINTENANCE" : "GUEST"}${s.complete ? "\nRECORDER RECOVERED — THE DEAD RELAY COMPLETE" : ""}`;
    case "directory":
      return "01 ARCHIVE / Palisade: service interrupted\n02 TRANSIT / suspended\n03 UPLINK / unavailable\nUse scan to discover reachable local devices.";
    case "about":
      return "NEON-DRIFT / THE DEAD RELAY\nA local fictional network. Nothing leaves this browser.";
    case "scan":
      return `Reachable: ${reachable(game).join(" → ")}\n${s.routed ? "POWER is reachable; inspect its feed." : "R-07 downstream link absent. Inspect relay for diagnostics."}`;
    case "connect":
      if (!args[0]) return "Usage: connect terminal|relay|power|door";
      if (!reachable(game).includes(target))
        return `Device ${target} is not reachable on the local graph. Use scan.`;
      s.connected = target;
      return `Connected to ${target}. Use inspect.`;
    case "disconnect":
      s.connected = "terminal";
      s.authorized = false;
      return "Returned to local terminal. Maintenance session cleared.";
    case "inspect":
      if (!reachable(game).includes(target))
        return "Unreachable device. Restore the route first.";
      if (target === "relay") {
        discover(game, "relay");
        return "R-07: uplink TERMINAL is intact; expected downstream POWER is disconnected. No fault current recorded. Configuration changes require maintenance authorization.";
      }
      if (target === "power") {
        discover(game, "power");
        return `POWER: network feed ${s.feed ? "ON" : "OFF"}. Destination: DOOR / Palisade archive. Authorized operators may use power on. Physical transfer bypasses the network.`;
      }
      if (target === "door")
        return `DOOR: ${s.accessGranted ? "release latched" : "requires supply"}, ${s.doorOpen ? "open" : "closed"}. Operate the door physically.`;
      return "LOCAL RELAY / guest console. Maintenance credentials are on a nearby street tag.";
    case "auth":
      if (args.length !== 1 || args[0] !== "line7")
        return "Credential rejected. Inspect the maintenance tag near the relay terminal.";
      s.authorized = true;
      return "Maintenance authorization granted for this terminal session.";
    case "route":
      if (!s.authorized)
        return "Maintenance authorization required: auth <credential>.";
      if (
        args.length !== 2 ||
        args[0] !== "relay" ||
        !["power", "off"].includes(args[1])
      )
        return "Usage: route relay power|off";
      s.routed = args[1] === "power";
      if (!reachable(game).includes(s.connected)) s.connected = "terminal";
      changed(game);
      return s.routed
        ? "R-07 downstream connected to POWER. Scan, connect power, then power on."
        : "R-07 isolated. Manual service feed, if engaged, is unaffected.";
    case "power":
      if (!s.authorized) return "Maintenance authorization required.";
      if (s.connected !== "power" || !reachable(game).includes("power"))
        return "Connect to reachable POWER before changing its feed.";
      if (args.length !== 1 || !["on", "off"].includes(args[0]))
        return "Usage: power on|off";
      s.feed = args[0] === "on";
      changed(game);
      return s.feed
        ? "Network feed energized. Archive lights and access release are live."
        : "Network feed disabled. Latched emergency release remains available.";
    default:
      return "Unknown command. Type help for local commands.";
  }
}
