StartupEvents.registry('item', e => {

    e.create('voidgazer_spyglass')
    .displayName('Voidgazer Spyglass')
    .texture('relics:item/voidgazer_spyglass')
    .unstackable()
    .rarity('epic')
    .glow(true)
    .useAnimation('spyglass')
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("minecraft:block.respawn_anchor.charge", 5, 0);
      return true;
    })
    .releaseUsing((_itemstack, level, entity, _tick) => {
      var destination = entity.rayTrace(64, false);
      var destX = destination.getHitX();
      var destY = destination.getHitY();
      var destZ = destination.getHitZ();
      var offhandItem = entity.getOffHandItem();
      var offhandCount = entity.offHandItem.getCount();
      if (offhandItem.getId() == `minecraft:amethyst_shard` && offhandCount > 0 && destination.block != null){
        entity.offHandItem.setCount(offhandCount - destination.distance);
        entity.teleportTo(destX, destY, destZ);
        entity.playSound("minecraft:entity.warden.sonic_boom", 5, 1);
      }
    });
    e.create('antenna').displayName('Antenna').texture('phonos:item/antenna');
    e.create('satellite_dish').displayName('Satellite Dish').texture('phonos:item/dish_antenna');
    
  })