ItemEvents.toolTierRegistry(event => {
    event.add('godforged', tier => {
      tier.uses = 6093
      tier.speed = 15
      tier.attackDamageBonus = 6
      tier.level = 5
      tier.enchantmentValue = 21
      tier.repairIngredient = 'kubejs:divine_bronze_ingot'
    })
  })