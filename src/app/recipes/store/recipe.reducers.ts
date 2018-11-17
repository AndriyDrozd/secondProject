import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

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

export function recipeReducer(state = initialState, action) {
    return state;
}