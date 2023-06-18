const toolTips = [
  //	['modid:blockid','Tooltip text'],
];

ItemEvents.tooltip((e) => {
  toolTips.forEach((tip) => e.add(tip[0], Text.gold(tip[1])));
});
