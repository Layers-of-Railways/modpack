let better_end_chests = [
    "betterend:mossy_glowshroom_chest",
    "betterend:end_lotus_chest",
    "betterend:pythadendron_chest",
    "betterend:lacugrove_chest",
    "betterend:dragon_tree_chest",
    "betterend:tenanea_chest",
    "betterend:helix_tree_chest",
    "betterend:umbrella_tree_chest",
    "betterend:jellyshroom_chest",
    "betterend:lucernia_chest",
];

let better_end_barrels = [
    "betterend:mossy_glowshroom_barrel",
    "betterend:end_lotus_barrel",
    "betterend:pythadendron_barrel",
    "betterend:lacugrove_barrel",
    "betterend:dragon_tree_barrel",
    "betterend:tenanea_barrel",
    "betterend:helix_tree_barrel",
    "betterend:umbrella_tree_barrel",
    "betterend:jellyshroom_barrel",
    "betterend:lucernia_barrel",
];

let decorative_blocks_palisades = [
    "decorative_blocks:oak_palisade",
    "decorative_blocks:birch_palisade",
    "decorative_blocks:spruce_palisade",
    "decorative_blocks:acacia_palisade",
    "decorative_blocks:jungle_palisade",
    "decorative_blocks:dark_oak_palisade",
    "decorative_blocks:mangrove_palisade",
    "decorative_blocks:cherry_palisade",
    "decorative_blocks:bamboo_palisade",
    "decorative_blocks:crimson_palisade",
    "decorative_blocks:warped_palisade",
];

let non_movable = [
    "armourers_workshop:skin-library-creative",
    "create:creative_motor",
    "create:creative_fluid_tank",
    "create:creative_crate",
    "numismatics:creative_vendor",
    "createaddition:creative_energy",
];

let bottomless_allow = ["create:honey", "minecraft:milk"];

ServerEvents.tags("block", (event) => {
    better_end_chests.forEach((id) => {
        event.add("lootr:convert/chests", id);
    });
    better_end_barrels.forEach((id) => {
        event.add("lootr:convert/barrels", id);
    });

    decorative_blocks_palisades.forEach((id) => {
        event.add("railways:semaphore_poles", id);
    });

    non_movable.forEach((id) => {
        event.add("create:non_movable", id);
    });
});

ServerEvents.tags("fluid", (event) => {
    bottomless_allow.forEach((id) => {
        event.add("create:bottomless/allow", id);
    });
});
