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

let bottomless_allow = ["create:honey", "milk:milk_fluid_block"];

const seasons = ["spring", "summer", "autumn", "winter"];

// Serene Seasons - Crop Block Tags
const blockCrops = {
    spring: [
        "farmersrespite:small_tea_bush",
        "farmersrespite:tea_bush",
        "promenade:blush_sakura_sapling",
        "promenade:cotton_sakura_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:willow_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:cypress_sapling",
        "natures_spirit:saxual_sapling",
        "natures_spirit:mahogany_sapling",
        "natures_spirit:yellow_larch_sapling",
        "natures_spirit:larch_sapling",
        "promenade:blueberry_bush"
    ],
    summer: [
        "farmersrespite:small_tea_bush",
        "farmersrespite:tea_bush",
        "farmersrespite:coffee_bush",
        "farmersrespite:coffee_bush_top",
        "farmersrespite:coffee_stem",
        "farmersrespite:coffee_stem_double",
        "promenade:palm_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:willow_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:olive_sapling",
        "natures_spirit:ghaf_sapling",
        "natures_spirit:cypress_sapling",
        "natures_spirit:joshua_sapling",
        "natures_spirit:palo_verde_sapling",
        "natures_spirit:saxual_sapling",
        "natures_spirit:mahogany_sapling",
        "tropics:palm_sapling",
        "natures_spirit:yellow_larch_sapling",
        "natures_spirit:larch_sapling",
        "promenade:blueberry_bush"
    ],
    autumn: [
        "farmersrespite:small_tea_bush",
        "farmersrespite:tea_bush",
        "minecraft:potatoes",
        "promenade:sap_maple_sapling",
        "promenade:vermilion_maple_sapling",
        "promenade:fulvous_maple_sapling",
        "promenade:mikado_maple_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:red_maple_sapling",
        "natures_spirit:orange_maple_sapling",
        "natures_spirit:yellow_maple_sapling",
        "natures_spirit:mahogany_sapling"
    ],
    yearRound: [
        "spelunkery:conk_fungus",
        "spelunkery:button_mushroom",
        "spelunkery:inkcap_mushroom",
        "spelunkery:white_inkcap_mushroom",
        "spelunkery:shiitake_mushroom",
        "natures_spirit:redwood_sapling",
        "natures_spirit:sugi_sapling",
        "natures_spirit:cedar_sapling",
        "promenade:dark_amaranth_fungus"
    ]
};

 // Serene Seasons - Crop Item Tags
 const itemCrops = {
    spring: [
        "farmersrespite:tea_seeds",
        "minecraft:beetroot_seeds",
        "promenade:blush_sakura_sapling",
        "promenade:cotton_sakura_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:willow_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:cypress_sapling",
        "natures_spirit:saxual_sapling",
        "natures_spirit:mahogany_sapling",
        "natures_spirit:yellow_larch_sapling",
        "natures_spirit:larch_sapling",
        "promenade:blueberries"
    ],
    summer: [
        "farmersrespite:tea_seeds",
        "farmersrespite:coffee_berries",
        "promenade:palm_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:willow_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:olive_sapling",
        "natures_spirit:ghaf_sapling",
        "natures_spirit:cypress_sapling",
        "natures_spirit:joshua_sapling",
        "natures_spirit:palo_verde_sapling",
        "natures_spirit:saxual_sapling",
        "natures_spirit:mahogany_sapling",
        "tropics:palm_sapling",
        "natures_spirit:yellow_larch_sapling",
        "natures_spirit:larch_sapling",
        "promenade:blueberries"
    ],
    autumn: [
        "farmersrespite:tea_seeds",
        "minecraft:potato",
        "promenade:sap_maple_sapling",
        "promenade:vermilion_maple_sapling",
        "promenade:fulvous_maple_sapling",
        "promenade:mikado_maple_sapling",
        "natures_spirit:fir_sapling",
        "natures_spirit:aspen_sapling",
        "natures_spirit:red_maple_sapling",
        "natures_spirit:orange_maple_sapling",
        "natures_spirit:yellow_maple_sapling",
        "natures_spirit:mahogany_sapling"
    ],
    yearRound: [
        "spelunkery:conk_fungus",
        "spelunkery:phosphor_fungus",
        "spelunkery:button_mushroom",
        "spelunkery:inkcap_mushroom",
        "promenade:dark_amaranth_fungus",
        "spelunkery:white_inkcap_mushroom",
        "spelunkery:shiitake_mushroom",
        "natures_spirit:redwood_sapling",
        "natures_spirit:sugi_sapling",
        "natures_spirit:cedar_sapling"
    ]
}

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

    Object.entries(blockCrops).forEach(([season, crops]) => {
        crops.forEach((crop) => {
            if (season === "yearRound")
                seasons.forEach(season => event.add(`sereneseasons:${season}_crops`, crop));
            else
                event.add(`sereneseasons:${season}_crops`, crop)
        });
    });

    // Serene Seasons - Greenhouse Glass Block Tags
    const colours = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", 
        "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"];
    colours.forEach((colour) => {
        event.add("c:glass_blocks", `#chipped:${colour}_stained_glass`)
        event.add("c:glass_blocks", `consistency_plus:${colour}_tinted_glass`)
    })

    const crystalClearVariants = ["brass", "copper", "andesite", "train"];
    crystalClearVariants.forEach((variant) => {
        event.add("c:glass_blocks", `crystal_clear:${variant}_glass_casing`)
        event.add("c:glass_blocks", `crystal_clear:${variant}_clear_glass_casing`)
    });

    const miscGlass = ["chipped:glass_ochre_froglight", "chipped:glass_ocre_froglight", "chipped:glass_verdant_froglight",
        "chipped:glass_pearlescent_froglight", "tconstruct:clear_glass", "tconstruct:clear_tinted_glass", "tconstruct:soul_glass",
        "tconstruct:scorched_glass", "tconstruct:seared_glass"
    ];
    miscGlass.forEach((item) => {
        event.add("c:glass_blocks", item)
    });
    event.add("c:glass_blocks", "#chipped:glass");
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
    });

    Object.entries(itemCrops).forEach(([season, crops]) => {
        crops.forEach((crop) => {
            if (season === "yearRound")
                seasons.forEach(season => event.add(`sereneseasons:${season}_crops`, crop))
            else
                event.add(`sereneseasons:${season}_crops`, crop)
        });
    });

    // Misc
    event.add("c:seeds", "supplementaries:flax_seeds")
});
