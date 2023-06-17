// const crush = [];

ServerEvents.recipes((event) => {
  // crush.forEach((recipeMap) => {
  //   //create crushing
  //   event.custom({
  //     type: "create:crushing",
  //     ingredients: [
  //       {
  //         item: `${recipeMap[0]}`,
  //       },
  //     ],
  //     processingTime: 250,
  //     results: [
  //       {
  //         item: `${recipeMap[1]}`,
  //       },
  //     ],
  //   });
  // });

  // Infested XP
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:infested_stone",
      },
    ],
    processingTime: 500,
    results: [
      {
        item: "create:experience_nugget",
      },
      {
        chance: 0.25,
        item: "create:experience_nugget",
      },
    ],
  });

  // Crying Lapis
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:crying_obsidian",
      },
    ],
    processingTime: 500,
    results: [
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "minecraft:lapis_lazuli",
      },
      {
        chance: 0.5,
        item: "minecraft:lapis_lazuli",
      },
      {
        chance: 0.75,
        item: "minecraft:obsidian",
      },
    ],
  });
});
