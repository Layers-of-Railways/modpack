StartupEvents.registry('block', event =>{
    event.create('stellite_block')
        .formattedDisplayName(Component.string('Stellite Block').lightPurple())
        .glassSoundType()
        .hardness(1.5)
        .resistance(3)
        .tagBlock('godforged_storage_block')
        .requiresTool(true)
        .textureAll('godforge:block/stellite_block')
        .tagBlock('minecraft:needs_diamond_tool');

    event.create('bloodstone_block')
        .formattedDisplayName(Component.string('Bloodstone Block').darkRed())
        .glassSoundType()
        .hardness(1.5)
        .resistance(3)
        .tagBlock('godforged_storage_block')
        .requiresTool(true)
        .textureAll('godforge:block/bloodstone_block')
        .tagBlock('minecraft:needs_diamond_tool');

    event.create('divine_bronze_block')
        .formattedDisplayName(Component.string('Divine Bronze Block').gold())
        .stoneSoundType()
        .hardness(1.5)
        .resistance(3)
        .tagBlock('godforged_storage_block')
        .requiresTool(true)
        .textureAll('godforge:block/divine_bronze_block')
        .tagBlock('minecraft:needs_diamond_tool');
})