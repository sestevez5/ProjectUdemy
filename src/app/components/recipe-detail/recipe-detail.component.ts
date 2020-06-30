import { Recipe } from './../../models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipes: RecipeService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) =>
        {
          this.id = +params.id;
          this.recipe = this.recipes.getRecipe(this.id);
        }
      )
  }

  onAddShoppingList() {
    this.recipes.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe(){
    this.router.navigate(['../', this.id, "edit"], {relativeTo: this.route});

  }
}
