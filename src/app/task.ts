export class Task {
  id: number;
  text: string;
  private completed: boolean;

  getCompletedStatus(): boolean {
    return this.completed;
  }
}