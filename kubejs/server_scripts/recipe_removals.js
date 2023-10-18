// priority: 0
ServerEvents.recipes((event) => {
    let removerecipe = [];

    let removerecipeinput = [];

    let removerecipeoutput = [];

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
