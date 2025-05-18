ServerEvents.recipes((event) => {
    // Balance fill upgrade. Gold Ingots > Plates
    event.replaceInput({ output: "storagedrawers:balance_fill_upgrade" },
        "#c:gold_ingots",
        "#c:gold_plates"
    )

    event.remove({ output: "storagedrawers:fill_level_upgrade" })
    event.remove({ output: "storagedrawers:drawer_puller" })
    event.remove({ output: "storagedrawers:remote_group_upgrade" })

    event.shapeless("storagedrawers:fill_level_upgrade", [
        "storagedrawers:upgrade_template",
        "create:electron_tube"
    ])
    // Use an iron rod with the drawer puller
    event.shaped("storagedrawers:drawer_puller", ["I", "R", "U"], {
        I: "#c:iron_ingots",
        R: "#c:iron_rods",
        U: "storagedrawers:upgrade_template"
    })
    event.shapeless("storagedrawers:remote_group_upgrade", [
        "storagedrawers:remote_upgrade",
        "ae2:fluix_pearl"
    ])
})