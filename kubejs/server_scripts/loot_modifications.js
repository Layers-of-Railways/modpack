let removeFromAllLootTables = ["minecraft:totem"];

LootJS.modifiers(event => {
    removeFromAllLootTables.forEach((item) => {
        event.addBlockLootModifier(/.*/).removeLoot(item);
    });
});
