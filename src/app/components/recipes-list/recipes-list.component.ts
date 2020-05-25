import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg' )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
