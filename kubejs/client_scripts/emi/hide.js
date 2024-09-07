// priority: 0

EMIEvents.hideItems((event) => {
    let hide = [];

    hide.forEach((id) => {
        event.hide(id);
    });
});

EMIEvents.removeCategories((event) => {
    let removeCategories = [];

    removeCategories.forEach((catid) => {
        event.remove(catid);
    });
});
