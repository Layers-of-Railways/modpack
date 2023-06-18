const compostables = ["minecraft:rotten_flesh"];

ServerEvents.compostableRecipes((event) => {
  compostables.forEach((id) => {
    event.add(id, 0.65);
  });
});
