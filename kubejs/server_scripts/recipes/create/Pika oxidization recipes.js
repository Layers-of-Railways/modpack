ServerEvents.recipes(event => {
    const transformations = [
        // Format: ["input_item", "output_item"]
        ["minecraft:copper_block", "minecraft:exposed_copper"], //Vanilla copper blocks
        ["minecraft:exposed_copper", "minecraft:weathered_copper"],
        ["minecraft:weathered_copper", "minecraft:oxidized_copper"],
        ["minecraft:cut_copper", "minecraft:exposed_cut_copper"], //Vanilla cut copper blocks
        ["minecraft:exposed_cut_copper", "minecraft:weathered_cut_copper"],
        ["minecraft:weathered_cut_copper", "minecraft:oxidized_cut_copper"],
        ["minecraft:cut_copper_stairs", "minecraft:exposed_cut_copper_stairs"], //Vanilla cut copper stairs
        ["minecraft:exposed_cut_copper_stairs", "minecraft:weathered_cut_copper_stairs"],
        ["minecraft:weathered_cut_copper_stairs", "minecraft:oxidized_cut_copper_stairs"],
        ["minecraft:cut_copper_slab", "minecraft:exposed_cut_copper_slab"], //Vanilla cut copper slab
        ["minecraft:exposed_cut_copper_slab", "minecraft:weathered_cut_copper_slab"],
        ["minecraft:weathered_cut_copper_slab", "minecraft:oxidized_cut_copper_slab"],
        ["create:copper_shingles", "create:exposed_copper_shingles"],//Create copper shingles
        ["create:exposed_copper_shingles", "create:weathered_copper_shingles"],
        ["create:weathered_copper_shingles", "create:oxidized_copper_shingles"],
        ["create:copper_shingle_stairs", "create:exposed_copper_shingle_stairs"], //Create copper shingle stairs
        ["create:exposed_copper_shingle_stairs", "create:weathered_copper_shingle_stairs"],
        ["create:weathered_copper_shingle_stairs", "create:oxidized_copper_shingle_stairs"],
        ["create:copper_shingle_slab", "create:exposed_copper_shingle_slab"], //Create copper shingle slab
        ["create:exposed_copper_shingle_slab", "create:weathered_copper_shingle_slab"],
        ["create:weathered_copper_shingle_slab", "create:oxidized_copper_shingle_slab"],
        ["create:copper_tiles", "create:exposed_copper_tiles"], // Create copper tiles
        ["create:exposed_copper_tiles", "create:weathered_copper_tiles"],
        ["create:weathered_copper_tiles", "create:oxidized_copper_tiles"],
        ["create:copper_tile_stairs", "create:exposed_copper_tile_stairs"], // Create copper tile stairs
        ["create:exposed_copper_tile_stairs", "create:weathered_copper_tile_stairs"],
        ["create:weathered_copper_tile_stairs", "create:oxidized_copper_tile_stairs"],
        ["create:copper_tile_slab", "create:exposed_copper_tile_slab"], // Create copper tile slab
        ["create:exposed_copper_tile_slab", "create:weathered_copper_tile_slab"],
        ["create:weathered_copper_tile_slab", "create:oxidized_copper_tile_slab"],
    ];

    transformations.forEach(([input, output]) => {
        event.custom({
            type: "create:filling",
            ingredients: [
                { item: input },
                { amount: 2000, fluid: "minecraft:water" }
            ],
            results: [
                { item: output }
            ]
        });
    });
});
