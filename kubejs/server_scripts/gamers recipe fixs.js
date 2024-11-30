//travertine fix

//put this in server scripts (but you know this... right?)

// Recipes only need to be registered once here :3
ServerEvents.recipes((event) => {
    // These are the prefixes for the blocks
    const mainVariants = ["cobbled_travertine", "polished_travertine", "travertine_brick", "travertine_tile"]
    // And the suffixes
    const blockTypes = ["stairs", "slab", "wall"]

    // We cycle through the main variants
    mainVariants.forEach(variant => {
        // Then also loop within this loop for the suffixes (block types)
        blockTypes.forEach(type => {
            // This is a conditional statement. It checks with the "?" if type is equal to slab. If so set the multiplier to "x2", otherwise set to nothing. 
            const multiplier = type === 'slab' ? "2x " : "";
            // Input all out information into the template literal
            event.stonecutting(`${multiplier}natures_spirit:${variant}_${type}`, 'natures_spirit:travertine')
        })
    })
    // Repeat with the other variants we can't include in the main variants due to weird naming
    const otherVariants = ["cobbled_travertine", "travertine_slab", "chiseled_travertine", "travertine_bricks", "travertine_tiles"]
    otherVariants.forEach(variant => event.stonecutting(`natures_spirit:${variant}`, 'natures_spirit:travertine'))
});
//thanks Evelyn for this :3
//enjoy Katherine (i know that they will never see this but still)

//sky steel ingot mixer recipe
ServerEvents.recipes(event => {
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
});
})

//the compact iron fluid tank recipe fix

ServerEvents.recipes(event => {
    event.shaped('design_decor:gas_tank', [// arg 1: output
        'BAB', 
        'B B', // arg 2: the shape (array of strings)
        'BBB'  
      ], {
        A: 'create:andesite_alloy', 
        B: 'create:iron_sheet'  //arg 3: the mapping object  
      })
    })
    ServerEvents.recipes(event => {
    event.remove({ id: 'design_decor:crafting/gas_tank' })
    })

    // certus quartz budding mixer recipe
    //hi evelyn :3 i hope i made this good idk if there is some way to do the same thing as the stone cutter recipes

    ServerEvents.recipes((event) => {
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
      });
  });
  ServerEvents.recipes((event) => {
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
      });
  });
  ServerEvents.recipes((event) => {
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
      });
  });

  //dedelion tea fix recipe

  ServerEvents.recipes((event) => {
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
    });
});
//i am getting better at this (i think)

