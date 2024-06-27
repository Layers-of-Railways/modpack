EMIEvents.hideItems((event) => {
    event.hide(/ae2:facade/);
});

EMIEvents.addItems((event) => {
    event.add(Item.of("ae2:facade", '{item:"minecraft:stone"}'));
});
