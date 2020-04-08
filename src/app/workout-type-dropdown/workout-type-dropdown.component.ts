import { Component, OnInit } from '@angular/core';
import { WorkoutType } from '../workout-type';
import { WorkoutTypeService } from '../workout-type.service';

@Component({
  selector: 'app-workout-type-dropdown',
  templateUrl: './workout-type-dropdown.component.html',
  styleUrls: ['./workout-type-dropdown.component.css']
})
export class WorkoutTypeDropdownComponent implements OnInit {
  types:WorkoutType[]

  getTypes(): void {
    this.workoutTypeService.getTypes().subscribe(types => {
      this.types=types;
    })
  }

  constructor(private workoutTypeService:WorkoutTypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

}
