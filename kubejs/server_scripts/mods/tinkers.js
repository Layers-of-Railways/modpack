ServerEvents.recipes((event) => {
    const twoIngredientAlloying = [
        ["minecraft:copper_ingot", "minecraft:gold_ingot", "tconstruct:rose_gold_ingot", 2, "heated"],
        ["minecraft:amethyst_shard", "minecraft:copper_ingot", "tconstruct:amethyst_bronze_ingot", 1, "heated"],
        ["tconstruct:cobalt_ingot", "minecraft:netherite_scrap", "tconstruct:manyullyn_ingot", 2, "superheated"]
    ]

    const threeIngredientAlloying = [
        ["minecraft:quartz", "tconstruct:cobalt_ingot", "minecraft:copper_ingot", "tconstruct:hepatizon_ingot", 2],
        ["minecraft:gold_ingot", "minecraft:magma_cream", "tconstruct:cobalt_ingot", "tconstruct:queens_slime_ingot", 1],
    ]

    twoIngredientAlloying.forEach((recipe) => {
        event.remove({ output: recipe[2] });
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: recipe[0]
                },
                {
                    item: recipe[1]
                }
            ],
            results: [
                {
                    item: recipe[2],
                    count: recipe[3]
                },
            ],
            heatRequirement: recipe[4]
        });
    });

    threeIngredientAlloying.forEach((recipe) => {
        event.remove({ output: recipe[3] });
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: recipe[0]
                },
                {
                    item: recipe[1]
                },
                {
                    item: recipe[2]
                }
            ],
            results: [
                {
                    item: recipe[3],
                    count: recipe[4]
                },
            ],
            heatRequirement: "superheated"
        });
    });
});