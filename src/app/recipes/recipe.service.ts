import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test1', 'test1','https://images-gmi-pmc.edge-generalmills.com/a5e504b9-8e1c-480e-8456-dbc639bd928e.jpg',[new Ingredient('Meat',1), new Ingredient('French Fries',20)]),
        new Recipe('Test2', 'test2','https://www.livingandloving.co.za/wp-content/uploads/2016/07/10-yummy-winter-warmer-recipes.jpg',[new Ingredient('Meat',2), new Ingredient('Eggs',20)])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}

