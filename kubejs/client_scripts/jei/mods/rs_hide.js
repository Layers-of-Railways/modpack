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
    "raw_basic_processor",
    "raw_improved_processor",
    "raw_advanced_processor",
];

JEIEvents.hideItems((event) => {
    coloredBlocks.forEach((id) => {
        event.hide(`refinedstorage:${id}`);
        colors.forEach((color) => {
            event.hide(`refinedstorage:${color}_${id}`);
        });
    });

    disks.forEach((disk) => {
        event.hide(`refinedstorage:${disk}_fluid_storage_part`);
        event.hide(`refinedstorage:${disk}_fluid_storage_block`);
        event.hide(`refinedstorage:${disk}_fluid_storage_disk`);
    });

    removals.forEach((id) => {
        event.hide(`refinedstorage:${id}`);
    });
});
