ServerEvents.recipes(event => {

    const shards = ["utility", "transport", "combat", "conjuring"];

    shards.forEach(name => {
        event.custom({
            type:"createaddition:charging",
            input: {
                item: `kubejs:inert_${name}_shard`,
                count: 1
            },
            result:  {
                item: `kubejs:${name}_shard_basic`,
                count: 1
            },
            energy: 1000000,
            maxChargeRate: 800
        });
    });

    shards.forEach(name => {
        event.custom({
            type:"createaddition:charging",
            input: {
                item: `kubejs:incomplete_gilded_${name}_shard`,
                count: 1
            },
            result:  {
                item: `kubejs:${name}_shard_gilded`,
                count: 1
            },
            energy: 4000000,
            maxChargeRate: 1200
        });
    })
});