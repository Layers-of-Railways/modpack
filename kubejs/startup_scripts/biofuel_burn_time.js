ItemEvents.modification(event => {
    event.modify('createaddition:bioethanol_bucket', item => {
        item.rarity = 'RARE'
        item.burnTime = 20000
    })
    event.modify('createaddition:seed_oil_bucket', item => {
        item.rarity = 'RARE'
        item.burnTime = 16000
  })
})