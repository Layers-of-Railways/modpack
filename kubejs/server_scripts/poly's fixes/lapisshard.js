ServerEvents.recipes(event => {
  console.log('LapisShard Functioning!')
  event.remove({id: 'spelunkery:lapis_lazuli_shard'})
})