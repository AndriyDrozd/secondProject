import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http, Response } from '@angular/http';
import { Recipe } from "../recipes/recipe.model";


@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) {}

    storeRecipes() {
       return this.http.put('https://ng-recipe-book-ce164.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-ce164.firebaseio.com/recipes.json')
        .subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}