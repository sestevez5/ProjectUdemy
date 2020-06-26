import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {



  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
