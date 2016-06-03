export class Meal {
  public done: boolean = false;
  public date: Date = new Date (Date.now()); // optional
  constructor(public name: string, public details: string, public calories: number) {
  }
}
