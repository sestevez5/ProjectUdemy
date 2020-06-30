import { Ingredient } from './../../models/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppinglistService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    )
  }

  onIngredientAdd(ing: Ingredient) {
    this.ingredients.push(ing);

  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

}
