import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="form-group">
    <input placeholder="Name" type="text" class="form-control" required #newName>
  </div>
  <div class="form-group">
    <input placeholder="Details" type="text" class="form-control" required #newDetails>
  </div>
  <div class="form-group">
    <input placeholder="Calories" type="text" class="form-control" required #newCalories>
  </div>
  <button (click)="logMeal(newName,newDetails,newCalories)" type="submit" class="btn btn-default">Log</button>

  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  logMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var name = newName.value;
    var details = newDetails.value;
    var calories = parseInt(newCalories.value);
    if(name.length>1 && details.length>1 && calories>0){
      var newMeal = new Meal (name, details, calories);
      this.onSubmitNewMeal.emit(newMeal);
    }
    else;
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
