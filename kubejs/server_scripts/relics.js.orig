ServerEvents.customCommand((event) => {
    var id = event.getId();
    /**
     * All custom spells go in here. Simply write your spell as a function, 
     * then add the spell to the detection chain below this comment.
     */
    if (id == "detonate"){
        detonate(event.getEntity(), event.getEntity().server);
    } else if (id == "blink"){
        blink(event.getEntity(), event.getEntity().server);
    }
    /**
     * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    * @param {string} cmd
    */

    function cmd_as(entity, server, cmd) {
        var id = entity.getProfile().getId().toString();
    
        server.runCommandSilent("execute as "+id+" run "+cmd);
    }
    
    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */

    function blink(entity, server){

        entity.runCommandSilent("tp ^ ^ ^5");
    }
    /**
    * 
    * @param {Internal.LivingEntity} entity
    * @param {Internal.MinecraftServer} server
    */
    function detonate(entity, server){
        var rayHit = entity.rayTrace(64, true);
        if (rayHit != null)
            var target = rayHit.entity;
            target.level.explode(entity, target.getX(), target.getY(), target.getZ(), 10, false, "none");
    }
})