ServerEvents.recipes((event) => {
    // Digeridoo
    event.replaceInput({ output: 'immersive_melodies:didgeridoo' },
        '#minecraft:planks',
        'natures_spirit:mahogany_planks'
    )
    // Lute
    event.replaceInput({ output: 'immersive_melodies:lute' },
        '#minecraft:planks',
        'minecraft:acacia_planks'
    )
    // Triangle
    event.replaceInput({ output: 'immersive_melodies:triangle' },
        '#c:copper_ingots',
        '#c:brass_nuggets'
    )
    // Trumpet
    event.replaceInput({ output: 'immersive_melodies:trumpet' },
        '#c:copper_ingots',
        '#c:brass_ingots'
    )
    // Tiny Drum
    event.replaceInput({ output: 'immersive_melodies:tiny_drum' },
        '#minecraft:logs',
        'minecraft:stripped_birch_log'
    )
    // Vielle
    event.replaceInput({ output: 'immersive_melodies:vielle' },
        '#minecraft:logs',
        'minecraft:stripped_mangrove_log'
    )
})