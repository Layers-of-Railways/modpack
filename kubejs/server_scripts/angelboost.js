    PlayerEvents.tick(e => {
    let player = e.player;
    let chestplate = player.getChestArmorItem();
    if (chestplate == null) {
        return;
    } else {
            let adminWings = chestplate.getNbt().getBoolean('adminWings');
            if (player.isFallFlying() && player.isShiftKeyDown() && adminWings){
                player.boostElytraFlight();
                player.runCommandSilent('particle minecraft:enchant ~ ~ ~ 0.1 0.1 0.1 0 10 normal @a');
                player.runCommandSilent('particle supplementaries:stasis ~ ~ ~ 0 0 0 0 1 normal @a')
                player.hurtMarked = true;
            }
        }
})