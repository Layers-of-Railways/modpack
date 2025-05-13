ServerEvents.tags("item", (event) => {

    event.add("create:blaze_burner_fuel/special" ,"createaddition:bioethanol_bucket");
    event.add("create:blaze_burner_fuel/regular" ,"createaddition:seed_oil_bucket");
});