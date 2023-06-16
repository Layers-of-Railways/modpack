ServerEvents.recipes((event) => {
  // Enchanted Gapple
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:golden_apple",
      },
      {
        amount: 250,
        fluid: "create_enchantment_industry:hyper_experience",
      },
    ],
    results: [
      {
        item: "minecraft:enchanted_golden_apple",
      },
    ],
  });
});
