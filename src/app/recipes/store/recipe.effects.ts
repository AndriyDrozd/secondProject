import { Effect, Actions } from "@ngrx/effects";

import * as RecipeActions from '../store/recipe.actions';
import { switchMap, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) {}

    @Effect()
    recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
      return  this.httpClient.get<Recipe[]>('https://ng-recipe-book-ce164.firebaseio.com/recipes.json', 
        {observe: 'body', responseType: 'json'})
        
    })
    ,map(
        (recipes) => {
            console.log(recipes);
            for(let recipe of recipes){
                if(!recipe['ingredients']) {
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
            
            
        }
    ));

    
}