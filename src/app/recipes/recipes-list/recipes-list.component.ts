import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe("Dummy", "A test recipe", "http://images.media-allrecipes.com/userphotos/250x250/571416.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
