// Listen to item tag event
ServerEvents.tags('item', event => {
    event.add('godforge:lesser_energy_cell_consumer', 'kubejs:godforged_pickaxe')
    event.add('godforge:lesser_energy_cell_consumer', 'kubejs:godforged_axe')
    event.add('godforge:lesser_energy_cell_consumer', 'kubejs:godforged_shovel')
    event.add('godforge:lesser_energy_cell_consumer', 'kubejs:godforged_scythe')
    event.add('godforge:lesser_energy_cell_consumer', 'kubejs:godforged_sword')
  })