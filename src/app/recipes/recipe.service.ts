import { Recipe } from "./recipe.model";


export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test','https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}

