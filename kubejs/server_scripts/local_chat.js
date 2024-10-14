PlayerEvents.chat(event=>{
    const message = event.getMessage()
    const match = event.getMessage().match(/l!([0-9]*)/)
    if(!match) return;
    const maxDistance = +match[1] || 20;
    const messageSliced = message.slice(match[0].length).trim()
    
    for(const player of event.level.getPlayers())
        if(player.distanceToEntitySqr(event.player) < maxDistance*maxDistance)
            player.tell(Component.gray(`[local ${maxDistance}]`).italic().append(Component.white(`<${event.player.username}> ${messageSliced}`).italic(false)))
    event.cancel();
})