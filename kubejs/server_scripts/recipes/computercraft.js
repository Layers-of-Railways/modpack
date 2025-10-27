ServerEvents.recipes((event) => {
    event.shapeless(Item.of('computercraft:cable', 6), [
        "#createaddition:spools",
        "minecraft:dried_kelp"
    ]);

    event.shapeless("computercraft:computer_normal", [
        "ae2:calculation_processor",
        "create:andesite_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:computer_advanced", [
        "ae2:engineering_processor",
        "create:brass_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:turtle_normal", [
        "#create:toolboxes",
        "create:andesite_casing",
        "ae2:calculation_processor"
    ]);

    event.shapeless("computercraft:turtle_advanced", [
        "#create:toolboxes",
        "create:brass_casing",
        "ae2:engineering_processor"
    ]);

    event.shaped("computercraft:pocket_computer_normal", ["M", "A", "C"], {
        M: "ae2:monitor",
        C: "ae2:calculation_processor",
        A: "create:andesite_casing"
    });

    event.shaped("computercraft:pocket_computer_advanced", ["M", "B", "C"], {
        M: "ae2:monitor",
        C: "ae2:engineering_processor",
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
        L: "ae2:logic_processor"
    });

    event.shapeless("computercraft:monitor_normal", [
        "create:electron_tube",
        "create:andesite_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:monitor_advanced", [
        "create:electron_tube",
        "create:brass_casing",
        "#c:glass_panes"
    ]);

    event.shapeless("computercraft:speaker", [
        "supplementaries:speaker_block",
        "create:andesite_casing"
    ]);

    event.shaped("computercraft:printer", [
        "E",
        "A",
        "S",
    ], {
        S: "create:sturdy_sheet",
        A: "create:andesite_casing",
        E: "create:precision_mechanism"
    });

    event.shaped("computercraft:disk_drive", [
        "C", 
        "A", 
        "P"
    ], {
        P: "create:precision_mechanism",
        A: "create:andesite_casing",
        C: "create:electron_tube"
    });

    event.shaped("computercraft:redstone_relay", [
        "ARA",
        "RMR",
        "ARA"
    ], {
        A: "create:andesite_alloy",
        R: "minecraft:redstone",
        M: "computercraft:wired_modem"
    });
});
