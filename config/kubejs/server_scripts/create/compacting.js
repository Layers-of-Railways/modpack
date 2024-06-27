ServerEvents.recipes((event) => {
    event.custom({
            "type": "create:compacting",
            "ingredients": [
              {
                "item": "minecraft:blackstone"
              },
              {
                "item": "minecraft:gold_ingot"
              }
            ],
            "results": [
              {
                "item": "minecraft:gilded_blackstone"
              }
            ],
            "heatRequirement": "heated"
    })
});