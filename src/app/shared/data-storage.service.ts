import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
       const token = this.authService.getToken();
       return this.httpClient.put('https://ng-recipe-book-ce164.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-ce164.firebaseio.com/recipes.json?auth=' + token)
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-ce164.firebaseio.com/recipes.json?auth=' + token, 
        {observe: 'body', responseType: 'json'})
        .pipe(map(
            (recipes) => {
                console.log(recipes);
                for(let recipe of recipes){
                    if(!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
                
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}