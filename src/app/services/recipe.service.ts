import { ShoppinglistService } from 'src/app/services/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 'This is simply a test', 
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg', 
            [ new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)] ),
            new Recipe(
            'A test Recipe número 2',
            'This is second a test',
            'https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59f6f86d5bafe8699bf7fdf3/segundosinterior.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)])
      ];

      constructor(private slService: ShoppinglistService){

      }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) 
    {
        this.slService.addIngredients(ingredient);


    }
}