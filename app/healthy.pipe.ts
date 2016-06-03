import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "display",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    console.log('selected meal: ', args[1]);
    var desiredState = args[0];
    if(desiredState === "healthy") {
      return input.filter(function(meal) {
        return meal.isHealthy();
      });
    } else if (desiredState === "notHealthy") {
      return input.filter((meal) => {
        return !meal.isHealthy();
      });
    } else {
      return input;
    }
  }
}
