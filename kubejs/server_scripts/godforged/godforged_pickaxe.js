ItemEvents.rightClicked('minecraft:godforged_pickaxe', event => {
    // Prevent processing on the client side
    if (event.level.isClientSide()) {
        return; // Exit if it's on the client side
    }

    let player = event.player;
    let world = event.level;

    // Access tool in hand
    let itemStack = event.item;

    // Check if the item can indeed consume fuel cells
    if (!itemStack.id || !itemStack.id.includes('godforged') || itemStack.tag !== 'godforge:lesser_energy_cell_consumer') {
        return; // Not a tool
    }

    // Ensure the Energy NBT tag exists and is initialized
    let nbt = itemStack.getOrCreateTag();
    let energy = nbt.getInt("Energy");
    if (energy === undefined || energy === null) {
        nbt.putInt("Energy", 0); // Create NBT if it doesn't exist
        energy = 0; // Set the ebergy to 0 for the first time
    }

    // Get the offhand item 
    let offhandItem = player.getOffhandItem();

    // Refueling logic: if the offhand item is indeed a fuel cell
    if (offhandItem && (offhandItem.id === 'kubejs:')) {
        // Set up sound events for fueling
        let soundEvent = '';
        switch (offhandItem.id) {
            case 'kubejs:lesser_energy_cell': soundEvent = 'minecraft:block.respawn_anchor.charge'; break;
        }

        // Handle fuel cell
        if (offhandItem.id === 'kubejs:lesser_energy_cell') {
            if (energy < 1000) {
                nbt.putInt("Energy", energy + 100);
                offhandItem.shrink(1); // Consume energy cell
                // Play sound when recharging
                if (soundEvent) {
                    event.server.runCommandSilent(
                        `playsound ${soundEvent} ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                    );
                }
            } else {
                return;
            }
        }
        return; // Exit early after recharge
    }
});