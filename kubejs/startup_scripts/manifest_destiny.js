StartupEvents.registry('item', event => {
  event.create('manifest_destiny', 'pickaxe')
      .displayName('Manifest Destiny')
      .texture('relics:item/manifest_destiny')
      .unstackable()
      .rarity('epic')
      .tooltip('A hammer forged from netherite and raw earth magic.')
      .tooltip('The air around it shimmers with heat distortions and unlimited potential.')
      .glow(true)
      .barColor(_ => Color.rgba(255, 122, 47, 1))
      .barWidth(itemstack => {
          let nbt = itemstack.nbt || {};
          if (!nbt.Fuel) nbt.Fuel = 0; // Create NBT if missing
          return Math.ceil(0.013 * nbt.Fuel);
      })
      .useAnimation('spear')
      .attackDamageBaseline(11)
      .tier('netherite')
      .speedBaseline(-3.1)
      .useDuration(_ => 72000);
});
