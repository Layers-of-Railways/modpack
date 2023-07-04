// priority: 0
ServerEvents.recipes((event) => {
    let removerecipe = [];

    let removerecipeinput = [];

    let removerecipeoutput = [
        "create_confectionery:full_chocolate_bar",
        "create_confectionery:full_black_chocolate_bar",
        "create_confectionery:full_white_chocolate_bar",
        "create_confectionery:full_ruby_chocolate_bar",
        "advancedperipherals:chunk_controller",
        "advancedperipherals:ar_controller",
        "advancedperipherals:ar_goggles",
        "simpleshops:simple_shop",
    ];

    removerecipe.forEach((recipeid) => {
        event.remove({ id: `${recipeid}` });
    });

    removerecipeinput.forEach((recipeinput) => {
        event.remove({ input: `${recipeinput}` });
    });

    removerecipeoutput.forEach((recipeoutput) => {
        event.remove({ output: `${recipeoutput}` });
    });
});
