
ServerEvents.recipes((event) => {
  // Travertine fix
  const mainVariants = ["cobbled_travertine", "polished_travertine", "travertine_brick", "travertine_tile"]
  const blockTypes = ["stairs", "slab", "wall"]

  mainVariants.forEach(variant => {
      blockTypes.forEach(type => {
          const multiplier = type === 'slab' ? "2x " : "";
          event.stonecutting(`${multiplier}natures_spirit:${variant}_${type}`, 'natures_spirit:travertine')
      })
  })
  const otherVariants = ["cobbled_travertine", "travertine_slab", "chiseled_travertine", "travertine_bricks", "travertine_tiles"]
  otherVariants.forEach(variant => event.stonecutting(`natures_spirit:${variant}`, 'natures_spirit:travertine'))

  // Sky steel ingot mixer recipe
  event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: "ae2:charged_certus_quartz_crystal",
        },
        {
            tag: "c:iron_ingots",
        },
        //{
            //fluid: "minecraft:lava",
            //amount: 8100,
        //},
        {
            item: "ae2:sky_stone_block",
        },
    ],
    results: [
        {
            item: "megacells:sky_steel_ingot",
            count: 2
        },
    ],
    heatRequirement: "heated"
  })

  // Compact iron fluid tank recipe fix
  event.shaped('design_decor:gas_tank', [// arg 1: output
    'BAB', 
    'B B', // arg 2: the shape (array of strings)
    'BBB'  
  ], {
    A: 'create:andesite_alloy', 
    B: 'create:iron_sheet'  //arg 3: the mapping object   
  })

  // Certus quartz recipes
  event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: "ae2:charged_certus_quartz_crystal",
        },
        {
            fluid: "minecraft:water",
            amount: 8100,
        },
        {
            item: "ae2:quartz_block",
        },
    ],
    results: [
        {
            item: "ae2:damaged_budding_quartz"
        },
    ],
    //heatRequirement: "heated",
    })

    event.custom({
      type: "create:mixing",
      ingredients: [
          {
              item: "ae2:charged_certus_quartz_crystal",
          },
          {
              fluid: "minecraft:water",
              amount: 8100,
          },
          {
              item: "ae2:damaged_budding_quartz",
          },
      ],
      results: [
          {
              item: "ae2:chipped_budding_quartz"
          },
      ],
      //heatRequirement: "heated",
  })

  event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: "ae2:charged_certus_quartz_crystal",
        },
        {
            fluid: "minecraft:water",
            amount: 8100,
        },
        {
            item: "ae2:chipped_budding_quartz",
        },
    ],
    results: [
        {
            item: "ae2:flawed_budding_quartz"
        },
    ],
    //heatRequirement: "heated",
  })

  // Dandelion tea fix recipe
  event.custom({
    type: "create:mixing",
    ingredients: [
        {
            tag: "c:tea_leaves",
        },
        {
            item: "minecraft:dandelion",
        },
        {
            fluid: "minecraft:water",
            amount: 20250,
        },
    ],
    results: [
        {
            fluid: "respitecreators:dandelion_tea",
            amount: 20250,
        },
    ],
    heatRequirement: "heated",
  })

  const logs = [
      'fir', 'redwood', 'wisteria', 'sugi', 'willow', 'aspen', 'maple',
      'cypress', 'olive', 'joshua', 'ghaf', 'palo_verde', 'coconut',
      'cedar', 'larch', 'mahogany', 'saxaul'
  ]

  logs.forEach(log => {
      const logItem = `natures_spirit:${log}_log`
      const strippedItem = `natures_spirit:stripped_${log}_log`
      
      // Farmers Delight cutting
      event.custom({
          type: "farmersdelight:cutting",
          ingredients: [{ item: logItem }],
          result: [
              { count: 1, item: strippedItem },
              { count: 1, item: 'farmersdelight:tree_bark' }
          ],
          tool: { tag: "c:axes" }
      })

      // Create log stripping
      event.custom({
          type: "create:deploying",
          ingredients: [
              { item: logItem },
              { tag: "c:axes" }
          ],
          results: [{ item: strippedItem }]
      })
  })
})