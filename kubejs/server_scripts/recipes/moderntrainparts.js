ServerEvents.recipes((event) => {
    event.shaped('moderntrainparts:pantograph', [
        ' A ',
        'R  ',
        'ISI'
    ], {
        A: 'create:andesite_alloy',
        R: '#c:iron_rods',
        I: 'moderntrainparts:insulator',
        S: '#c:iron_plates'
    })

    event.shapeless('moderntrainparts:wire_connector_item', [
        "createaddition:electrum_spool"
    ]);
})