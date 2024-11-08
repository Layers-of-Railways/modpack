ServerEvents.recipes(event => {
  console.log('TinkersFixes Functioning!')
  event.remove({id: 'tconstruct:armor/building/travelers_shield'})
  event.shaped('tconstruct:travelers_shield', [
      ' A ', 
      'ABA',
      ' A '  
    ], {
      A: '#minecraft:planks', 
      B: 'minecraft:copper_ingot'
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 9000,
          "fluid": "tconstruct:molten_iron"
        }
      ],
      "ingredient": {
        "item": "tconstruct:raw_cobalt"
      },
      "rate": "metal",
      "result": {
        "amount": 9000,
        "fluid": "tconstruct:molten_cobalt"
      },
      "temperature": 950,
      "time": 97
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 18000,
          "fluid": "tconstruct:molten_iron"
        }
      ],
      "ingredient": {
        "fabric:type": "fabric:difference",
        "base": {
          "item": "tconstruct:cobalt_ore"
        },
        "subtracted": {
          "fabric:type": "fabric:any",
          "ingredients": [
            {
              "tag": "c:ore_rates/sparse"
            },
            {
              "tag": "c:ore_rates/dense"
            }
          ]
        }
      },
      "rate": "metal",
      "result": {
        "amount": 18000,
        "fluid": "tconstruct:molten_cobalt"
      },
      "temperature": 950,
      "time": 162
    }
  )
  event.custom(
    {
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "tconstruct:netherite_nugget"
      },
      "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_netherite"
      },
      "temperature": 1250,
      "time": 25
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 18000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "fabric:type": "fabric:difference",
        "base": {
          "tag": "c:zinc_ores"
        },
        "subtracted": {
        "fabric:type": "fabric:any",
        "ingredients": [
          {
            "tag": "c:ore_rates/sparse"
          },
          {
            "tag": "c:ore_rates/dense"
          }
        ]
      }
    },
    "rate": "metal",
    "result": {
      "amount": 18000,
      "fluid": "tconstruct:molten_zinc"
    },
    "temperature": 420,
    "time": 117
    }
  )  
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 3000,
          "fluid": "tconstruct:molten_gold"
        }
      ],
      "ingredient": {
        "item": "create:crushed_raw_copper"
      },
      "rate": "metal",
      "result": {
        "amount": 9000,
        "fluid": "tconstruct:molten_copper"
      },
      "temperature": 500,
      "time": 75
    }
  )  
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 9000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "create:crushed_raw_gold"
      },
      "rate": "metal",
      "result": {
        "amount": 9000,
        "fluid": "tconstruct:molten_gold"
      },
      "temperature": 700,
      "time": 85
    }
  )  
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 9000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "create:crushed_raw_iron"
      },
      "rate": "metal",
      "result": {
        "amount": 9000,
        "fluid": "tconstruct:molten_iron"
      },
      "temperature": 800,
      "time": 90
    }
  )  
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 9000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "create:crushed_raw_zinc"
      },
      "rate": "metal",
      "result": {
        "amount": 9000,
        "fluid": "tconstruct:molten_zinc"
      },
      "temperature": 420,
      "time": 70
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 3000,
          "fluid": "tconstruct:molten_gold"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_copper_nugget"
      },
      "rate": "metal",
      "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_copper"
      },
      "temperature": 500,
      "time": 16
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 3000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_gold_nugget"
      },
      "rate": "metal",
      "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_gold"
      },
      "temperature": 700,
      "time": 16
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 3000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_iron_nugget"
      },
      "rate": "metal",
      "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_iron"
      },
      "temperature": 800,
      "time": 16
    }
  )
  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 3000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_zinc_nugget"
      },
      "rate": "metal",
      "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_zinc"
      },
      "temperature": 420,
      "time": 16
    }
  )
  event.custom(
    {
      "type": "tconstruct:melting",
      "byproducts": [
        {
          "amount": 9000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_magnetite"
      },
      "rate": "metal",
      "result": {
        "amount": 18000,
        "fluid": "tconstruct:molten_iron"
      },
      "temperature": 800,
      "time": 180
    }
  )
  event.custom(
    {
      "type": "tconstruct:melting",
      "byproducts": [
        {
          "amount": 81000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_magnetite_block"
      },
      "rate": "metal",
      "result": {
        "amount": 162000,
        "fluid": "tconstruct:molten_iron"
      },
      "temperature": 800,
      "time": 772
    }
  )
  event.custom(
    {
      "type": "tconstruct:melting",
      "byproducts": [
        {
          "amount": 1000,
          "fluid": "tconstruct:molten_copper"
        }
      ],
      "ingredient": {
        "item": "spelunkery:raw_magnetite_nugget"
      },
      "rate": "metal",
      "result": {
        "amount": 2000,
        "fluid": "tconstruct:molten_iron"
      },
      "temperature": 800,
      "time": 32
    }
  )
  event.custom(
    {
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "minecraft:quartz"
      },
      "result": {
        "amount": 8100,
        "fluid": "tconstruct:molten_quartz"
      },
      "temperature": 637,
      "time": 55
    }
  )
})