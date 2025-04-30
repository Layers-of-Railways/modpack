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




//natures spirit wood stripping recipes for farmers and create


// all of the cutting board recipes(this took like 1h)


ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:fir_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_fir_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:redwood_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_redwood_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:wisteria_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_wisteria_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:sugi_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_sugi_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:willow_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_willow_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })


  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:aspen_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_aspen_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:maple_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_maple_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:cypress_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_cypress_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:olive_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_olive_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:joshua_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_joshua_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:ghaf_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_ghaf_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:palo_verde_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_palo_verde_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:coconut_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_coconut_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:cedar_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_cedar_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:larch_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_larch_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:mahogany_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_mahogany_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

  ServerEvents.recipes((e) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "natures_spirit:saxaul_log"
        }
      ],
      result: [
        {
          count: 1,
          item: 'natures_spirit:stripped_saxaul_log'
        },
        {
            count: 1,
            item: 'farmersdelight:tree_bark'
          }
      ],
      tool: {
        tag: "c:axes"
      }
    })
  })

// the deployer part YIPPEE

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:redwood_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_redwood_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:sugi_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_sugi_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:wisteria_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_wisteria_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:fir_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_fir_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:willow_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_willow_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:aspen_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_aspen_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:maple_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_maple_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:cypress_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_cypress_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:olive_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_olive_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:joshua_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_joshua_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:ghaf_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_ghaf_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:palo_verde_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_palo_verde_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:coconut_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_coconut_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:cedar_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_cedar_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:larch_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_larch_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:mahogany_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_mahogany_log"
    }
  ]
})
})

ServerEvents.recipes((e) => {
  e.custom({
  type: "create:deploying",
  ingredients: [
    {
      item: "natures_spirit:saxaul_log"
    },
    {
      tag: "c:axes"
    }
  ],
  results: [
    {
      item: "natures_spirit:stripped_saxaul_log"
    }
  ]
})
})

//i am all done after like 2days

//wow 920 lines you you even see these?
//tbf you prob do go read all of this to see if i do anything bad but i am not a ahole so i wont 
//i just want to help

//damn i remember that from before i was a mod
//i wont change any of my old shit unless i need too