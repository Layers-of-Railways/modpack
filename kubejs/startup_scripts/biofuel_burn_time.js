ItemEvents.modification(event => {
    event.modify('createaddition:bioethanol_bucket', item => {
        item.burnTime = 20000
    })
    event.modify('createaddition:seed_oil_bucket', item => {
        item.burnTime = 16000
  })
})
