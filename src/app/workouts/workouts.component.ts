import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];
  selectedWorkout: Workout;
  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }
  delete(workout:Workout): void {
    this.workouts=this.workouts.filter(w=>w!=workout);
    this.selectedWorkout=null;
    this.workoutService.deleteWorkout(workout).subscribe();
  }
  add(name:string,type:string):void {
    name=name.trim();
    type=type.trim();
    if (!name) {return;}
    this.workoutService.addWorkout( {name,type } as Workout)
      .subscribe( workout => this.workouts.push(workout) );
  }
  getWorkouts(): void{
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts=workouts;
    });
  }
  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getWorkouts();
  }

}