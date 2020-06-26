import { Ingredient } from './../../models/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppinglistService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private slService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    )
  }

  onIngredientAdd(ing: Ingredient) {
    this.ingredients.push(ing);

  }

}
