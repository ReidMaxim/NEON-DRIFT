# World continuity — current Mission 004 integration model

The current contract is **one bounded physical paved site**, not a road-only walking union beneath a much larger visual ground plane. See [root causes, corrections, tests and evidence](MISSION_004_INTEGRATION.md). The earlier [Mission 004 report](MISSION_004_REPORT.md) and its measurements describe the original City of Layers release; its underlay/navigation and isolated-road-cap behavior is superseded here.

## Shared surface ownership

`site.js` derives the site footprint from built roads, buildings, reserved landmarks and archive geometry with two meters of service clearance. `street-surfaces.js` partitions that rectangle into non-overlapping floor cells and excludes the separately rendered original wet-road rectangle. Movement permissions use exactly the site footprint. Solid obstacles remain independent. All open parcel/service pavement is now traversable, while the perimeter is a visible collidable wall/gate assembly.

The support-height resolver uses the same site height and original sidewalk intervals. Road/pavement height is .012 and original sidewalk height is .1. Grates, emitters, repair patches and thin covers remain source/height aligned. The original broad underlay and redundant base are removed. No apparent off-road paving depends on an invisible road-union clamp.

## Enclosures and landmarks

Every closed boundary gate belongs to the continuous perimeter. Walls, gate panels, posts, headers and registered collision derive from one enclosure model. The cooling yard has an open service entrance and connected side/return walls. The utility frontage has wing walls attached to its building. The residential forecourt is reached over continuous pavement. At wide street settings the entire cooling assembly and reserved parcel shift together to preserve pedestrian clearance.

Background-only masses remain outside the physical site, with layered silhouettes, selected windows and supported transit beyond the perimeter. Whole-host rejection prevents detached crowns when a mass would intrude. These unreachable structures do not supply player collision or imply an open route through the perimeter.

## Validation and limits

Tests cover visible floor area versus navigation, actual renderer transforms, perimeter coverage, gate/return completeness, controller parcel crossings, fixture traversal, connected sampled free space, landmarks and both relay solutions. Keyboard-driven browser acceptance complements geometry assertions. See the integration report for exact configurations, raw results and live publication evidence.

The city remains finite and mostly axis aligned. AABBs, a fixed eye height and artistic fog/reflections are retained. Closed rooms, balconies, transit and gantries are scenery, with no decorative stairs suggesting unsupported vertical access. Side/rear service ground is intentionally simpler than the authored street fronts; coherence takes priority over adding objects.
