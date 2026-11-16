# World continuity — Mission 004

The finite street graph remains the navigation authority. Two small additions improve places rather than raw scale: a cooling-yard spur and a short utility apron. Existing connections and the Dead Relay scenario remain intact. The original core building/prop fixture still passes at Tier 0; Tier 0 visuals now also receive the continuity layer.

## Constructed boundaries and background

Unconnected street endpoints receive grounded closed gates, posts, headers, bars and warning strips, with solid gate proxies. Road continuations and distant masses can appear beyond them. Continuations are rejected when another active loop occupies that space. The existing 07 tower now has a collider matching its visible footprint; it is not a decorative tower players can enter through.

Two seeded rings of stepped building masses surround the map envelope. Family vocabulary follows broad neighborhood direction or the chosen identity override. Inward-facing selective window bands, crowns, antennas, and a supported transit viaduct/train create depth. Background descriptors do not produce player collision, and tests reject their intersection with road envelopes. They use shared geometry and a small number of coarse batches. A Lambert background material uses reduced fog depth (0.55×) so silhouettes remain legible behind the near city's normal fog. This is art-directed distance fog, not volumetric atmosphere.

An extended low ground underlay and shallow building foundation strips replace visibly disconnected peripheral bases. The sky is not an infinite city, and the player cannot travel to background architecture. Gaps between parcels and the finite road union remain a limitation; no off-road exploration system is claimed.

## Streets and transitions

`street-surfaces.js` subtracts cross-street intervals from the original raised sidewalks. It decomposes the road union into non-overlapping tiles, excluding the rectangle already owned by the original wet-road shader. Expanded streets meet the original road at Y=.012, eliminating the old 2.2 cm junction difference. Curbs are lower, with breaks at crossings; restrained crosswalk stripes divide oversized surfaces. Existing family transitions follow the cross-street from industrial west to residential east, with the lower abandoned connector providing a clear change of vocabulary.

The support-height resolver uses these same sidewalk intervals and road heights. Grates remain within 4 mm of pavement and have no player-blocking collider. Their source-relative emitters, repair patches, utility plates and reserved crossing strips remain validated. No new terrain elevation or step-climbing physics is introduced. Street shading remains an economical analytic approximation, with some material contrast between the original and expanded road surfaces.

Tests cover deterministic generation, connected road graphs, non-overlapping pavement tiles, intersection support heights, background exclusion, visible end barriers and physical landmark access across representative seeds and extreme proportions. AABBs and known reservations are conservative; they do not prove triangle-exact clearance for every fragment or mathematical coverage of every possible seed.
