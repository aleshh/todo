export class Task {
  id: number;
  text: string;
  private completed: boolean;

  constructor(task: string) {
    this.text = task;
    this.completed = false;
  }

  getCompletedStatus(): boolean {
    return this.completed;
  }
}