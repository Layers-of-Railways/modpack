StartupEvents.registry('item', event => {
    event.create('godforged_pickaxe', 'pickaxe')
        .formattedDisplayName(Component.string("Godforged Pickaxe").gold())
        .rarity("epic")
        .texture('godforge:item/divine_pickaxe')
        .unstackable()
        .tooltip('A pickaxe crafted from the mechanical workings of reality itself.')
        .glow(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(160, 255, 153, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .attackDamageBaseline(6)
        .tier('godforged')
        .speedBaseline(-1.2)
        .useDuration(_ => 72000);

    event.create('godforged_axe', 'axe')
        .formattedDisplayName(Component.string("Godforged Axe").gold())
        .rarity("epic")
        .texture('godforge:item/divine_axe')
        .unstackable()
        .tooltip('An axe crafted from the mechanical workings of reality itself.')
        .glow(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(160, 255, 153, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .attackDamageBaseline(10)
        .speedBaseline(-1.2)
        .useDuration(_ => 72000);

    event.create('godforged_shovel', 'shovel')
        .formattedDisplayName(Component.string("Godforged Shovel").gold())
        .rarity("epic")
        .texture('godforge:item/divine_shovel')
        .unstackable()
        .tooltip('A shovel crafted from the mechanical workings of reality itself.')
        .glow(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(160, 255, 153, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .attackDamageBaseline(8)
        .speedBaseline(-2)
        .useDuration(_ => 72000);

    event.create('godforged_scythe', 'hoe')
        .formattedDisplayName(Component.string("Godforged Scythe").gold())
        .rarity("epic")
        .texture('godforge:item/divine_scythe')
        .unstackable()
        .tooltip('A scythe crafted from the mechanical workings of reality itself.')
        .glow(true)
        .fireResistant(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(160, 255, 153, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .attackDamageBaseline(14)
        .speedBaseline(-2.8)
        .useDuration(_ => 72000);

    event.create('godforged_sword', 'sword')
        .formattedDisplayName(Component.string("Godforged Sword").gold())
        .rarity("epic")
        .texture('godforge:item/divine_sword')
        .unstackable()
        .tooltip('A sword crafted from the mechanical workings of reality itself.')
        .glow(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(160, 255, 153, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .attackDamageBaseline(16)
        .speedBaseline(-1.2)
        .useDuration(_ => 72000);

    event.create('godforged_wand', 'basic')
        .formattedDisplayName(Component.string("Godforged Manipulator").gold())
        .texture('godforge:item/divine_wand')
        .tooltip('A manipulator from the Prime Godforge itself. It sizzles with barely-contained potential.')
        .unstackable()
        .glow(true)
        .fireResistant(true)
        .barColor(_ => Color.rgba(161, 251, 232, 1))
        .barWidth(itemstack => {
            let nbt = itemstack.nbt || {};
            if (!nbt.Energy) nbt.Energy = 0; // Create NBT if missing
            return Math.ceil(0.013 * nbt.Energy);
        })
        .useAnimation('toot_horn')
        .useDuration(_ => 72000);
  });