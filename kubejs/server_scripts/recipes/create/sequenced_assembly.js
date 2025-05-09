ServerEvents.recipes(event => {

    const shards = ["utility", "transport", "combat", "conjuring"];

    shards.forEach(name => {
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: `kubejs:${name}_shard_basic`
            },
            transitionalItem: {
                item: `kubejs:${name}_shard_basic`
            },
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:${name}_shard_basic`
                        },
                        {
                            tag: "c:gold_plates"
                        }
                    ],
                    results: [
                        {
                            item: `kubejs:${name}_shard_basic`
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:${name}_shard_basic`
                        },
                        {
                            item: "endrem:cryptic_eye"
                        }
                ],
                    results: [
                        {
                            item: `kubejs:${name}_shard_basic`
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: `kubejs:${name}_shard_basic`
                        },
                        {
                            tag: "c:gold_plates"
                        }
                    ],
                    results: [
                        {
                            item: `kubejs:${name}_shard_basic`
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