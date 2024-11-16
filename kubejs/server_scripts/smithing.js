ServerEvents.recipes(event => {
    const shards = ["combat", "utility", "conjuring", "transport"];
    
    shards.forEach(name => {
        event.smithing(
            `kubejs:${name}_shard_netherite`,                     
            'minecraft:netherite_upgrade_smithing_template',
            `kubejs:${name}_shard_gilded`,
            'minecraft:netherite_block'
        );
    });
});