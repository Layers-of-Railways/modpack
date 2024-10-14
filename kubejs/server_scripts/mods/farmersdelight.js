ServerEvents.recipes((event) => {
    event.forEachRecipe({type: "farmersdelight:cutting"}, recipe=>{
        event.custom({
            type: "create:deploying",
            ingredients:[recipe.json.get("ingredients").asJsonArray.get(0), recipe.json.get("tool")],
            results: recipe.json.get("result"),
            keepHeldItem: true
        });
    })
});
