ServerEvents.customCommand((event) => {
    const {Spell} = event.data
    var id = event.data.Spell;
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
    } else if (id == "experienceToFunds") {
        experienceToFunds(event.getEntity(), event.getEntity().server);
    } else if (id == "witherRocket") {
        witherRocket(event.getEntity(), event.getEntity().server);
    } else if (id == "runicBooster") {
        runicBooster(event.getEntity(), event.getEntity().server);
    } else if (id == "spawnGate") {
        spawnGate(event.getEntity(), event.getEntity().server);
    } else if (id == "banish") {
        banish(event.getEntity(), event.getEntity().server);
    } else if (id == "summonPlayer") {
        summonPlayer(event.getEntity(), event.getEntity().server);
    } else if (id == "placeNode") {
        placeNode(event.getEntity(), event.getEntity().server);
    } else if (id == "yeet") {
        yeet(event.getEntity(), event.getEntity().server);
    } else if (id == "impulseBooster") {
        impulseBooster(event.getEntity(), event.getEntity().server);
    } else if (id == "spawnGateIndirect") {
        spawnGateIndirect(event.getEntity(), event.getEntity().server);
    } else if (id == "tellSpawn") {
        tellSpawn(event.getEntity(), event.getEntity().server);
    } else if (id == "pulseRifle") {
        pulseRifle(event.getEntity(), event.getEntity().server);
    } else if (id == "nbtTestAdd") {
        nbtTestAdd(event.getEntity(), event.getEntity().server);
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
    * @param {Internal.UUID} uuid 
    * @returns {Internal.Entity}
    */
    function getEntityByID(uuid) {
        let entities = Utils.server.getEntities();
        for (let i = 0; i < entities.size(); i++) {
            if (entities.get(i).uuid == uuid) {
                console.log(i);
                return entities.get(i)
            }
        }
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
    * @param {Internal.MinecraftServer} server
    */

    function teleExitFromString(uuid, server) {
        server.runCommandSilent("execute at " + uuid + " run playsound minecraft:entity.enderman.teleport master @a[distance=..10] ~ ~ ~ 5");
        server.runCommandSilent("execute at " + uuid + " run particle minecraft:reverse_portal ~ ~ ~ 0 1 0 5 1000 normal")
    }

    /**
    * 
    * @param {Internal.MinecraftServer} server
    */

    function teleEnterFromString(uuid, server) {
        server.runCommandSilent("execute at " + uuid + " run particle minecraft:portal ~ ~ ~ 0 1 0 5 1000 normal");
        server.runCommandSilent("execute at " + uuid + " run playsound minecraft:block.respawn_anchor.deplete master @a[distance=..5] ~ ~ ~ 5")
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
    function experienceToFunds(player, server) {
        player.setXpLevel(player.getXpLevel() - 1);
        player.give("numismatics:crown");
    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function witherRocket(player, server) {
        let skull = player.block.up.up.createEntity("wither_skull");
        skull.shootFromRotation(player, player.pitch, player.yaw, 0, 3, 1);
        skull.spawn();

    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function runicBooster(player, server) {
        for (i = 0; i < 200; i++)
            player.boostElytraFlight();
    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function spawnGate(player, server) {
        var retX = player.nbt.getInt('SpawnX');
        var retY = player.nbt.getInt('SpawnY');
        var retZ = player.nbt.getInt('SpawnZ');
        teleExit(player, server);
        cmd_in(player, server, "minecraft:overworld", "tp " + retX + " " + retY + " " + retZ);
        teleEnter(player, server);
    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function spawnGateIndirect(player, server) {
        var rayHit = player.rayTrace(64, true);
        var target = rayHit.entity;
        if (rayHit.entity.type == "minecraft:player") {
            var retX = target.nbt.getInt('SpawnX');
            var retY = target.nbt.getInt('SpawnY');
            var retZ = target.nbt.getInt('SpawnZ');
            teleExit(target, server);
            cmd_in(target, server, "minecraft:overworld", "tp " + retX + " " + retY + " " + retZ);
            teleEnter(target, server);
        }

    }

    /**
     * 
     * @param {Internal.Player} player
     * @param {Internal.MinecraftServer} server
     */
    function tellSpawn(player, server) {
        var rayHit = player.rayTrace(64, true);
        var target = rayHit.entity;
        if (rayHit.entity.type == "minecraft:player") {
            var retX = target.nbt.getInt('SpawnX');
            var retY = target.nbt.getInt('SpawnY');
            var retZ = target.nbt.getInt('SpawnZ');
            player.tell("Target player's spawn is at: " + retX + ", " + retY + ", " + retZ)
        }

    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function banish(entity, server) {
        var rayHit = entity.rayTrace(64, false);
        if (rayHit != null && rayHit.entity.type == "minecraft:player") {
            var target = rayHit.entity;
            teleExit(target, server);
            cmd_as(target, server, "clear @s spelunkery:portal_fluid_bottle");
            cmd_as(target, server, "clear @s spelunkery:portal_fluid_bucket");
            cmd_in(target, server, "minecraft:the_end", "tp 372 64 510");
            teleEnter(target, server);
        }
    }

    /**
     * 
     * @param {Internal.LivingEntity} player
     * @param {Internal.MinecraftServer} server
     */

    function summonPlayer(player, server) {
        var summoner = player.getProfile().getId().toString();
        var summonDim = player.getLevel().dimension;
        var offhandItem = player.getOffhandItem();
        var skullOwner = offhandItem.getTagElement("SkullOwner");
        if (skullOwner == null || !skullOwner.hasUUID("Id")) {
            return;
        }
        var rayHit = player.rayTrace(64, false);
        var hitX = rayHit.getHitX();
        var hitY = rayHit.getHitY();
        var hitZ = rayHit.getHitZ();
        var target = skullOwner.getUUID("Id").toString();
        teleExitFromString(target, server);
        server.runCommandSilent("execute in " + summonDim + " run tp " + target + " " + hitX + " " + hitY + " " + hitZ);
        teleEnterFromString(target, server);
    }

    /**
     * 
     * @param {Internal.LivingEntity} entity
     * @param {Internal.MinecraftServer} server
     */

    function placeNode(entity, server) {
        var rayHit = entity.rayTrace(256, false);
        var hitX = rayHit.getHitX();
        var hitY = rayHit.getHitY();
        var hitZ = rayHit.getHitZ();
        var offhandItem = entity.getOffhandItem().getId();
        entity.tell("Trying to place " + offhandItem + " node at " + Math.ceil(hitX) + ", " + Math.ceil(hitY) + ", " + Math.ceil(hitZ));
        if (offhandItem == "create:crimsite") {
            server.runCommandSilent("execute positioned " + hitX + " " + hitY + " " + hitZ + " run place structure deepdrilling:crimsite_node");
        } else if (offhandItem == "create:ochrum") {
            server.runCommandSilent("execute positioned " + hitX + " " + hitY + " " + hitZ + " run place structure deepdrilling:ochrum_node")
        } else if (offhandItem == "create:veridium") {
            server.runCommandSilent("execute positioned " + hitX + " " + hitY + " " + hitZ + " run place structure deepdrilling:veridium_node")
        } else if (offhandItem == "create:asurine") {
            server.runCommandSilent("execute positioned " + hitX + " " + hitY + " " + hitZ + " run place structure deepdrilling:asurine_node")
        } else {
            entity.tell(Text.red("No selector item in hand!"));
        }

    }

    /**
     * 
     * @param {Internal.LivingEntity} entity
     * @param {Internal.MinecraftServer} server
     */

    function yeet(entity, server) {
        var rayHit = entity.rayTrace(16, false);
        let speed = 50;
        let motionX = entity.lookAngle.x() * speed;
        let motionY = entity.lookAngle.y() * speed;
        let motionZ = entity.lookAngle.z() * speed;
        rayHit.entity.setMotion(motionX, motionY, motionZ);
        rayHit.entity.hurtMarked = true;
    }

    /**
     * 
     * @param {Internal.LivingEntity} entity
     * @param {Internal.MinecraftServer} server
     */

    function impulseBooster(entity, server) {
        let speed = 1;
        let motionX = entity.lookAngle.x() * speed;
        let motionY = entity.lookAngle.y() * speed;
        let motionZ = entity.lookAngle.z() * speed;
        entity.setMotion(motionX, motionY, motionZ);
        entity.hurtMarked = true;
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function pulseRifle(entity, server) {
        let speed = -3;
        var rayHit = entity.rayTrace(64, false);
        entity.level.explode(entity, rayHit.getHitX(), rayHit.getHitY(), rayHit.getHitZ(), 1, false, "none");
        server.runCommandSilent("execute positioned " + rayHit.getHitX() + " " + rayHit.getHitY() + " " + rayHit.getHitZ() + " playsound minecraft:entity.dragon_fireball.explode master @a[distance=..5] 5")
        let motionX = entity.lookAngle.x() * speed;
        let motionY = entity.lookAngle.y() * speed;
        let motionZ = entity.lookAngle.z() * speed;
        entity.setMotion(motionX, motionY, motionZ);
        entity.hurtMarked = true;
    }

    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function nbtTestAdd(entity, server) {
        let handItem = entity.getMainHandItem();
        if (handItem.nbt.contains("Test")){
            var test = handItem.nbt.getDouble("Test") + 1;
            handItem.nbt.putDouble("Test", test);
            player.tell("Adding one!");
        }
        else{
            handItem.nbt.putDouble("Test", 0);
        }
    }

})