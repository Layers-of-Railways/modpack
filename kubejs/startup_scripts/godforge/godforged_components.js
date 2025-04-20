StartupEvents.registry('item', event => {
    event.create('divine_bronze_ingot', 'basic')
        .formattedDisplayName(Component.string("Divine Bronze Ingot").gold())
        .texture('godforge:item/divine_bronze_ingot')
        .tooltip('An ingot of divine bronze. It hums softly, as if attuned to the music of reality.')
        .fireResistant(true);

    event.create('divine_bronze_nugget', 'basic')
        .formattedDisplayName(Component.string("Divine Bronze Nugget").gold())
        .texture('godforge:item/divine_bronze_nugget')
        .tooltip('A nugget of divine bronze. It hums faintly, as if attuned to the music of reality.')
        .fireResistant(true);

    event.create('divine_bronze_sheet', 'basic')
        .formattedDisplayName(Component.string("Divine Bronze Sheet").gold())
        .texture('godforge:item/divine_bronze_sheet')
        .tooltip('A sheet of divine bronze. It hums quietly, as if attuned to the music of reality.')
        .fireResistant(true);

    event.create('sturdy_handle', 'basic')
        .formattedDisplayName(Component.string("Foundational Rod").red())
        .texture('godforge:item/sturdy_handle')
        .tooltip('A rod of foundational alloy, stronger than netherite and capable of containing the sheer power of divine machinery.')
        .fireResistant(true);
    
    event.create('stellite_shard', 'basic')
        .formattedDisplayName(Component.string("Stellite Gemstone").lightPurple())
        .texture('godforge:item/stellite_shard')
        .tooltip('A polished crystal of stellite. It pulses and hums with celestial rhythm.')
        .fireResistant(true);
    
    event.create('arcane_focus', 'basic')
        .formattedDisplayName(Component.string("Arcane Focus").lightPurple())
        .texture('godforge:item/stellite_arcane_focus')
        .tooltip('An etched crystal of stellite, primed to focus magic through it.')
        .fireResistant(true);

    event.create('divine_mechanical_components', 'basic')
        .formattedDisplayName(Component.string("Divine Mechanical Components").gold())
        .texture('godforge:item/divine_mechanical_components')
        .tooltip('An exquisitely machined handful of divine bronze gears. They tick and turn, even when not connected to a power source.')
        .fireResistant(true);

    event.create('lesser_energy_cell', 'basic')
        .formattedDisplayName(Component.string("Lesser Energy Cell").green())
        .texture('godforge:item/lesser_energy_cell')
        .tooltip('A carved and banded stellite battery.')
        .fireResistant(true);

    event.create('greater_energy_cell', 'basic')
        .formattedDisplayName(Component.string("Greater Energy Cell").blue())
        .texture('godforge:item/greater_energy_cell')
        .tooltip('A carved and banded stellite battery, reinforced and overcharged to fuel the most powerful of divine machinery.')
        .fireResistant(true);

    event.create('bloodstone_shard', 'basic')
        .formattedDisplayName(Component.string("Bloodstone Shard").darkRed())
        .texture('godforge:item/bloodstone_shard')
        .tooltip('A shard of humming, soul-imbued bloodstone. Ideal fuel for a godly furnace.')
        .fireResistant(true);

    event.create('bloodstone_fragment', 'basic')
        .formattedDisplayName(Component.string("Bloodstone Fragment").darkRed())
        .texture('godforge:item/bloodstone_fragment')
        .tooltip('A fragment of bloodstone. It still has a spark of power in it...')
        .fireResistant(true);
})