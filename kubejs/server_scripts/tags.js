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
	"copycats:copycat_iron_door",
	"copycats:copycat_folding_door",
	"copycats:copycat_sliding_door",
	"copycats:copycat_door",
];

let bottomless_allow = ["create:honey", "milk:milk_fluid_block"];
const tinkers_crystal_types = ["earth", "sky", "ichor", "ender"];

const modded_elytras = [
    "estrogen:moth_elytra",
    "betterend:elytra_armored",
    "bettterend:elytra_crystalite",
    "tconstruct:slime_chestplate"
]

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

    event.add("railways:semaphore_poles", "#minecraft:walls");

    non_movable.forEach((id) => {
        event.add("create:non_movable", id);
    });
    // Tinkers budding blocks
    tinkers_crystal_types.forEach((type) => {
		event.add("c:budding_blocks", `tconstruct:budding_${type}_slime_crystal`);
    });

	
});

ServerEvents.tags("fluid", (event) => {
    bottomless_allow.forEach((id) => {
        event.add("create:bottomless/allow", id);
    });
});



ServerEvents.tags("item", (event) => {
    // Ore tags
    const ingots = ["copper", "brass", "zinc", "gold", "silver"];

    ingots.forEach((material) => {
        event.add(`forge:nuggets/${material}`, `#c:${material}_nuggets`)
        event.add(`forge:ingots/${material}`, `#c:${material}_ingots`)
        event.add(`forge:plates/${material}`, `#c:${material}_plates`)
        event.add(`forge:blocks/${material}`, `#c:${material}_blocks`)
    })

    // Misc
    event.add("c:seeds", "supplementaries:flax_seeds")
	// Copycat Door for OPAC
	event.add("minecraft:doors", "copycats:copycat_door")

    // Kirins fuel tags
    event.add("create:blaze_burner_fuel/special", "createaddition:bioethanol_bucket")
    event.add("create:blaze_burner_fuel/regular", "createaddition:seed_oil_bucket")

    // Aileron Enchantment tags
    modded_elytras.forEach((id) => {
        event.add("aileron:elytra", id)
    })
});
