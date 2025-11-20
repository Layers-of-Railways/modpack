const twoIngredientAlloying = [
    ["minecraft:copper_ingot", "minecraft:gold_ingot", "tconstruct:rose_gold_ingot", 2, "heated"],
    ["minecraft:amethyst_shard", "minecraft:copper_ingot", "tconstruct:amethyst_bronze_ingot", 1, "heated"],
    ["tconstruct:cobalt_ingot", "minecraft:netherite_scrap", "tconstruct:manyullyn_ingot", 2, "superheated"]
]

const threeIngredientAlloying = [
    ["minecraft:quartz", "tconstruct:cobalt_ingot", "minecraft:copper_ingot", "tconstruct:hepatizon_ingot", 2],
    ["minecraft:gold_ingot", "minecraft:magma_cream", "tconstruct:cobalt_ingot", "tconstruct:queens_slime_ingot", 1],
]

const blockRecipes = {
    "amethyst_bronze": 182, "cobalt": 194, "hepatizon": 233, "manyullyn": 182, "rose_gold": 155, "silver": 180
}
const nuggetRecipes = {
    "amethyst_bronze": { time: 20 }, "cobalt": { time: 22 }, "silver": { time: 20, mod: "yjas" }, "electrum": { time: 20, mod: "createaddition" }, "hepatizon": { time: 26 }, "manyullyn": { time: 24 }, "rose_gold": { time: 17 }, "netherite": { time: 25 }
}
const ingotRecipes = {
    "amethyst_bronze": { time: 61 }, "cobalt": { time: 65 }, "electrum": { time: 59, mod: "createaddition" }, "hepatizon": { time: 78 }, "manyullyn": { time: 72 }, "queens_slime": { time: 71 }, "rose_gold": { time: 52 }, "silver": { time: 60, mod: "yjas" }
}
const rodRecipes = {
    "brass": { time: 38 }, "copper": { time: 35 }, "electrum": { time: 42 }, "gold": { time: 40 }, "iron": { time: 43 }
}
const plateRecipes = {
    "zinc": { time: 47 }, "electrum": { time: 59 }
}
const wireRecipes = {
    "copper": { time: 35 }, "electrum": { time: 42 }, "gold": { time: 40 }, "iron": { time: 43 }
}


ServerEvents.recipes((event) => {
    // Alloying
    twoIngredientAlloying.forEach((recipe) => {
        event.remove({ output: recipe[2], type: "create:mixing" });
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
        event.remove({ output: recipe[3], type: "create:mixing" });
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

    // Polys fixes
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
    
    // grosik's tinkers fixes
    for(let key in blockRecipes) {
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/block` });
        event.custom({
            type: 'tconstruct:casting_basin',
            cooling_time: blockRecipes[key],
            fluid: {
                amount: 81000,
                name: `tconstruct:molten_${key}`
            },
            result: `${key == 'silver' ? 'yjas' : 'tconstruct'}:${key}_block`
        })
    }

    let nugV
    for(let key in nuggetRecipes) {
        nugV = nuggetRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/nugget_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/nugget"
            },
            cast_consumed: true,
            cooling_time: nugV.time,
            fluid: {
                amount: 1000,
                name: `tconstruct:molten_${key}`
            },
            result: `${nugV.mod ? nugV.mod : 'tconstruct'}:${key}_nugget`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/nugget_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/nugget"
            },
            cooling_time: nugV.time,
            fluid: {
                amount: 1000,
                name: `tconstruct:molten_${key}`
            },
            result: `${nugV.mod ? nugV.mod : 'tconstruct'}:${key}_nugget`
        })
    }

    let ingV
    for(let key in ingotRecipes) {
        ingV = ingotRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/ingot_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/ingot"
            },
            cast_consumed: true,
            cooling_time: ingV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${ingV.mod ? ingV.mod : 'tconstruct'}:${key}_ingot`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/ingot_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/ingot"
            },
            cooling_time: ingV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${ingV.mod ? ingV.mod : 'tconstruct'}:${key}_ingot`
        })
    }

    let rodV
    for(let key in rodRecipes) {
        rodV = rodRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/rod_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/rod"
            },
            cast_consumed: true,
            cooling_time: rodV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${rodV.mod ? rodV.mod : 'createaddition'}:${key}_rod`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/rod_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/rod"
            },
            cooling_time: rodV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${rodV.mod ? rodV.mod : 'createaddition'}:${key}_rod`
        })
    }

    let plaV
    for(let key in plateRecipes) {
        plaV = plateRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/plate_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/plate"
            },
            cast_consumed: true,
            cooling_time: plaV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${plaV.mod ? plaV.mod : 'createaddition'}:${key}_sheet`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/plate_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/plate"
            },
            cooling_time: plaV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${plaV.mod ? plaV.mod : 'createaddition'}:${key}_sheet`
            cooling_time: plaV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${plaV.mod ? plaV.mod : 'createaddition'}:${key}_sheet`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/plate_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/plate"
            },
            cooling_time: plaV.time,
            fluid: {
                amount: 9000,
                name: `tconstruct:molten_${key}`
            },
            result: `${plaV.mod ? plaV.mod : 'createaddition'}:${key}_sheet`
        })
    }

    let wireV
    for(let key in wireRecipes) {
        wireV = wireRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/wire_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/wire"
            },
            cast_consumed: true,
            cooling_time: wireV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${wireV.mod ? wireV.mod : 'createaddition'}:${key}_wire`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/wire_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/wire"
            },
            cooling_time: wireV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${wireV.mod ? wireV.mod : 'createaddition'}:${key}_wire`
        })
    }
        })
    }

    let wireV
    for(let key in wireRecipes) {
        wireV = wireRecipes[key]
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/wire_sand_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/single_use/wire"
            },
            cast_consumed: true,
            cooling_time: wireV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${wireV.mod ? wireV.mod : 'createaddition'}:${key}_wire`
        })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${key}/wire_gold_cast` });
        event.custom({
            type: 'tconstruct:casting_table',
            cast: {
                tag: "tconstruct:casts/multi_use/wire"
            },
            cooling_time: wireV.time,
            fluid: {
                amount: 4500,
                name: `tconstruct:molten_${key}`
            },
            result: `${wireV.mod ? wireV.mod : 'createaddition'}:${key}_wire`
        })
    }
});
