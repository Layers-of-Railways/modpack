const chains = [
  "tconstruct:manyullyn", "tconstruct:cobalt", "createaddition:electrum", "tconstruct:hepatizon", "minecraft:iron", "minecraft:netherite", "tconstruct:pig_iron", { dd: 'queen_slime', real: 'tconstruct:queens_slime'}, "tconstruct:rose_gold"
]

ServerEvents.recipes((event) => {
  chains.forEach(c => {
    event.remove({ id: `design_decor:stonecutting/chain/${c.dd ? c.dd : c.split(':')[1]}_large_chain` });
    event.stonecutting(`4x design_decor:${c.dd ? c.dd : c.split(':')[1]}_large_chain`, `${c.real ? c.real : c}_ingot`)
  })
})
