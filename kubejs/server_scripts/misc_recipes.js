//priority: 0
ServerEvents.recipes((event) => {
//dragons breath crafting

//deletes old fluid to bottle conversion coz 250 was too much
    event.remove({ output: `minecraft:dragon_breath` })
    event.remove({ id: `create_central_kitchen:emptying/dragon_breath_emptying` })

//craft itself
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:dragon_head",
            },
            {
                item: "minecraft:end_crystal",
            },
        ],
        results: [
            {
                item: "minecraft:dragon_head"
            },
            {
                fluid: "create_central_kitchen:dragon_breath",
                amount: 800
            }

        ],
        heatRequirement: "superheated",
    });

//filling + draining with new numbers

//draining
    event.custom({
        type: "create:emptying",
        ingredients: [
            {
                item: "minecraft:dragon_breath",
            }
        ],
        results: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                fluid: "create_central_kitchen:dragon_breath",
                amount: 50
            }
        ]
    });
//filling
    event.custom({
        type: "create:filling",
        ingredients: [
            {
                item: "minecraft:glass_bottle",
            },
            {
                fluid: "create_central_kitchen:dragon_breath",
                amount: 50
            }
        ],
        results: [
            {
                item: "minecraft:dragon_breath"
            }
        ]
    });
});
