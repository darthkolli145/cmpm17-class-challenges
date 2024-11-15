import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isButtonDisabled = false;

  disableButton() {
    this.isButtonDisabled = true;
  }
  title = 'task-tracker';
  dummyData = [
    {
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      age: 20,
      grade: "Sophomore",
      hobbies: ["Reading", "Swimming", "Photography"]
    },
    {
      name: "Brian Lee",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      age: 19,
      grade: "Freshman",
      hobbies: ["Basketball", "Cooking", "Gaming"]
    },
    {
      name: "Catherine Kim",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      age: 21,
      grade: "Junior",
      hobbies: ["Traveling", "Painting", "Hiking"]
    },
    {
      name: "Daniel Martinez",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      age: 22,
      grade: "Senior",
      hobbies: ["Cycling", "Music", "Dancing"]
    },
  ];  
  
}