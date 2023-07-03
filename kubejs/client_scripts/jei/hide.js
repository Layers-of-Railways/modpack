// priority: 0

JEIEvents.hideItems((event) => {
    let hide = [
        "create_confectionery:full_chocolate_bar",
        "create_confectionery:full_black_chocolate_bar",
        "create_confectionery:full_white_chocolate_bar",
        "create_confectionery:full_ruby_chocolate_bar",
        "advancedperipherals:chunk_controller",
        "advancedperipherals:ar_controller",
        "advancedperipherals:ar_goggles",
    ];

    hide.forEach((id) => {
        //   console.log('Hiding item: ' + id)
        event.hide(id);
    });
});

JEIEvents.removeCategories((event) => {
    //console.log(event.getCategoryIds())

    let removeCategories = [];

    removeCategories.forEach((catid) => {
        // console.log('Removing category id for: ' + catid)
        event.remove(catid);
    });
});
