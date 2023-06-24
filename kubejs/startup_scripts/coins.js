const coins = ["spur", "bevel", "sprocket", "cog", "crown", "sun"];

StartupEvents.registry("item", (event) => {
  coins.forEach((coin) => {
    event
      .create(coin)
      .glow(true)
      .displayName(coin.charAt(0).toUpperCase() + coin.slice(1));
  });
});
