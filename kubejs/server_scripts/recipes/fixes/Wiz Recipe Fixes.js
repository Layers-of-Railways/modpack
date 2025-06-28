//09wizardguy's Recipe Fixes 

//Remove original recipes that were broken as to not have duplicate entries in EMI
ServerEvents.recipes((event) => {
    //event.remove({'mod:block', 'mod:type}) example code to remove a specific block from a specific crafting type
    //Remove Consistency Plus Smooth Terracotta and Clay smelting recipes
    let ConsistTerracotta = [
        'consistency_plus:smooth_terracotta',
        'consistency_plus:smooth_red_terracotta',
        'consistency_plus:smooth_orange_terracotta',
        'consistency_plus:smooth_yellow_terracotta',
        'consistency_plus:smooth_lime_terracotta',
        'consistency_plus:smooth_green_terracotta',
        'consistency_plus:smooth_cyan_terracotta',
        'consistency_plus:smooth_light_blue_terracotta',
        'consistency_plus:smooth_blue_terracotta',
        'consistency_plus:smooth_purple_terracotta',
        'consistency_plus:smooth_magenta_terracotta',
        'consistency_plus:smooth_pink_terracotta',
        'consistency_plus:smooth_brown_terracotta',
        'consistency_plus:smooth_black_terracotta',
        'consistency_plus:smooth_gray_terracotta',
        'consistency_plus:smooth_white_terracotta',
        'consistency_plus:smooth_light_gray_terracotta',
        'consistency_plus:smooth_clay'
    ];
    ConsistTerracotta.forEach((item) => {
        event.remove({ output: item, type: "minecraft:smelting" })
    })
})

//Add custom recipes to fix broken ones or add new ones
ServerEvents.recipes((event) => {
    //Fix Sugi Mosiac Stairs and Slab recipes
    event.shaped('natures_spirit:sugi_mosaic_stairs', [
        'M  ',
        'MM ',
        'MMM',
    ], {
        M: 'natures_spirit:sugi_mosaic',
    }),
    event.shaped('natures_spirit:sugi_mosaic_slab', [
        'MMM',
    ], {
        M: 'natures_spirit:sugi_mosaic',
    })

    //Readd Consistency Plus Smooth Terracotta and Clay smelting recipes but as Smoking recipes
    const ConsistTerracotta = [
        //format [input, output]
        ['minecraft:terracotta','consistency_plus:smooth_terracotta'],
        ['minecraft:red_terracotta', 'consistency_plus:smooth_red_terracotta'],
        [ 'minecraft:orange_terracotta','consistency_plus:smooth_orange_terracotta'],
        ['minecraft:yellow_terracotta', 'consistency_plus:smooth_yellow_terracotta'],
        ['minecraft:lime_terracotta', 'consistency_plus:smooth_lime_terracotta'],
        ['minecraft:green_terracotta', 'consistency_plus:smooth_green_terracotta'],
        ['minecraft:cyan_terracotta', 'consistency_plus:smooth_cyan_terracotta'],
        ['minecraft:light_blue_terracotta', 'consistency_plus:smooth_light_blue_terracotta'],
        ['minecraft:blue_terracotta', 'consistency_plus:smooth_blue_terracotta'],
        ['minecraft:purple_terracotta', 'consistency_plus:smooth_purple_terracotta'],
        ['minecraft:magenta_terracotta', 'consistency_plus:smooth_magenta_terracotta'],
        ['minecraft:pink_terracotta', 'consistency_plus:smooth_pink_terracotta'],
        ['minecraft:brown_terracotta', 'consistency_plus:smooth_brown_terracotta'],
        ['minecraft:black_terracotta', 'consistency_plus:smooth_black_terracotta'],
        ['minecraft:gray_terracotta', 'consistency_plus:smooth_gray_terracotta'],
        ['minecraft:white_terracotta', 'consistency_plus:smooth_white_terracotta'],
        ['minecraft:light_gray_terracotta', 'consistency_plus:smooth_light_gray_terracotta'],
        ['minecraft:clay', 'consistency_plus:smooth_clay']
    ];
    ConsistTerracotta.forEach(([input, output]) => {
        event.custom({
            type: "minecraft:smoking",
            ingredient: { item: input },
            result: output,
            experience: 0.1,
            cookingtime: 100
        })
    })
//End of changes made on June 28, 2025
})