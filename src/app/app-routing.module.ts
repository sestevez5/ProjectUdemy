import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './models/recipe.model';
import { NgModule, Component } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoute: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {   path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent},
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
        
            { path: ':id/edit', component: RecipeEditComponent },


            ]
    },
    { path: 'shopping-list', component: ShoppingListComponent}

]
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}