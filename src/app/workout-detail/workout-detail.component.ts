import { Component, OnInit,Input } from '@angular/core';
import { Workout } from '../workout';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { WorkoutsComponent } from '../workouts/workouts.component';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  @Input() workout:Workout;
  save(): void {
    this.workoutService.updateWorkout(this.workout).subscribe();
  }
  constructor( private workoutService:WorkoutService) { }

  ngOnInit(): void {
  }

}
