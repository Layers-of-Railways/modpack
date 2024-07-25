// ServerEvents.tags("item", (event) => {
//   event.tags.put();
// });

ServerEvents.recipes((event) => {
    event.shaped("phonos:electronic_note_block", ["E", "N", "P"], {
        E: "create:electron_tube",
        N: "minecraft:note_block",
        P: "create:precision_mechanism",
    });

    event.shaped("phonos:electronic_jukebox", ["E", "J", "P"], {
        E: "create:electron_tube",
        J: "minecraft:jukebox",
        P: "create:precision_mechanism",
    });

    event.shapeless("phonos:loudspeaker", [
        "minecraft:note_block",
        "createaddition:connector",
    ]);

    event.shaped("phonos:audio_cable", ["SN"], {
        S: "#createaddition:spools",
        N: "consistency_plus:copper_nugget",
    });

    for (let index in Color.DYE) {
        /** @type {Internal.DyeColor} */
        let color = Color.DYE[index];
        event.shaped(`phonos:${color.serializedName}_audio_cable`, ["DSN"], {
            D: `minecraft:${color.serializedName}_dye`,
            S: "#createaddition:spools",
            N: "consistency_plus:copper_nugget",
        });
    }
});
