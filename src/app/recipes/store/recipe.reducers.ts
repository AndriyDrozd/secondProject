import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
    recipes: State
}



export interface State {
    recipes: Recipe[];

}


const initialState: State = {
    recipes:  [
        new Recipe('Test1', 'test1','https://images-gmi-pmc.edge-generalmills.com/a5e504b9-8e1c-480e-8456-dbc639bd928e.jpg',[new Ingredient('Meat',1), new Ingredient('French Fries',20)]),
        new Recipe('Test2', 'test2','https://www.livingandloving.co.za/wp-content/uploads/2016/07/10-yummy-winter-warmer-recipes.jpg',[new Ingredient('Meat',2), new Ingredient('Eggs',20)])
      ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
        return {
            ...state,
            recipes: [...action.payload]
        };
        case (RecipeActions.ADD_RECIPE):
        return {
            ...state,
            recipes: [...state.recipes, action.payload]
        };
        case (RecipeActions.UPDATE_RECIPE):
        const recipe = state.recipes[action.payload.index];
        const updatedRecipe = {
            ...recipe,
            ...action.payload.updateRecipe
        };
        const recipes = [...state.recipes];
        recipes[action.payload.index] = updatedRecipe;
        return {
            ...state,
            recipes: recipes
        };
        case (RecipeActions.DELETE_RECIPE):
        const oldRecipes = [...state.recipes];
        oldRecipes.splice(action.payload, 1);
        return {
            ...state,
            recipes: oldRecipes
        };
        default:
        return state;
    }
}