// priority: 0
ServerEvents.recipes((event) => {
    event.shaped(
        Item.of('minecraft:furnace', 1),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:stone_crafting_materials'
        }
    )
});
