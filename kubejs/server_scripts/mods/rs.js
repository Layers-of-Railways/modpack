let basicTransitionItem = "refinedstorage:raw_basic_processor";
let improvedTransitionItem = "refinedstorage:raw_improved_processor";
let advancedTransitionItem = "refinedstorage:raw_advanced_processor";

ServerEvents.recipes((event) => {
    event.replaceInput(
        { mod: "refinedstorage" },
        "minecraft:redstone",
        "createaddition:copper_spool"
    );
    event.replaceInput(
        { mod: "refinedstorage" },
        "refinedstorage:quartz_enriched_iron",
        "create:brass_ingot"
    );
    event.replaceInput(
        { mod: "advancedperipherals" },
        "refinedstorage:quartz_enriched_iron",
        "create:brass_ingot"
    );

    event.replaceInput(
        { mod: "refinedstorage" },
        "refinedstorage:machine_casing",
        "create:brass_casing"
    );
    event.replaceInput(
        { mod: "refinedstorage" },
        "minecraft:crafting_table",
        "create:mechanical_crafter"
    );

    event.custom({
        type: "create:deploying",
        ingredients: [
            {
                item: "refinedstorage:basic_processor",
            },
            {
                item: "minecraft:glowstone_dust",
            },
        ],
        results: [
            {
                item: "refinedstorage:construction_core",
            },
        ],
    });

    event.custom({
        type: "create:deploying",
        ingredients: [
            {
                item: "refinedstorage:basic_processor",
            },
            {
                item: "minecraft:quartz",
            },
        ],
        results: [
            {
                item: "refinedstorage:destruction_core",
            },
        ],
    });

    event.custom({
        type: "create:mechanical_crafting",
        pattern: [" BBB ", "BAPAB", "BLCRB", "BASAB", " BBB "],
        key: {
            B: {
                item: "create:brass_ingot",
            },
            C: {
                item: "create:brass_casing",
            },
            S: {
                item: "createaddition:gold_spool",
            },
            P: {
                item: "refinedstorage:advanced_processor",
            },
            L: {
                item: "refinedstorage:basic_processor",
            },
            R: {
                item: "refinedstorage:improved_processor",
            },

            A: {
                item: "refinedstorage:silicon",
            },
        },
        result: {
            item: "refinedstorage:controller",
            count: 1,
        },
        acceptMirrored: false,
    });

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:andesite_alloy",
        },
        loops: 1,
        results: [
            {
                item: "refinedstorage:basic_processor",
            },
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: basicTransitionItem,
                    },
                    {
                        item: "create:super_glue",
                    },
                ],
                results: [
                    {
                        item: basicTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: basicTransitionItem,
                    },
                    {
                        item: "create:electron_tube",
                    },
                ],
                results: [
                    {
                        item: basicTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: basicTransitionItem,
                    },
                    {
                        item: "create:golden_sheet",
                    },
                ],
                results: [
                    {
                        item: basicTransitionItem,
                    },
                ],
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: basicTransitionItem,
                    },
                ],
                results: [
                    {
                        item: basicTransitionItem,
                    },
                ],
            },
        ],
        transitionalItem: {
            item: basicTransitionItem,
        },
    });

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_sheet",
        },
        loops: 1,
        results: [
            {
                item: "refinedstorage:improved_processor",
            },
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: improvedTransitionItem,
                    },
                    {
                        item: "create:super_glue",
                    },
                ],
                results: [
                    {
                        item: improvedTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: improvedTransitionItem,
                    },
                    {
                        item: "create:electron_tube",
                    },
                ],
                results: [
                    {
                        item: improvedTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: improvedTransitionItem,
                    },
                    {
                        item: "create:golden_sheet",
                    },
                ],
                results: [
                    {
                        item: improvedTransitionItem,
                    },
                ],
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: improvedTransitionItem,
                    },
                ],
                results: [
                    {
                        item: improvedTransitionItem,
                    },
                ],
            },
        ],
        transitionalItem: {
            item: improvedTransitionItem,
        },
    });

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:precision_mechanism",
        },
        loops: 1,
        results: [
            {
                item: "refinedstorage:advanced_processor",
            },
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: advancedTransitionItem,
                    },
                    {
                        item: "create:super_glue",
                    },
                ],
                results: [
                    {
                        item: advancedTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: advancedTransitionItem,
                    },
                    {
                        item: "create:electron_tube",
                    },
                ],
                results: [
                    {
                        item: advancedTransitionItem,
                    },
                ],
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: advancedTransitionItem,
                    },
                    {
                        item: "create:golden_sheet",
                    },
                ],
                results: [
                    {
                        item: advancedTransitionItem,
                    },
                ],
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: advancedTransitionItem,
                    },
                ],
                results: [
                    {
                        item: advancedTransitionItem,
                    },
                ],
            },
        ],
        transitionalItem: {
            item: advancedTransitionItem,
        },
    });
});
