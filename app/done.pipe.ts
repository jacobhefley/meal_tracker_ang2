import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "done",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Meal[], args) {
    console.log('selected meal: ', args[1]);
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter(function(meal) {
        return meal.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((meal) => {
        return !meal.done;
      });
    } else {
      return input;
    }
  }
}
