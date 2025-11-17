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
    });
    //remove C:Deco cracked red bricks furnace recipe
    event.remove({output:'createdeco:cracked_red_bricks', type: 'minecraft:smelting'})
})

//Add custom recipes to fix broken ones or add new ones
ServerEvents.recipes((event) => {
    //Fix Mosaic Stairs and Slab recipes
    const NSpiritMosaic = [
        'natures_spirit:sugi_mosaic', 'natures_spirit:joshua_mosaic', 'natures_spirit:coconut_mosaic', 'natures_spirit:mahogany_mosaic'
    ];

    NSpiritMosaic.forEach((mosaic) => {
        event.shaped(
            Item.of(`${mosaic}_stairs`, 4),
        [
            'M  ',
            'MM ',
            'MMM',
        ], {
            M: mosaic,
        })
    });
    NSpiritMosaic.forEach((mosaic) => {
        event.shaped(
            Item.of(`${mosaic}_slab`, 6), [
            'MMM',
        ], {
            M: mosaic,
        })
    });

    //Readd Consistency Plus Smooth Terracotta and Clay smelting recipes but as Smoking recipes
    const ConsistTerracotta = [
        //format [input, output]
        ['minecraft:terracotta','consistency_plus:smooth_terracotta'],
        ['minecraft:red_terracotta', 'consistency_plus:smooth_red_terracotta'],
        ['minecraft:orange_terracotta','consistency_plus:smooth_orange_terracotta'],
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

    //replace Deco Zinc sheets with C&A ones and remove deco sheet recipe
    event.remove({id: 'createdeco:pressing/zinc_sheet'})

    event.replaceInput(
        {input: 'createdeco:zinc_sheet'},
        'createdeco:zinc_sheet',
        'createaddition:zinc_sheet'
    )
//End of changes made on August 15, 2025

    //Make C:deco Cracked Red Bricks a smoking recipe to avoid recipe conflict
    event.custom({
        type: "minecraft:smoking",
        ingredient: { item: 'minecraft:bricks'},
        result: 'createdeco:cracked_red_bricks',
        experience: 0.1,
        cookingtime: 100
    })
//End of changes made on September 11, 2025
});