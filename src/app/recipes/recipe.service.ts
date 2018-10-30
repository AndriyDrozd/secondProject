import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test','https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',[new Ingredient('Meat',1), new Ingredient('French Fries',20)])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}

