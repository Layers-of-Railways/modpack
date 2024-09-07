const replaceElement = (jsonObject, from, to) => {
    if (!jsonObject.has(from)) return;
    jsonObject.add(to, jsonObject.get(from));
    jsonObject.remove(from);
};

const convertFluid = jsonObject => {
    replaceElement(jsonObject, "tag", "fluidTag");
    replaceElement(jsonObject, "name", "fluid");
    return jsonObject;
};

ServerEvents.recipes(event => {
    //melting to mixing
    const recipeTransformer = recipe => event.custom({
        type: "create:mixing",
        ingredients: [recipe.json.get("ingredient")],
        results: [recipe.json.get("result")],
        heatRequirement: recipe.json.get("temperature") >= 1000 ? "superheated" : "heated",
    });

    event.forEachRecipe({ type: "tconstruct:ore_melting" }, recipeTransformer);
    event.forEachRecipe({ type: "tconstruct:melting" }, recipeTransformer);


    // casting to filling
    // event.forEachRecipe({type: "tconstruct:casting_table"}, recipe=>{
    //   let result = recipe.json.get("result")
    //   if(!result.isJsonObject())
    //     result = {item: result}
    //   else if(result.getAsJsonObject().has("tag")) return;

    //   let fluidJson = recipe.json.get("fluid")
    //   let fluids = []
    //   if(fluidJson.isJsonArray()){
    //     fluidJson.asJsonArray.forEach(e=>fluids.push(convertFluid(e)))
    //   }else{
    //     fluids = [convertFluid(fluidJson.asJsonObject)]
    //   }

    //   const ingredients = [
    //     recipe.json.get("cast"),
    //   ].filter(i=>i!=null)

    //   fluids.forEach(ingredients.push)

    //   event.custom({
    //     type: "create:filling",
    //     ingredients: ingredients,
    //     results: [
    //       result
    //     ]
    //   })
    // })


    // alloying to mixing
    event.forEachRecipe({ type: "tconstruct:alloy" }, recipe => {
        const ingredients = [];
        recipe.json.get("inputs").getAsJsonArray().forEach(i => {
            const ingredient = i.getAsJsonObject();
            convertFluid(ingredient);
            ingredients.push(ingredient);
        });
        event.custom({
            type: "create:mixing",
            ingredients: ingredients,
            results: [recipe.json.get("result")],
            heatRequirement: recipe.json.get("temperature") >= 1000 ? "superheated" : "heated",
        });
    });
});
