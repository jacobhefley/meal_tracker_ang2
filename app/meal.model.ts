export class Meal {
  public date: Date = new Date (Date.now()); // optional
  constructor(public name: string, public details: string, public calories: number) {
  }
  isHealthy(): boolean {
    if(this.calories<500){
      return true;
    }
    else {
      return false;
    }
  }
}
