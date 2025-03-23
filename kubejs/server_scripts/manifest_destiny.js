ItemEvents.rightClicked('minecraft:manifest_destiny', event => {
    // Prevent processing on the client side
    if (event.level.isClientSide()) {
        return; // Exit if it's on the client side
    }

    let player = event.player;
    let world = event.level;

    // Access Manifest Destiny
    let itemStack = event.item;

    // Check if the item is the Manifest Destiny item
    if (!itemStack.id || !itemStack.id.endsWith('manifest_destiny') || itemStack.id !== 'kubejs:manifest_destiny') {
        return; // Not the Manifest Destiny item
    }

    // Ensure the Fuel NBT tag exists and is initialized
    let nbt = itemStack.getOrCreateTag();
    let fuel = nbt.getInt("Fuel");
    if (fuel === undefined || fuel === null) {
        nbt.putInt("Fuel", 0); // Create NBT if it doesn't exist
        fuel = 0; // Set the fuel to 0 for the first time
    }

    // Get the offhand item (stone or ore)
    let offhandItem = player.getOffhandItem();

    // Refueling logic: if the offhand item is a fuel item (lava_bucket, magma_cream, or blaze_rod)
    if (offhandItem && (offhandItem.id === 'minecraft:lava_bucket' || offhandItem.id === 'minecraft:magma_cream' || offhandItem.id === 'minecraft:blaze_rod')) {
        // Set up sound events for fueling
        let soundEvent = '';
        switch (offhandItem.id) {
            case 'minecraft:lava_bucket': soundEvent = 'minecraft:item.bucket.empty_lava'; break;
            case 'minecraft:magma_cream': soundEvent = 'minecraft:block.lava.pop'; break;
            case 'minecraft:blaze_rod': soundEvent = 'minecraft:entity.blaze.shoot'; break;
        }

        // Handle Lava Bucket
        if (offhandItem.id === 'minecraft:lava_bucket') {
            if (fuel < 1000) {
                nbt.putInt("Fuel", fuel + 100);
                player.tell(Text.gold(`The lava bucket in your offhand empties, and the hammer glows brighter. It now has ${fuel + 100} charge.`));
                offhandItem.shrink(1); // Consume the lava bucket
                // Play sound when fueling
                if (soundEvent) {
                    event.server.runCommandSilent(
                        `playsound ${soundEvent} ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                    );
                }
                player.inventory.add("minecraft:bucket"); // Add the empty bucket
            } else {
                player.tell(Text.gold("The hammer brims with power, it cannot accept more fuel!"));
            }
        }
        // Handle Magma Cream
        else if (offhandItem.id === 'minecraft:magma_cream') {
            if (fuel < 1000) {
                nbt.putInt("Fuel", fuel + 50);
                player.tell(`A magma cream evaporates in your offhand, and the hammer sizzles, growing hotter. It now has ${fuel + 50} charge.`);
                offhandItem.shrink(1); // Consume the magma cream
                // Play sound when fueling
                if (soundEvent) {
                    event.server.runCommandSilent(
                        `playsound ${soundEvent} ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                    );
                }
            } else {
                player.tell(Text.gold("The hammer brims with power, it cannot accept more fuel!"));
            }
        }
        // Handle Blaze Rod
        else if (offhandItem.id === 'minecraft:blaze_rod') {
            if (fuel < 1000) {
                nbt.putInt("Fuel", fuel + 200);
                player.tell(Text.gold(`A blaze rod disintegrates in your offhand, and the hammer flares brighter. It now has ${fuel + 200} charge.`));
                offhandItem.shrink(1); // Consume the blaze rod
                // Play sound when fueling
                if (soundEvent) {
                    event.server.runCommandSilent(
                        `playsound ${soundEvent} ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                    );
                }
            } else {
                player.tell(Text.gold("The hammer brims with power, it cannot accept more fuel!"));
            }
        }

        return; // Exit early after refueling logic
    }

    // Duplication logic: if the offhand item is a stone type
    let stoneTypes = [
        'minecraft:cobblestone', 'minecraft:stone', 'minecraft:deepslate',
        'minecraft:granite', 'minecraft:diorite', 'minecraft:andesite'
    ];

    if (offhandItem && stoneTypes.includes(offhandItem.id)) {

        // Duplicate stone
        if (fuel >= 100) {
            if (player.inventory.add(offhandItem.id)) {
                console.log("Player position: " + player.blockPosition()); // Check player's position
                // Play sound when duplicating
                event.server.runCommandSilent(
                    `playsound minecraft:block.stone.break ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                );
                nbt.putInt("Fuel", fuel - 10); // Deduct fuel
            } else {
                player.tell(Text.gold("You do not have room to conjure more of this item!"));
            }
        } else {
            player.tell(Text.gold("The hammer sizzles and glows dimly, lacking enough heat for this task."));
        }

        return; // Exit early after duplication logic
    }

    // Smelting logic: if the offhand item is a raw ore
    let smeltables = {
        'minecraft:raw_iron': 'minecraft:iron_ingot',
        'minecraft:raw_gold': 'minecraft:gold_ingot',
        'minecraft:raw_copper': 'minecraft:copper_ingot',
        'create:raw_zinc': 'create:zinc_ingot',
        'minecraft:ancient_debris': 'minecraft:netherite_scrap'
    };

    if (offhandItem && smeltables[offhandItem.id]) {

        // Smelt ore
        if (fuel >= 100) {
            let resultItem = smeltables[offhandItem.id];
            if (player.inventory.add(resultItem)) {
                offhandItem.shrink(1); // Remove one of the raw item
                nbt.putInt("Fuel", fuel - 100); // Deduct fuel
                event.server.runCommandSilent(
                    `playsound ${soundEvent} ambient @a ${Math.floor(player.getX())} ${Math.floor(player.getY())} ${Math.floor(player.getZ())} 1 1`
                );
            } else {
                player.tell(Text.gold("You do not have room to smelt this item!"));
            }
        } else {
            player.tell(Text.gold("The hammer sizzles and glows dimly, lacking enough heat for this task."));
        }

        return; // Exit early after smelting logic
    }
});