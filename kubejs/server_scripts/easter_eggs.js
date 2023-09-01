PlayerEvents.loggedIn((event) => {
    let player = event.player;

    //Birthdays
    let currentDate = new Date();
    let today =
        currentDate.getMonth() +
        1 + //[0,11] so +1
        "-" +
        currentDate.getDate(); //[0,31]
    // ["name", "MM-DD", "role"]
    let birthdays = [["ithundxr", "8-7", "Pack dev"]];

    birthdays.forEach((birthday) => {
        let person = birthday[0];
        let birthdate = birthday[1];
        let role = birthday[2];

        if (birthdate == today) {
            player.tell([
                Component.string("Happy birthday to "),
                Component.string("[" + person + "]").hover(
                    Component.string(role)
                ),
            ]);
        }
    });
});
