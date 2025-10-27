let removeRecipe = [
    // Misc
    'tconstruct:armor/building/travelers_shield',
    // ComputerCraft
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
    "computercraft:speaker",
    'design_decor:crafting/gas_tank'
];

let removeRecipeInput = [];

    let removeRecipeOutput = [
        // Misc
        "create:cart_assembler",
        "deepdrilling:drill_core",
        'zipline:zipline',
        'design_decor:crafting/gas_tank',
        // Xercamusic
        'xercamusic:tubular_bell',
        'xercamusic:french_horn',
        'xercamusic:saxophone',
        'xercamusic:guitar',
        'xercamusic:banjo',
        'xercamusic:violin',
        'xercamusic:cello',
        'xercamusic:flute',
        'xercamusic:drum',
        'xercamusic:oboe',
        'xercamusic:redstone_guitar',
        'xercamusic:bass_guitar',
        'xercamusic:piano',
        'xercamusic:music_box',
        // Farmers Delight, Brewin and Chewin
        'brewinandchewin:kimchi',
        'farmersdelight:hamburger'
    ];

// priority: 1000
ServerEvents.recipes((event) => {

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
    event.remove({ mod: "apcrcompat", output: "ae2:quantum_entangled_singularity" })
});
