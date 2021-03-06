import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import {EditMealDetailsComponent} from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [HealthyPipe],
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand">Meal tracker</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <form class="navbar-form navbar-right">
        <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
        <select (change)="onChange($event.target.value)" class="filter">
          <option value="all" selected="selected">Show All</option>
          <option value="healthy">Show Healthy</option>
          <option value="notHealthy" >Show Not Healthy</option>
        </select>
      </form>

    </div><!--/.navbar-collapse -->
  </div>
</nav>
<div class = "container">
<edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
</edit-meal-details>
  <meal-display *ngFor="#currentMeal of mealList | display:filterHealthy"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(toAdd: Meal): void {
  this.mealList.push(toAdd);
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
