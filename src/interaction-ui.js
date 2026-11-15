import { act, runCommand, powered, journalText } from "./scenario.js";
const $ = (id) => document.getElementById(id);
export function createInteractionUI(game, { pause, close, onChange, audio }) {
  let current = null,
    history = [],
    historyIndex = 0,
    transcript = "";
  const update = () => {
    onChange();
    $("objective").textContent = game.state.complete
      ? "THE DEAD RELAY / RECORDER RECOVERED"
      : powered(game)
        ? "PALISADE ARCHIVE / POWER RESTORED"
        : "DISTRICT 07 / SIGNAL INTERRUPTED";
  };
  const command = (input) => {
    const was = powered(game),
      out = runCommand(game, input);
    if (out === null) {
      close();
      return;
    }
    transcript = (transcript + "\n> " + input + "\n" + out + "\n").slice(-7000);
    $("terminal-output").textContent = transcript;
    $("terminal-output").scrollTop = $("terminal-output").scrollHeight;
    if (!was && powered(game)) audio.cue();
    update();
  };
  $("command-form").onsubmit = (e) => {
    e.preventDefault();
    const input = $("command").value.trim();
    if (input) {
      history.push(input);
      if (history.length > 50) history.shift();
      historyIndex = history.length;
      command(input);
    }
    $("command").value = "";
  };
  $("command").addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      historyIndex = Math.max(
        0,
        Math.min(history.length, historyIndex + (e.key === "ArrowUp" ? -1 : 1)),
      );
      $("command").value = history[historyIndex] || "";
    }
  });
  document
    .querySelectorAll("[data-command]")
    .forEach((b) => (b.onclick = () => command(b.dataset.command)));
  function open(o) {
    current = o;
    pause(o.category === "terminal" ? "terminal" : "inspect");
    if (o.category === "terminal") {
      $("terminal").hidden = false;
      transcript =
        "GHOST / OS — LOCAL MUNICIPAL NETWORK\nType help to investigate. Nothing leaves this browser.\n";
      command("status");
      $("command").focus();
      return;
    }
    $("inspector").hidden = false;
    $("inspect-title").textContent = o.label;
    $("inspect-body").textContent =
      o.category === "door"
        ? act(game, o.id, "open", game.player)
        : act(game, o.id, "inspect", game.player);
    renderActions();
    update();
    $("inspect-close").focus();
  }
  function renderActions() {
    const actions = $("inspect-actions");
    actions.replaceChildren();
    for (const action of current.actions) {
      if (action === "inspect") continue;
      const b = document.createElement("button");
      b.textContent =
        action === "bypass"
          ? "Engage service bypass"
          : action === "normal"
            ? "Return to network feed"
            : action === "open"
              ? "Open door"
              : "Close door";
      b.dataset.action = action;
      b.onclick = () => {
        const was = powered(game);
        $("inspect-body").textContent = act(
          game,
          current.id,
          action,
          game.player,
        );
        if (!was && powered(game)) audio.cue();
        update();
      };
      actions.append(b);
    }
  }
  $("inspect-close").onclick = close;
  $("journal-close").onclick = close;
  function journal() {
    pause("journal");
    $("journal").hidden = false;
    const list = $("journal-entries");
    list.replaceChildren();
    for (const id of game.state.discovered) {
      const li = document.createElement("li");
      li.textContent = journalText[id];
      list.append(li);
    }
    if (!list.children.length) {
      const li = document.createElement("li");
      li.textContent =
        "No notes yet. Look for objects marked with a contextual E prompt.";
      list.append(li);
    }
    $("journal-close").focus();
  }
  return {
    open,
    journal,
    command,
    refresh: update,
    hide() {
      for (const id of ["terminal", "inspector", "journal"])
        $(id).hidden = true;
    },
    get current() {
      return current?.id;
    },
  };
}
