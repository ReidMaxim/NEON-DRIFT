# World generation

## Data flow

`world.js` retains Mission 002's pure core generator and independent architecture/prop random streams. `random.js` shares the same LCG as before. `district.js` expands that descriptor into a finite street graph, building parcels, identity labels and collision footprints. `scene.js` and `living.js` render the original district; `city-scene.js` adapts additional descriptors and detail grammar. Gameplay/network state remains in `scenario.js`.

Configuration: `seed`, `tier` (integer 0–4), `identity` (`mixed`, `commercial`, `industrial`, `residential`, `abandoned`), existing streetWidth (8–20), density (0.4–2), height (0.5–2), palette, fog, rain, props. The laboratory exposes the first three and graphics presets. Example: `?seed=8128&tier=3&identity=mixed&quality=medium`. Identity override changes architectural appearance; it does not reroute the street graph. Decorative streams do not restructure the scenario.

Tier 0 creates no new visible geometry. Its buildings, props, terminal and bounds for seed 2049 are checked against a fixture generated from baseline commit `7fbc31c`.

## Streets and parcels

Road descriptors contain ID, endpoints, width, identity and a rectangular walking envelope. Tier 3 has the original north/south street, a wide commercial cross-street at z=-28, industrial road at x=-39, narrow residential road at x=31, and an abandoned lower connection at z=-57. Tier 4 adds an eastward service branch, eastern spur and return connector. Overlapping road envelopes define graph edges. This is a compact connected finite graph, not independent copied corridors or infinite terrain.

Core buildings overlapping new road reservations are removed at Tier 3+. Additional parcels are sampled along each road with orientation aligned to it, then rejected if their footprint overlaps any road, another accepted building or the cooling-array landmark reservation. A branch's identity selects compatible material/grammar components; the cross-street transitions toward industrial at its west end and residential at its east end.

Building proportions, height, setback variant, windows, roof structures, entrances and service dressing compose the grammar. The shared facade coordinate adapter handles both X- and Z-aligned streets. Secondary walls add bands and inset windows to reduce blank extrusion faces. Domestic balconies, industrial loading/pipes and abandoned braces are structural differences beyond color changes.

## Traversal and collisions

Player collision reuses Mission 001's radius-expanded AABB sliding controller with 0.15 m maximum movement substeps. Expanded navigation additionally requires all four radius corners to remain within the union of road envelopes. This prevents leaving finite streets through gaps in the buildings. Intersections overlap sufficiently to avoid seams. Major new buildings and generated dumpsters have proxies. Shallow facade dressing, small trash and overhead structures remain decorative. No playable elevated stairs are implied.

The original terminal, tag, relay, cabinet, archive and recorder stay in their Mission 002 coordinates. Scenario reservation volumes filter added street dressing. The archive walls/door remain dynamic gameplay collision. Prop changes and identity overrides do not change puzzle topology or solutions. Existing preview save namespace is preserved.

Tests validate graph connectivity, geometry overlap rejection, physical movement to every street segment, return to the terminal area, and critical-object approaches. Street-surface area is a raster estimate of the road union; it is not the exact collision-free walkable area or an interior floor-area claim.

World-size counts refer to descriptor building footprints; the original 15 distant skyline masses and authored hero tower/landmarks are additional composition geometry. Surface-area estimates count road union, while collision-free clearance-area estimates exclude expanded collider footprints. Neither is a claim of navigable interior floor area.

## Mission 004 continuation

The earlier sections document the Mission 003 reference. Mission 004 retains the core data fixture while adding visual continuity at all tiers, reserved landmark sites and two small access corridors at Tiers 3/4. It cuts sidewalk crossing intervals and places all road union tiles at Y=.012. See [continuity](WORLD_CONTINUITY.md) and [landmark generation](LANDMARK_SYSTEM.md).
