onEvent("lootjs", (event) => {
    let removeloot = [
        [LootType.ENTITY, "minecraft:totem"]
    ];

    removeloot.forEach((remove) => {
        event.addLootTypeModifier(remove[0])
            .removeLoot(remove[1])
    });
});
