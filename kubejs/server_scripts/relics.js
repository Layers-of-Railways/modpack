ServerEvents.customCommand((event) => {
    var id = event.getId();
    if (event.getPlayer().hand == 'off_hand') return;
    /**
     * All custom spells go in here. Simply write your spell as a function, 
     * then add the spell to the detection chain below this comment.
     */
    if (id == "detonate") {
        detonate(event.getEntity(), event.getEntity().server);
    } else if (id == "blink") {
        blink(event.getEntity(), event.getEntity().server);
    } else if (id == "delayedReturn") {
        delayedReturn(event.getEntity(), event.getEntity().server);
    } else if (id == "repairOffhand") {
        repairOffhand(event.getEntity(), event.getEntity().server);
    } else if (id == "lance") {
        lance(event.getEntity(), event.getEntity().server);
    } else if (id == "debugEntityType") {
        debugEntityType(event.getEntity(), event.getEntity().server);
    } else if (id == "experienceToFunds"){
        experienceToFunds(event.getEntity(), event.getEntity().server);
    } else if (id == "witherRocket"){
        witherRocket(event.getEntity(), event.getEntity().server);
    } else if (id == "runicBooster"){
        runicBooster(event.getEntity(), event.getEntity().server);
    }
    /**
     * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    * @param {string} cmd
    */

    function cmd_as(entity, server, cmd) {
        var id = entity.getProfile().getId().toString();

        server.runCommandSilent("execute as " + id + " run " + cmd);
    }

    /**
     * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    * @param {Internal.Dimension} dimension
    * @param {string} cmd
    */

    function cmd_in(entity, server, dimension, cmd) {
        var id = entity.getProfile().getId().toString();

        server.runCommandSilent("execute in " + dimension + " as " + id + " run " + cmd);
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    * @param {string} cmd
    */
    function cmd_at(entity, server, cmd) {
        var id = entity.getProfile().getId().toString();

        server.runCommandSilent("execute at " + id + " run " + cmd);
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function teleExit(entity, server) {
        cmd_at(entity, server, "playsound minecraft:entity.enderman.teleport master @a[distance=..10] ~ ~ ~ 5");
        cmd_at(entity, server, "particle minecraft:reverse_portal ~ ~ ~ 0 1 0 5 1000 normal");
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function teleEnter(entity, server) {
        cmd_at(entity, server, "particle minecraft:portal ~ ~ ~ 0 1 0 5 1000 normal");
        cmd_at(entity, server, "playsound minecraft:block.respawn_anchor.deplete master @a[distance=..5] ~ ~ ~ 5");
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function blink(entity, server) {
        var destination = entity.rayTrace(32, false);
        var destX = destination.getHitX();
        var destY = destination.getHitY();
        var destZ = destination.getHitZ();
        if (destination.block != null) {
            entity.teleportTo(destX, destY, destZ);
            entity.playSound("minecraft:entity.warden.sonic_boom", 5, 1);
        } else {
            entity.attack(4);
            entity.playSound("minecraft:block.respawn_anchor.deplete", 5, 1);
        }
    }
    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function detonate(entity, server) {
        var rayHit = entity.rayTrace(64, true);
        if (rayHit != null)
            var target = rayHit.entity;
        target.level.explode(entity, target.getX(), target.getY(), target.getZ(), 10, false, "none");
    }
    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function lance(entity, server) {
        var rayHit = entity.rayTrace(64, false);
        if (rayHit != null) {
            var target = rayHit.entity;
            if (rayHit.entity.type == "minecraft:player") {
                target.playSound("enchancement:item.crossbow.brimstone.6");
                target.attack(10);
            } else {
                target.playSound("enchancement:item.crossbow.brimstone.6");
                target.attack(100);
            }
        }
    }
    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function debugEntityType(entity, server) {
        var rayHit = entity.rayTrace(64, false);
        entity.tell(rayHit.entity.type);
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function repairOffhand(entity, server) {
        var currentItemDamage = entity.getOffHandItem().getDamageValue();
        entity.getOffHandItem().setDamageValue(currentItemDamage / 2);
    }

    /**
    * 
    * @param {Internal.Player} player
    * @param {Internal.MinecraftServer} server
    */
    function delayedReturn(player, server) {
        var currX = player.getX();
        var currY = player.getY();
        var currZ = player.getZ();
        var currDim = player.getLevel().dimension.toString();
        var retX = player.nbt.getInt('SpawnX');
        var retY = player.nbt.getInt('SpawnY');
        var retZ = player.nbt.getInt('SpawnZ');
        teleExit(player, server);
        player.teleportTo(retX, retY, retZ);
        teleEnter(player, server);
        player.tell(Text.lightPurple("Returning you to your previous position in approximately one minute..."));
        server.scheduleInTicks(600, () => {
            player.tell(Text.lightPurple("Half your time has elapsed..."));
        });
        server.scheduleInTicks(900, () => {
            player.tell(Text.lightPurple("Three-quarters of your time has elapsed..."));
        });
        server.scheduleInTicks(1100, () => {
            player.tell(Text.lightPurple("Transport is imminent!"));
        });
        server.scheduleInTicks(1200, () => {
            teleExit(player, server);
            cmd_in(player, server, currDim, "tp " + currX + " " + currY + " " + currZ);
            teleEnter(player, server);
        });
    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function experienceToFunds(player, server){
        player.setXpLevel(getXpLevel()-1);
        player.give("numismatics:crown");
        }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function witherRocket(player, server){
        let skull = player.block.up.up.createEntity("wither_skull");
        skull.shootFromRotation(player, player.pitch, player.yaw, 0, 3, 1);
        skull.spawn();

    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function runicBooster(player, server){
        for(i = 0; i < 200; i++)
            player.boostElytraFlight();
    }


})