ServerEvents.recipes(event => {
  console.log('BrewinChewin Functioning!')
  event.remove({id: 'brewinandchewin:kimchi'})
  event.custom({
    "type": "brewinandchewin:fermenting",
    "experience": 0.6,
    "fermentingtime": 12000,
    "ingredients": [
      {
        "item": "farmersdelight:cabbage_leaf"
      },
      {
        "tag": "c:foods/vegetables"
      },
      {
        "item": "minecraft:kelp"
      }
    ],
    "recipe_book_tab": "misc",
    "result": {
      "count": 2,
      "item": "brewinandchewin:kimchi"
    },
    "temperature": 3
  })
  event.remove({id: 'farmersdelight:hamburger'})
  event.shapeless('farmersdelight:hamburger', [ 
    'minecraft:bread',
    'farmersdelight:beef_patty',
    '#c:salad_ingredients',
    '#c:crops/tomato',
    '#c:crops/onion'
  ])
  event.custom(
    {
      "type": "farmersdelight:cooking",
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "minecraft:brown_mushroom"
        },
        {
          "item": "farmersdelight:raw_pasta"
        },
        {
          "tag": "c:salad_ingredients"
        },
        {
          "tag": "c:foods/vegetables"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "item": "farmersdelight:vegetable_noodles"
      }
    }
  )
  event.custom(
    {
      "type": "farmersdelight:cooking",
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "farmersdelight:wheat_dough"
        },
        {
          "tag": "c:crops/cabbage"
        },
        {
          "tag": "c:crops/onion"
        },
        [
          {
            "tag": "c:foods/raw_meats/raw_chicken"
          },
          {
            "tag": "c:foods/raw_meats/raw_pork"
          },
          {
            "tag": "c:foods/raw_meats/raw_beef"
          },
          {
            "item": "minecraft:brown_mushroom"
          }
        ]
      ],
      "recipe_book_tab": "misc",
      "result": {
        "count": 2,
        "item": "farmersdelight:dumplings"
      }
    }
  )
})