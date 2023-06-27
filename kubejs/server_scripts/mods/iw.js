let barkconversion = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "mangrove",
    "quark/bamboo",
    "quark/azalea",
    "quark/blossom",
    "quark/ancient",
];

ServerEvents.recipes((event) => {
    barkconversion.forEach((woodtype) => {
        event.shapeless(Item.of("farmersdelight:tree_bark", 1), [
            "immersive_weathering:" + woodtype + "_bark",
        ]);
    });

    // Steel wool
    event.shaped(
        Item.of("immersive_weathering:steel_wool"), // arg 1: output
        ["SIS", "I I", "SIS"],
        {
            S: "minecraft:string",
            I: "minecraft:iron_nugget",
        }
    );
});
