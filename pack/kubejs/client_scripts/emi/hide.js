// priority: 0

EMIEvents.hideItems((event) => {
    let hide = [];

    hide.forEach((id) => {
        //   console.log('Hiding item: ' + id)
        event.hide(id);
    });
});

EMIEvents.removeCategories((event) => {
    //console.log(event.getCategoryIds())

    let removeCategories = [];

    removeCategories.forEach((catid) => {
        // console.log('Removing category id for: ' + catid)
        event.remove(catid);
    });
});
