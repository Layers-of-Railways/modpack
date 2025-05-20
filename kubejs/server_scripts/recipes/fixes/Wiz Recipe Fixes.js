//09wizardguy's Recipe Fixes)

//Remove original recipes that were broken as to not have duplicate entries in EMI
ServerEvents.recipes((event) => {
    event.remove({ output: 'muffins_thaidelight:lime_slice', type: "farmersdelight:cutting"}),
    event.remove({ output: 'muffins_thaidelight:papaya_slice', type: "farmersdelight:cutting"}),
    event.remove({ output: 'muffins_thaidelight:raw_papaya_slice', type: "farmersdelight:cutting"})

})

//Fix for Thai's Delight Cutting Board recipes
ServerEvents.recipes((event) => {
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "muffins_thaidelight:lime"
            }
        ],
        result: [
            {
                count: 2,
                item: "muffins_thaidelight:lime_slice"
            }
        ],
        tool: {
            tag: "c:tools/knives"
        }
    })
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "muffins_thaidelight:papaya"
            }
        ],
        result: [
            {
                count: 2,
                item: "muffins_thaidelight:papaya_slice"
            }
        ],
        tool: {
            tag: "c:tools/knives"
        }
    })
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "muffins_thaidelight:raw_papaya"
            }
        ],
        result: [
            {
                count: 2,
                item: "muffins_thaidelight:raw_papaya_slice"
            }
        ],
        tool: {
            tag: "c:tools/knives"
        }
    })
})