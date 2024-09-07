let non_movable = [
    "armourers_workshop:skin-library-creative",
    "create:creative_motor",
    "create:creative_fluid_tank",
    "create:creative_crate",
    "numismatics:creative_vendor",
    "createaddition:creative_energy"
]

let bottomless_allow = [
    "create:honey",
    "minecraft:milk"
]

ServerEvents.tags("block", (event) => {
    non_movable.forEach((id) => {
        event.add("create:non_movable", id);
    })
});

ServerEvents.tags("fluid", (event) => {
    bottomless_allow.forEach((id) => {
        event.add("create:bottomless/allow", id);
    })
});
