ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: 'minecraft:crafting_shaped' }, r => {
    let output = r.getOriginalRecipeResult()
    let slab = output.getId()
    if(!slab.includes('slab')) return
    let recipeJson = r.json
    if(!recipeJson.has('pattern')) return
    let pattern = recipeJson.get('pattern')
    if(pattern.size()>1) return
    let shape = pattern.get(0).getAsString().split('')
    if(shape[0] != shape[1] || shape[1] != shape[2]) return
    let ingredientKey = JSON.parse(recipeJson.get('key'))[shape[0]]
    if(ingredientKey.tag) return
    let ingredient = ingredientKey.item || ingredientKey[0].item
    
    event.shaped(
      Item.of(ingredient, 3),
      [
        'AAA',
        'AAA'
      ],
      { A: slab }
    )
  })
})
