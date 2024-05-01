class Recipes{
    constructor(){
        this.listOfRecipes =[]
    }
    addRecipe(name,ingredients,steps){
        let id = this.listOfRecipes.length+1
        let newRecipe ={ name:name, id:id, ingredients:ingredients,steps:steps}
        console.log(newRecipe)
        this.listOfRecipes.push(newRecipe)
        console.log('the recipe has been added successfully')
    }
    searchRecipeNmae(name){
        const recipes = this.listOfRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(name.toLowerCase()))
            console.log({recipes})
    }
}
const recipe = new Recipes()
recipe.addRecipe("Chocolate chips","cocoa, oil, cookies, food","1.bakethem,2.mix them,3.eatthem")
recipe.addRecipe("Chicken","chicken, oil, cinnamon, food","1.fry them,2.mixit,3.eatthem")
recipe.addRecipe("FriedChips","fries, oil, heat","1.bakethem,2.stirfry,3.eatthem")
recipe.addRecipe("Cake","flour, oil, cookies, sugar","1.bakethem,2.mix them,3.eatthem")
recipe.addRecipe("fryers","cool, oil, cookies, food","1.bakethem,2.soil,3.eatthem")
recipe.searchRecipeNmae("friedchips")