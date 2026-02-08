ServerEvents.recipes((event) => {
    // Dirt Splashing
    event.custom({
      "type": "create:splashing",
      "ingredients": [
        {
          "item": "consistency_plus:concrete_powder"
        }
      ],
      "results": [
        {
          "item": "consistency_plus:concrete"
        }
      ]
    });
});
