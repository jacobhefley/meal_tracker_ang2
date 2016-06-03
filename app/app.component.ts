import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `

  <div class="container">
    <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
  </div>

  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
      new Meal("Fries", "I only ate half of them.", 365),
      new Meal("Big Meal", "Bulking season", 1000),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
