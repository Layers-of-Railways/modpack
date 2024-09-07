// priority: 0
ServerEvents.recipes((event) => {
    let removerecipe = [];

    let removerecipeinput = [];

    let removerecipeoutput = [
        "create:cart_assembler",
        "deepdrilling:drill_core",
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
