ServerEvents.recipes((event) => {
  event.remove({output: 'deepdrilling:drill_core'});
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      'CESEC',
      'CBFBC',
      'CILIC',
      ' IPI ',
      ' HNH '
    ],
    key: {
      C: {item: 'create:brass_casing'},
      E: {item: 'create:electron_tube'},
      F: {item: 'create:flywheel'},
      S: {item:'create:shaft'},
      B: {item:'create:brass_block'},
      I: {item:'iron_ingot'},
      L: {item:'create:large_cogwheel'},
      P: {item:'create:precision_mechanism'},
      H: {item:'create:sturdy_sheet'},
      N: {item:'netherite_ingot'}
    },
    result: {item: 'deepdrilling:drill_core'},
    acceptMirrored: false
  })
})