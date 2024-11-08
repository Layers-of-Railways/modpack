StartupEvents.registry('item', e => {

  e.create('voidgazer_spyglass')
  .displayName('Voidgazer Spyglass')
  .texture('relics:item/voidgazer_spyglass')
  .unstackable()
  .rarity('epic')
  .tooltip('A magical spyglass forged from arcane metals and dark magic. Bring it to your eye to find the hidden shortcuts in reality...')
  .glow(true)
  .useAnimation('crossbow')
  .useDuration(_itemstack => 72000)
  .use((_level, player, _hand) => {
    player.playSound("minecraft:block.respawn_anchor.charge", 5, 0);
    return true;
  })
  .releaseUsing((itemstack, _level, entity, _tick) => {
    var destination = entity.rayTrace(64, false);
    var destX = destination.getHitX();
    var destY = destination.getHitY();
    var destZ = destination.getHitZ();
    var fuelNeeded = Math.ceil(entity.getDistance(destX, destY, destZ)/4);
    var offhandItem = entity.getOffHandItem();
    var offhandCount = entity.offHandItem.getCount();
    if (offhandItem.getId() == `minecraft:amethyst_shard` && offhandCount > 0 && destination.block != null && fuelNeeded < offhandCount){
      entity.offHandItem.setCount(offhandCount - fuelNeeded);
      entity.teleportTo(destX, destY, destZ);
      entity.playSound("minecraft:entity.warden.sonic_boom", 5, 1);
    }
    else{
      entity.attack(4);
      entity.playSound("minecraft:block.respawn_anchor.deplete", 5, 1);
    }
  });
  e.create('inert_transport_shard')
  .formattedDisplayName(Component.string("Inert Transport Shard").lightPurple())
  .texture('runic_shards:item/transport_inert')
  .unstackable()
  .rarity("common")
  .glow(false)
  .tooltip("An inert runic shard, formatted for transport spells.");
  e.create('inert_combat_shard')
  .formattedDisplayName(Component.string("Inert Combat Shard").red())
  .texture('runic_shards:item/combat_inert')
  .unstackable()
  .rarity("common")
  .glow(false)
  .tooltip("An inert runic shard, formatted for combat spells.");
  e.create('inert_conjuring_shard')
  .formattedDisplayName(Component.string("Inert Conjuring Shard").green())
  .texture('runic_shards:item/conjuring_inert')
  .unstackable()
  .rarity("common")
  .glow(false)
  .tooltip("An inert runic shard, formatted for conjuring spells.");
  e.create('inert_utility_shard')
  .formattedDisplayName(Component.string("Inert Utility Shard").blue())
  .texture('runic_shards:item/utility_inert')
  .unstackable()
  .rarity("common")
  .glow(false)
  .tooltip("An inert runic shard, formatted for utility spells.");

  e.create('incomplete_gilded_transport_shard')
  .formattedDisplayName(Component.string("Inert Transport Shard").lightPurple())
  .texture('runic_shards:item/transport_incomplete')
  .unstackable()
  .rarity("common")
  .glow(false)
  .tooltip("An inert runic shard, formatted for transport spells.");
  e.create('incomplete_gilded_combat_shard')
  .formattedDisplayName(Component.string("Incomplete Gilded Combat Shard").red())
  .texture('runic_shards:item/combat_incomplete')
  .unstackable()
  .rarity("common")
  .glow(false)
  e.create('incomplete_gilded_conjuring_shard')
  .formattedDisplayName(Component.string("Incomplete Gilded Conjuring Shard").green())
  .texture('runic_shards:item/conjuring_incomplete')
  .unstackable()
  .rarity("common")
  .glow(false)
  e.create('incomplete_gilded_utility_shard')
  .formattedDisplayName(Component.string("Incomplete Gilded Utility Shard").blue())
  .texture('runic_shards:item/utility_incomplete')
  .unstackable()
  .rarity("common")
  .glow(false)

/** * 
  * @param {Internal.LivingEntity} player
  * @param {Internal.MinecraftServer} server
  * @param {Internal.ItemStack} itemstack
  * @param {Internal.Level} level
  */

  const useShard = (itemstack, player, _level) => {
      var nbt = itemstack.getNbt();
      var spell = nbt.getString("Spell");
      if (nbt.getString("Spell") == null){
        itemstack.setNbt("{\"Spell\":\"\"}");
      }
      player.runCommandSilent("kubejs custom_command " +spell);
      player.addItemCooldown(player.mainHandItem, 20);
      
      itemstack.setDamageValue(itemstack.getDamageValue() + 1);
      if (itemstack.getDamageValue() >= itemstack.getMaxDamage()){
        player.playSound("entity.item.break", 5, 1);
        itemstack.shrink(1);
        }
      return true;
    }

  e.create('transport_shard_basic')
    .formattedDisplayName(Component.string("Transport Shard").lightPurple())
    .texture('runic_shards:item/transport_iron')
    .unstackable()
    .glow(true)
    .maxDamage(4)
    .useAnimation('bow')
    .barColor(_itemstack => Color.LIGHT_PURPLE)
    .barWidth(_itemstack => 13 - Math.ceil(3.25 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for transport spells.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.amethyst_cluster.break");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('transport_shard_gilded')
    .formattedDisplayName(Component.string("Gilded Transport Shard").lightPurple())
    .texture('runic_shards:item/transport_gold')
    .unstackable()
    .glow(true)
    .maxDamage(16)
    .useAnimation('bow')
    .barColor(_itemstack => Color.LIGHT_PURPLE)
    .barWidth(_itemstack => 13 - Math.ceil(0.81 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for transport spells and stabilized with enchanted gold.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.amethyst_cluster.break");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('transport_shard_netherite')
    .formattedDisplayName(Component.string("Reinforced Transport Shard").lightPurple())
    .texture('runic_shards:item/transport_netherite')
    .unstackable()
    .glow(true)
    .maxDamage(64)
    .useAnimation('bow')
    .barColor(_itemstack => Color.LIGHT_PURPLE)
    .barWidth(_itemstack => 13 - Math.ceil(0.20 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for transport spells and reinforced with netherite.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.amethyst_cluster.break");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

  e.create('utility_shard_basic')
    .formattedDisplayName(Component.string("Utility Shard").blue())
    .texture('runic_shards:item/utility_iron')
    .unstackable()
    .glow(true)
    .maxDamage(4)
    .useAnimation('bow')
    .barColor(_itemstack => Color.BLUE)
    .barWidth(_itemstack => 13 - Math.ceil(3.25 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for utility spells.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.activate");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('utility_shard_gilded')
    .formattedDisplayName(Component.string("Gilded Utility Shard").blue())
    .texture('runic_shards:item/utility_gold')
    .unstackable()
    .glow(true)
    .maxDamage(16)
    .useAnimation('bow')
    .barColor(_itemstack => Color.BLUE)
    .barWidth(_itemstack => 13 - Math.ceil(0.81 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for utility spells and stabilized with enchanted gold.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.activate");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('utility_shard_netherite')
    .formattedDisplayName(Component.string("Reinforced Utility Shard").blue())
    .texture('runic_shards:item/utility_netherite')
    .unstackable()
    .glow(true)
    .maxDamage(64)
    .useAnimation('bow')
    .barColor(_itemstack => Color.BLUE)
    .barWidth(_itemstack => 13 - Math.ceil(0.20 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for utility spells and reinforced with netherite.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.activate");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('combat_shard_basic')
    .formattedDisplayName(Component.string("Combat Shard").red())
    .texture('runic_shards:item/combat_iron')
    .unstackable()
    .glow(true)
    .maxDamage(4)
    .useAnimation('bow')
    .barColor(_itemstack => Color.RED)
    .barWidth(_itemstack => 13 - Math.ceil(3.25 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for combat spells.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("entity.evoker.cast_spell");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('combat_shard_gilded')
    .formattedDisplayName(Component.string("Gilded Combat Shard").red())
    .texture('runic_shards:item/combat_gold')
    .unstackable()
    .glow(true)
    .maxDamage(16)
    .useAnimation('bow')
    .barColor(_itemstack => Color.RED)
    .barWidth(_itemstack => 13 - Math.ceil(0.81 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for combat spells and stabilized with enchanted gold.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("entity.evoker.cast_spell");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('combat_shard_netherite')
    .formattedDisplayName(Component.string("Reinforced Combat Shard").red())
    .texture('runic_shards:item/combat_netherite')
    .unstackable()
    .glow(true)
    .maxDamage(64)
    .useAnimation('bow')
    .barColor(_itemstack => Color.RED)
    .barWidth(_itemstack => 13 - Math.ceil(0.20 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for combat spells and reinforced with netherite.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("entity.evoker.cast_spell");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('conjuring_shard_basic')
    .formattedDisplayName(Component.string("Conjuring Shard").green())
    .texture('runic_shards:item/conjuring_iron')
    .unstackable()
    .glow(true)
    .maxDamage(4)
    .useAnimation('bow')
    .barColor(_itemstack => Color.GREEN)
    .barWidth(_itemstack => 13 - Math.ceil(3.25 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for conjuring spells.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.attack.target");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('conjuring_shard_gilded')
    .formattedDisplayName(Component.string("Gilded Conjuring Shard").green())
    .texture('runic_shards:item/conjuring_gold')
    .unstackable()
    .glow(true)
    .maxDamage(16)
    .useAnimation('bow')
    .barColor(_itemstack => Color.GREEN)
    .barWidth(_itemstack => 13 - Math.ceil(0.81 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for conjuring spells and stabilized with enchanted gold.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.attack.target");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    e.create('conjuring_shard_netherite')
    .formattedDisplayName(Component.string("Reinforced Conjuring Shard").green())
    .texture('runic_shards:item/conjuring_netherite')
    .unstackable()
    .glow(true)
    .maxDamage(64)
    .useAnimation('bow')
    .barColor(_itemstack => Color.GREEN)
    .barWidth(_itemstack => 13 - Math.ceil(0.20 * _itemstack.damageValue))
    .tooltip("A runic shard, formatted for conjuring spells and reinforced with netherite.")
    .useDuration(_itemstack => 72000)
    .use((_level, player, _hand) => {
      player.playSound("item.lodestone_compass.lock", 5, 1);
      return true;
    })
    .releaseUsing((_itemstack, _level, player, tick) => {
      if (tick >= 20){
        player.playSound("block.conduit.attack.target");
        useShard(_itemstack, player, _level);
      } else { 
        return true;
      }
    });

    /** * 
    * @param {Internal.LivingEntity} player
    * @param {Internal.MinecraftServer} server
    * @param {Internal.ItemStack} itemstack
    * @param {Internal.Level} level
    */

    const useAdmin = (_itemstack, player, _level) => {
      var itemstack = player.getMainHandItem();
      var nbt = itemstack.getNbt();
      try {
          var spell = nbt.getString("Spell");
          player.runCommandSilent("kubejs custom_command " +spell);
          player.addItemCooldown(player.mainHandItem, 20);
          return true;
        }
      catch (error) {
        itemstack.setNbt("{\"Spell\":\"\"}");
        return true;
      }
    }

    e.create('admin_shard')
      .formattedDisplayName(Component.string("Master Shard").darkPurple())
      .texture('runic_shards:item/admin_shard')
      .unstackable()
      .glow(true)
      .useAnimation('bow')
      .tooltip("An unbreakable runic shard, multiformatted for any spell.")
      .useDuration(_itemstack => 72000)
      .use((_level, player, _hand) => {
        player.playSound("block.end_portal_frame.fill", 5, 1);
        return true;
      })
      .releaseUsing((itemstack, _level, player, _tick) => {
        player.playSound("item.trident.thunder", 5, 1);
        useAdmin(itemstack, player, _level);
      });
})


