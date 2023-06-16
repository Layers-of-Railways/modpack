ServerEvents.recipes((event) => {
  // Hyper Experience
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:lapis_lazuli",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 100,
      },
    ],
    results: [
      {
        fluid: "create_enchantment_industry:hyper_experience",
        amount: 10,
      },
    ],
    heatRequirement: "superheated",
  });
});
