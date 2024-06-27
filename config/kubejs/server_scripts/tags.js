ServerEvents.tags("block", (event) => {
    event.add("create:non_movable", "armourers_workshop:skin-library-creative");
    event.add("create:non_movable", "create:creative_motor");
    event.add("create:non_movable", "create:creative_fluid_tank");
    event.add("create:non_movable", "create:creative_crate");
    event.add("create:non_movable", "numismatics:creative_vendor");
});

ServerEvents.tags("fluid", (event) => {
    // Bottomless Honey
    event.add("create:bottomless/allow", "create:honey");
    event.add("create:bottomless/allow", "minecraft:milk");
});
