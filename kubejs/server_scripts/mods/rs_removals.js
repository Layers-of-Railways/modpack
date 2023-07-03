let coloredBlocks = ["network_receiver", "network_transmitter", "fluid_grid"];

let colors = [
    "white",
    "orange",
    "magenta",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
];

let disks = ["64k", "256k", "1024k", "4096k"];

let removals = [
    "fluid_interface",
    "wireless_fluid_grid",
    "portable_grid",
    "quartz_enriched_iron",
    "machine_casing",
    "processor_binding",
];

let recipeRemovals = [
    "basic_processor",
    "improved_processor",
    "advanced_processor",
    "controller",
    "construction_core",
    "destruction_core",
    "raw_basic_processor",
    "raw_improved_processor",
    "silk_touch_upgrade",
    "fortune_1_upgrade",
    "fortune_2_upgrade",
    "fortune_3_upgrade",
    "raw_basic_processor",
    "raw_improved_processor",
    "raw_advanced_processor",
];

ServerEvents.recipes((event) => {
    coloredBlocks.forEach((id) => {
        event.remove({ output: `refinedstorage:${id}` });
        colors.forEach((color) => {
            event.remove({ output: `refinedstorage:${color}_${id}` });
        });
    });

    disks.forEach((disk) => {
        event.remove({ output: `refinedstorage:${disk}_fluid_storage_part` });
        event.remove({ output: `refinedstorage:${disk}_fluid_storage_block` });
        event.remove({ output: `refinedstorage:${disk}_fluid_storage_disk` });
    });

    removals.forEach((id) => {
        event.remove({ output: `refinedstorage:${id}` });
    });

    recipeRemovals.forEach((id) => {
        event.remove({ id: `refinedstorage:${id}` });
    });
});
