
let waxItems = [
    "exposed_plate_iron_stairs",
    "weathered_plate_iron_stairs",
    "rusted_plate_iron_stairs",
    "plate_iron_slab",
    "exposed_plate_iron_slab",
    "weathered_plate_iron_slab",
    "rusted_plate_iron_slab",
    "plate_iron_stairs",
    "rusted_plate_iron",
    "weathered_plate_iron",
    "plate_iron",
    "exposed_plate_iron"
]
ServerEvents.recipes(event => {
waxItems.forEach((item) => {
    event.custom({
        "type": "create:deploying",
  "ingredients": [
    {
      "item": 'immersive_weathering:' + item
    },
    {
      "item": "minecraft:honeycomb_block"
    }
  ],
  "results": [
    {
      "item": 'immersive_weathering:waxed_' + item
    }
  ],
  "keepHeldItem": true
    })

})


})