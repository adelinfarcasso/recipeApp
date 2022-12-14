import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping.list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping.list.edit/shopping.list.edit.component';
import { RecipeListComponent } from './recipe-book/recipe.list/recipe.list.component';
import { RecipeItemComponent } from './recipe-book/recipe.list/recipe.item/recipe.item.component';
import { RecipeDetailComponent } from './recipe-book/recipe.detail/recipe.detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe-book/recipes.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipePleaseSelectComponent } from './recipe-book/recipe-please-select/recipe-please-select.component';
import { RecipeAddComponent } from './recipe-book/recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipePleaseSelectComponent,
    RecipeAddComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
