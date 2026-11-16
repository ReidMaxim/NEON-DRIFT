# Landmark system — Mission 004

Sites are reserved before ordinary expanded parcels are accepted. The road skeleton fixes safe site locations; an independent seeded stream selects landmark signage editions, domestic window occupancy and residential height. This is a small authored catalog composed procedurally, not unrestricted placement of arbitrary buildings. Cooling and terminus equipment layouts remain consistent across seeds to protect service clearance and recognizable silhouettes. Changes to props, graphics quality or identity decoration cannot reroute the graph or change puzzle state.

| Site                       | Reserved footprint X/Z | Tested approach                    | Composition                                                                                                                     |
| -------------------------- | ---------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Industrial Cooling Yard    | X −34…−18, Z −50…−34   | −32, −42                           | Large and auxiliary cooling vessels, shell bands, complete fan bank, transfer pipes, sign backing, hangers and supported gantry |
| Residential Backstreet     | X 19…26.6, Z −52…−38   | 31, seed-selected Z around −44…−46 | Lantern Court frontage, domestic windows, supported balconies, service entrance and roof water tank                             |
| Abandoned Utility Terminus | X 24…38, Z −71…−61.2   | 31, −62                            | Closed substation shutter, exposed columns/lintel, inactive framed fan, damaged panels and roof transformer                     |

The cooling yard is entered from the industrial street around X=−39/Z=−42. Its western lane is reserved for pedestrians; solid machinery has real proxies. The residential frontage is discovered along the narrower eastern road. The terminus has a short accessible apron, with a visibly closed building at its end. These places add no new quest, inventory, NPC or combat behavior.

Landmark approach routes are serialized in the model for repeatable testing. Tests walk them using the normal radius-expanded collision controller, including 144 seed/tier/width/density/height combinations. Browser acceptance then follows a continuous keyboard loop through the yard, lower connector, terminus and residential frontage and returns to the original street. A separate visible gate test approaches an actual navigation boundary.

Every label has a backing; the three labels share one texture atlas and draw. Cooling-bank fans use complete housing/guard/fastener parts with backplates on the service cabinet plane. Original animated fans and steam sources retain their existing assembly system. Static scenery does not imply accessible upper platforms; no stairs were added.
