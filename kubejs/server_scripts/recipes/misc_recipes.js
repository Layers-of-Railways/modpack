// priority: 0
ServerEvents.recipes((event) => {
    event.shaped(
        Item.of("minecraft:furnace", 1),
        [
            "AAA",
            "A A",
            "AAA",
        ],
        {
            A: "#minecraft:stone_crafting_materials",
        },
    );

    // Travertine recipes
    const mainVariants = ["cobbled_travertine", "polished_travertine", "travertine_brick", "travertine_tile"]
    const blockTypes = ["stairs", "slab", "wall"]

    mainVariants.forEach(variant => {
        blockTypes.forEach(type => {
            const multiplier = type === 'slab' ? "2x " : "";
            event.stonecutting(`${multiplier}natures_spirit:${variant}_${type}`, 'natures_spirit:travertine')
        })
    })

    const otherVariants = ["cobbled_travertine", "travertine_slab", "chiseled_travertine", "travertine_bricks", "travertine_tiles"]
    otherVariants.forEach(variant => event.stonecutting(`natures_spirit:${variant}`, 'natures_spirit:travertine'))

    // Sky Steel Ingot
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "ae2:charged_certus_quartz_crystal",
            },
            {
                tag: "c:iron_ingots",
            },
            {
                item: "ae2:sky_stone_block",
            },
        ],
        results: [
            {
                item: "megacells:sky_steel_ingot",
                count: 2
            },
        ],
        heatRequirement: "heated"
    });

    // Compact iron fluid tank recipe fix
    event.shaped('design_decor:gas_tank', [
        'BAB', 
        'B B',
        'BBB'  
      ], {
        A: 'create:andesite_alloy', 
        B: 'create:iron_sheet'
    })
    event.remove({ id: 'design_decor:crafting/gas_tank' })

    // Zipline - Giving more uses for the Rolling Mill
    event.remove({ output: 'zipline:zipline' })
    event.shaped('zipline:zipline', [
        ' G ',
        ' TG',
        'S  '
    ], {
        S: 'minecraft:shears',
        T: '#minecraft:terracotta',
        G: '#c:gold_rods'
    })

    // Unique Kalan recipe
    event.replaceInput({ output: 'ubesdelight:kalan' },
        'minecraft:iron_ingot',
        '#c:iron_plates'
    )

    // Thai's Delight. Make use of Iron Rods
    event.replaceInput({ output: 'muffins_thaidelight:mortar' },
        'minecraft:stick',
        '#c:iron_rods'
    )
    
    // Use leather bound stick from betterend with the chisel
    event.replaceInput({ output: 'rechiseled:chisel' },
        "minecraft:stick",
        "betterend:leather_wrapped_stick"
    )
})
