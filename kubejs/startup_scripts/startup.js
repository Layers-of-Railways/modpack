StartupEvents.registry('item', e => {

    e.create('voidgazer_spyglass').displayName('Voidgazer Spyglass').texture('relics:item/voidgazer_spyglass').unstackable().rarity('epic').glow(true).useAnimation('bow')
    .useDuration(itemstack => 72000)
    .use((level, player, hand) => {
      player.playSound("minecraft:block.respawn_anchor.charge", 5, 0);
      return true;
    })
    .releaseUsing((itemstack, level, entity, tick) => {
      var destination = entity.rayTrace(128, false);
      var destX = destination.getHitX();
      var destY = destination.getHitY();
      var destZ = destination.getHitZ();
      var offhandItem = entity.getOffHandItem();
      var offhandCount = entity.offHandItem.getCount();
      if (offhandItem.getId() == `minecraft:amethyst_shard` && offhandCount > 0 && destination.block != null){
        entity.offHandItem.setCount(offhandCount - 1);
        entity.moveTo(destX, destY, destZ);
        entity.playSound("minecraft:entity.warden.sonic_boom", 5, 1);
      }
    });
    e.create('antenna').displayName('Antenna').texture('phonos:item/antenna');
    e.create('satellite_dish').displayName('Satellite Dish').texture('phonos:item/dish_antenna');
    
  })