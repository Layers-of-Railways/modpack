// priority: 1000
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

    event.remove({ input: "#c:chests", output: "minecraft:shulker_box" });
});
