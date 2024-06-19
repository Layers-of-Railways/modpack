onEvent("lootjs", (event) => {
    // disable totems
    event.addBlockLootModifier(/.*/).removeLoot("minecraft:totem");
});
