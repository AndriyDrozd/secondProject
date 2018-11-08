import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http } from '@angular/http';


@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) {}

    storeRecipes() {
       return this.http.put('https://ng-recipe-book-ce164.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}