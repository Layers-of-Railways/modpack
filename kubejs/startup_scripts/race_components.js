StartupEvents.registry('item', event => {
    event.create('divine_trophy', 'basic')
        .formattedDisplayName(Component.string("Divine Trophy").gold())
        .texture('event_equipment:item/divine_trophy')
        .unstackable()
        .fireResistant(true)
        .useAnimation('toot_horn')
        .useDuration(_ => 72000)
        .use((_level, player, _hand) => {
                player.playSound("block.amethyst_block.resonate", 5, 1);
                return true;
            })
        .releaseUsing((_itemstack, _level, player, tick) => {
                player.playSound("block.amethyst_block.chime");
                return true;
            });

    event.create('infernal_trophy', 'basic')
        .formattedDisplayName(Component.string("Infernal Trophy").darkRed())
        .texture('event_equipment:item/infernal_trophy')
        .unstackable()
        .fireResistant(true)
        .useAnimation('toot_horn')
        .useDuration(_ => 72000)
        .use((_level, player, _hand) => {
            player.playSound("block.campfire.crackle", 5, 1);
            return true;
        })
    .releaseUsing((_itemstack, _level, player, tick) => {
            player.playSound("entity.blaze.shoot");
            return true;
        });

    event.create('gilded_trophy', 'basic')
        .formattedDisplayName(Component.string("Gilded Trophy").blue())
        .texture('event_equipment:item/gilded_trophy')
        .unstackable()
        .fireResistant(true)
        .useAnimation('toot_horn')
        .useDuration(_ => 72000)
        .use((_level, player, _hand) => {
            player.playSound("item.lodestone_compass.lock", 5, 1);
            return true;
        })
    .releaseUsing((_itemstack, _level, player, tick) => {
            player.playSound("block.note_block.bit");
            return true;
        });

    event.create('prize_token', 'basic')
        .formattedDisplayName(Component.string("Prize Token").aqua())
        .texture('event_equipment:item/prize_token')
        .fireResistant(true);

    event.create('admin_baton', 'basic')
        .formattedDisplayName(Component.string("Admin Baton").darkAqua())
        .texture('event_equipment:item/admin_baton')
        .fireResistant(true);
})