ServerEvents.tags('item', event => {
  console.log('Thallasium Functioning!')
  event.remove('c:iron_ingots', 'betterend:thallasium_ingot')
})