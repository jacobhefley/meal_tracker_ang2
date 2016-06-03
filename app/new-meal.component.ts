import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `

  <div class = "input-group">
    <h1>New</h1>
    <div class="form-group">
      <label for="name">Name</label>
      <input placeholder="Name" type="text" class="form-control" required #newName>
    </div>
    <div class="form-group">
      <label for="details">Details</label>
      <input placeholder="Details" type="text" class="form-control" #newDetails>
    </div>
    <div class="form-group">
      <label for="calories">Calories</label>
      <input placeholder="Calories" type="text" class="form-control" #newCalories>
    </div>
    <button (click)="logMeal(newName,newDetails,newCalories)" type="submit" class="btn btn-default">Log</button>
  </div>

  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  logMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newMeal = new Meal (newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
