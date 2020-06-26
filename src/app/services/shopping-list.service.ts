import { EventEmitter } from '@angular/core';
import { Ingredient } from './../models/ingredient.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
export class ShoppinglistService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)

  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {

    // for(const ingredient of this.ingredients) {
    //     this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}