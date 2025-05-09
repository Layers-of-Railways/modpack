ServerEvents.recipes((event) => {
    event.shapeless(Item.of('computercraft:cable', 6), [
        "#createaddition:spools",
        "minecraft:dried_kelp"
    ]);

    event.shaped("computercraft:computer_normal", ["G", "A", "C"], {
        A: "create:andesite_casing",
        C: "ae2:printed_calculation_processor",
        G: "#c:glass_panes"
    });

    event.shaped("computercraft:computer_advanced", ["G", "B", "C"], {
        B: "create:brass_casing",
        G: "#c:glass_panes",
        C: "ae2:printed_logic_processor"
    });

    event.shaped("computercraft:pocket_computer_normal", ["M", "A", "C"], {
        M: "ae2:monitor",
        C: "ae2:printed_calculation_processor",
        A: "create:andesite_casing"
    });

    event.shaped("computercraft:pocket_computer_advanced", ["M", "B", "C"], {
        M: "ae2:monitor",
        C: "ae2:printed_logic_processor",
        B: "create:brass_casing"
    });

    event.shaped("computercraft:wired_modem", ["C", "I", "E"], {
        C: "computercraft:cable",
        E: "create:electron_tube",
        I: "#c:iron_plates"
    });

    event.shaped("computercraft:wireless_modem_normal", ["W", "A", "E"], {
        W: "ae2:wireless_receiver",
        A: "create:andesite_casing",
        E: "create:electron_tube"
    });

    event.shaped("computercraft:wireless_modem_advanced", ["W", "A", "L"], {
        W: "ae2:wireless_receiver",
        A: "create:brass_casing",
        L: "ae2:printed_logic_processor"
    });

    event.shapeless("computercraft:monitor_normal", [
        "create:andesite_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:monitor_advanced", [
        "create:brass_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:speaker", [
        "supplementaries:speaker_block",
        "create:andesite_casing"
    ]);

    event.shaped("computercraft:printer", [
        "RBG",
        " A ",
        " E ",
    ], {
        R: "minecraft:red_dye",
        B: "minecraft:blue_dye",
        G: "minecraft:green_dye",
        A: "create:andesite_casing",
        E: "create:electron_tube"
    });

    event.shaped("computercraft:disk_drive", ["P", "A", "C"], {
        P: "create:precision_mechanism",
        A: "create:andesite_casing",
        C: "ae2:printed_calculation_processor"
    });
});
