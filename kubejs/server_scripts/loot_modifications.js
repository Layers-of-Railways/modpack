let removeFromAllLootTables = ["minecraft:totem"];

onEvent("lootjs", (event) => {
    removeFromAllLootTables.forEach((item) => {
        event.addBlockLootModifier(/.*/).removeLoot(item);
    });
});
