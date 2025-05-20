// priority: 1000
ServerEvents.recipes((event) => {
    let removeRecipe = [
        "computercraft:computer_advanced_upgrade",
        "computercraft:computer_advanced",
        "computercraft:cable",
        "computercraft:computer_normal",
        "computercraft:pocket_computer_normal",
        "computercraft:pocket_computer_advanced",
        "computercraft:pocket_computer_advanced_upgrade",
        "computercraft:disk_drive",
        "computercraft:printer",
        "computercraft:wired_modem",
        "computercraft:wireless_modem_normal",
        "computercraft:wireless_modem_advanced",
        "computercraft:monitor_normal",
        "computercraft:monitor_advanced",
        "computercraft:speaker"
    ];

    let removeRecipeInput = [];

    let removeRecipeOutput = [
        "create:cart_assembler",
        "deepdrilling:drill_core",
    ];

    removeRecipe.forEach((recipeID) => {
        event.remove({ id: `${recipeID}` });
    });

    removeRecipeInput.forEach((recipeInput) => {
        event.remove({ input: `${recipeInput}` });
    });

    removeRecipeOutput.forEach((recipeOutput) => {
        event.remove({ output: `${recipeOutput}` });
    });

    event.remove({ input: "#c:chests", output: "minecraft:shulker_box" });
});
