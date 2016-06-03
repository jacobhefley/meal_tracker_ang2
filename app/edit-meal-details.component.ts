import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class = "input-group">
    <h1>Edit</h1>
    <div class="form-group">
      <label for="name">Name</label>
      <input placeholder="Name" type="text" class="form-control" [(ngModel)]="meal.name" required #newName>
    </div>
    <div class="form-group">
      <label for="details">Details</label>
      <input placeholder="Details" type="text" class="form-control" [(ngModel)]="meal.details" #newDetails>
    </div>
    <div class="form-group">
      <label for="calories">Calories</label>
      <input placeholder="Calories" type="text" class="form-control" [(ngModel)]="meal.calories" #newCalories>
    </div>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
