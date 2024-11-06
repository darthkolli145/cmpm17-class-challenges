import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule], // What directives, pipes, etc are we using
  templateUrl: './tasks.component.html', // add html to the component's identity
  styleUrl: './tasks.component.scss' // add a style sheet to the component's identity
})

//  how can we give the component behavior and identity
export class TasksComponent {
  tasks: {id: number, title: string, status: boolean} [] = [];
  newTitle: string = ''; // what is this doing?
  nextId : number = 1;
  newStat: boolean = false;

  AddTask(): void {
    if (this.newTitle.trim()){
      this.tasks.push({
        id: this.nextId++,
        title: this.newTitle,
        status: this.newStat,
      });
      this.newTitle = ''; // why did I clear the input?
      this.newStat = false;
    }
  }

  toggleStatus(id:number): void{
    const task = this.tasks.find(task => task.id === id);
    if (task){
      task.status = !task.status // what is this line doing?
    }
  }

  removeTask(id:number): void{
    this.tasks = this.tasks.filter(task => task.id !== id);
    // lets revist the filter method, how does the above line work?
  }
// what if i wanted to make this an angular form
}
