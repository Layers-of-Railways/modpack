ServerEvents.recipes((event) => {
    // Concrete from Consistency_Plus
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
