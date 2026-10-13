ServerEvents.recipes((event) => {
  // Pale Oak
  const types = [ ]
  for(let i = 0; i<2; i++) {
    event.custom({
      type: "create:cutting",
      ingredients: [
        { item: `minecraft:pale_oak_${i?'log':'wood'}` },
      ],
      processingTime: 50,
      results: [
        { item: `minecraft:stripped_pale_oak_${i?'log':'wood'}` },
      ],
    })
    event.custom({
      type: "create:cutting",
      ingredients: [
        { item: `minecraft:stripped_pale_oak_${i?'log':'wood'}` },
      ],
      processingTime: 50,
      results: [
        { item: `minecraft:pale_oak_planks`, count: 6 },
      ],
    })
  }
});

