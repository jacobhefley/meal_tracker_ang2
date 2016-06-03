import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <div class = "jumbotron">
      <p>{{ meal.name }}</p>
      <p>{{ meal.details }}</p>
      <p>{{ meal.calories }}</p>
    </div>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
  toggleDone(setState: boolean) {
    this.meal.done = setState;
  }
}
