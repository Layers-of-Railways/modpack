let removeloot = [
    [LootType.ENTITY, "minecraft:totem_of_undying"]
];

LootJS.modifiers(event => {
    removeloot.forEach((remove) => {
        event.addLootTypeModifier(remove[0])
            .removeLoot(remove[1])
    });
});
