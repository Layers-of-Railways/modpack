ServerEvents.tags("item", (event) => {
  // Bottomless Honey
  event.add("create:bottomless/allow", Fluid.of("create:honey"));
});
