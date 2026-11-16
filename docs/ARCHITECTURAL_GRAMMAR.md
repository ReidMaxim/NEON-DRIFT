# Architectural grammar — Mission 004

`city-layers.js` generates architecture as pure descriptors. `layer-scene.js` adapts them to Three.js; gameplay and saves remain in their existing modules. The facade frame maps U along the wall, V outward and Y upward for both street orientations. Local components retain host/support IDs. The same base parcel remains authoritative for collision.

| Family      | Structural vocabulary                                                                                               | Ordinary lighting                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Commercial  | Storefront bays, mullions, recessed dark entrances, bracketed awnings, fascia, setback upper mass and roof pavilion | Highest window activity; cyan/pink signs          |
| Industrial  | Heavy columns, loading shutter/lintel, supported service deck and rail, roof stacks/collars                         | Sparse warm service accents                       |
| Residential | Narrow service door, domestic window reveals/sills, bracketed balconies/rails, grounded roof-tank base and cap      | Selective warm windows and restrained violet trim |
| Abandoned   | Inactive shutters, displaced panels, exposed frame/conduit, boarded windows and silent roof plant                   | Mostly dark; occasional muted remnants            |

Each ordinary parcel has a lower podium, recessed upper mass, belt, parapet and a shallow foundation strip. Original entrance buildings retain their authored core geometry and fixtures. The expanded renderer replaces the previous generic facade overlay rather than stacking another complete facade on it. Width, depth, height, orientation, family and an independent seed determine the composition. Illumination probabilities differ by family; every building is not equally active.

The three landmarks receive distinctive assembled machinery/frontage instead of simply more random fragments. Their detail is concentrated around a functional focal point. Skyline masses use a simpler stepped body/crown grammar, inward-facing window bands and occasional antennas. This creates silhouette rhythm without generating unreachable service-level detail.

Support validation checks finite positive transforms, unique IDs, valid parents, host envelopes, machinery fan backplates and sign backing. Core fans, grates, cable endpoints and lamps retain the stronger existing attachment validator. Supported envelopes are conservative, not a general physical structural solver. The cooling-yard bank fans are static mechanical detail; original service fans retain animation. Doors and elevated decks are closed scenery, not promised interiors or playable roof routes.
