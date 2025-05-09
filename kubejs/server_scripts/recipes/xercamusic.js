ServerEvents.recipes((event) => {
    // French Horn
    event.replaceInput({ output: 'xercamusic:french_horn' },
        '#c:gold_nuggets',
        '#c:brass_nuggets'
    )
    // Cymbal
    event.replaceInput({ output: 'xercamusic:cymbal' },
        '#c:gold_nuggets',
        '#c:brass_nuggets'
    )
    // Xylophone
    event.replaceInput({ output: 'xercamusic:xylophone' },
        '#minecraft:planks',
        'tropics:palm_planks'
    ),

    // Remove neccesary recipes
    event.remove({ output: 'xercamusic:tubular_bell' })
    event.remove({ output: 'xercamusic:french_horn' })
    event.remove({ output: 'xercamusic:saxophone' })
    event.remove({ output: 'xercamusic:guitar' })
    event.remove({ output: 'xercamusic:banjo' })
    event.remove({ output: 'xercamusic:violin' })
    event.remove({ output: 'xercamusic:cello' })
    event.remove({ output: 'xercamusic:flute' })
    event.remove({ output: 'xercamusic:drum' })
    event.remove({ output: 'xercamusic:oboe' })
    event.remove({ output: 'xercamusic:redstone_guitar' })
    event.remove({ output: 'xercamusic:bass_guitar' })
    event.remove({ output: 'xercamusic:piano' })
    event.remove({ output: 'xercamusic:music_box' })

    event.shaped('xercamusic:tubular_bell', [
        'SSS',
        'NNN',
        ' NN'
    ], {
        N: '#c:brass_nuggets',
        S: 'minecraft:stick'
    })
    // French Horn
    event.shaped('xercamusic:french_horn', [
        'B  ',
        'NN ',
        'NNN'
    ], {
        B: '#c:brass_ingots',
        N: '#c:brass_nuggets'
    })
    // Saxophone
    event.shaped('xercamusic:saxophone', [
        '  R', 
        'B N',
        ' BN'  
    ], {
        R: 'minecraft:bone', 
        N: '#c:brass_nuggets',
        B: '#c:brass_ingots'
    })
    // Guitar
    event.shaped('xercamusic:guitar', [
        '  T',
        'BS ',
        'BB '
    ], {
        B: 'promenade:maple_planks',
        S: 'minecraft:string',
        T: 'minecraft:stick'
    })
    // Banjo
    event.shaped('xercamusic:banjo', [
        '  T',
        'CS ',
        'RC '
    ], {
        T: 'minecraft:stick',
        C: 'minecraft:cherry_planks',
        S: 'minecraft:string',
        R: 'minecraft:rabbit_hide'
    }),
    // Violin
    event.shaped('xercamusic:violin', [
        '  T',
        'AS ',
        'AA '
    ], {
        A: 'minecraft:spruce_planks',
        S: 'minecraft:string',
        T: 'minecraft:stick'
    })
    // Cello
    event.shaped('xercamusic:cello', [
        '  T',
        'DS ',
        'DD '
    ], {
        D: 'minecraft:dark_oak_planks',
        S: 'minecraft:string',
        T: 'minecraft:stick'
    })
    // Flute
    event.shaped('xercamusic:flute', [
        '   ',
        'SSB',
        '   '
    ], {
        S: 'minecraft:stick',
        B: 'minecraft:bone'
    })
    // Drum
    event.shaped('xercamusic:drum', [
        'LL',
        'BB'
    ], {
        L: 'minecraft:leather',
        B: 'minecraft:birch_planks'
    })
    event.shaped('xercamusic:oboe', [
        'NNN',
        'DDD',
        '   '
    ], {
        N: '#c:iron_nuggets',
        D: 'minecraft:dark_oak_planks'
    })
    event.shaped('xercamusic:redstone_guitar', [
        '  T',
        'CS ',
        'NC '
    ], {
        N: 'phonos:electronic_note_block',
        S: 'minecraft:string',
        C: 'minecraft:crimson_planks',
        T: 'minecraft:stick'
    })
    event.shaped('xercamusic:bass_guitar', [
        '  I',
        'CS ',
        'NC '
    ], {
        N: 'phonos:electronic_note_block',
        S: 'minecraft:string',
        C: 'minecraft:crimson_planks',
        I: 'createaddition:iron_rod'
    })
    event.shaped('xercamusic:piano', [
        'MMM',
        'BBB',
        'M M'
    ], {
        B: 'minecraft:bone',
        M: 'natures_spirit:mahogany_planks'
    })
    event.shaped('xercamusic:piano', [
        'WWW',
        'BBB',
        'W W'
    ], {
        B: 'minecraft:bone',
        W: 'natures_spirit:willow_planks'
    })
    event.shaped('xercamusic:music_box', [
        'PPP',
        'PEP',
        'PTP'
    ], {
        P: '#minecraft:planks',
        E: 'createaddition:electrum_ingot',
        T: 'create:electron_tube'
    })
})