let $ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer");
PlayerEvents.chat((event) => {
    const message = event.getMessage();
    const match = event.getMessage().match(/^l!([0-9]*)/);
    if (!match) return;
    const maxDistance = +match[1] || 20;
    const messageSliced = message.slice(match[0].length).trim();

    tellPlayersInRange(event.player, maxDistance, messageSliced);
    event.cancel();
});

ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("l").then(
            Commands.argument("range", Arguments.INTEGER.create(event)).then(
                Commands.argument(
                    "message",
                    Arguments.STRING.create(event)
                ).executes((c) => {
                    const player = c.source.player;
                    const range = Arguments.INTEGER.getResult(c, "range");
                    const message = Arguments.STRING.getResult(c, "message");
                    tellPlayersInRange(player, range, message);
                    return 1;
                })
            )
        )
    );
});

/**
 *
 * @param {$ServerPlayer} sourcePlayer
 * @param {number} range
 * @param {string} message
 */
function tellPlayersInRange(sourcePlayer, range, message) {
    for (const player of sourcePlayer.level.getPlayers()) {
        if (player.distanceToEntitySqr(player) < range * range) {
            player.tell(
                Component.gray(`[local ${range}]`)
                    .italic()
                    .append(
                        Component.white(
                            `<${sourcePlayer.username}> ${message}`
                        ).italic(false)
                    )
            );
        }
    }
}
