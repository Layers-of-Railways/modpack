ServerEvents.recipes(event => {

    const shards = ["utility", "transport", "combat", "conjuring"];

    shards.forEach(name => {
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: `kubejs:inert_${name}_shard`
            },
            transitionalItem: {
                item: `kubejs:inert_${name}_shard`
            },
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        },
                        {
                            tag: "c:gold_plates"
                        }
                    ],
                    results: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        },
                        {
                            item: "endrem:cryptic_eye"
                        }
                ],
                    results: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        },
                        {
                            tag: "c:gold_plates"
                        }
                    ],
                    results: [
                        {
                            item: `kubejs:inert_${name}_shard`
                        }
                    ]
                }
            ],
            results: [
                {
                    item: `kubejs:incomplete_gilded_${name}_shard`
                }
            ],
            loops: 1
        });
    });
});