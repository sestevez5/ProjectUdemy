import { Recipe } from './../../models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {  
  @Input() recipe: Recipe;
  constructor(private recipes: RecipeService) { }

  ngOnInit(): void {
  }

  onAddShoppingList() {
    this.recipes.addIngredientsToShoppingList(this.recipe.ingredients);

  }
}
