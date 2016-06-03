import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <div class = "jumbotron" >
      <p><strong>Name: </strong> {{ meal.name }}</p>
      <p><strong>Details: </strong>{{ meal.details }}</p>
      <p><strong>Calories: </strong>{{ meal.calories }}</p>
    </div>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
