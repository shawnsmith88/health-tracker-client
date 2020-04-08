import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { WorkoutTypeService } from '../workout-type.service';
import { WorkoutType } from '../workout-type';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];
  types:WorkoutType[];
  newTypes:WorkoutType[];
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
    console.log(this.newTypes);
    if (!name) {return;}
    this.workoutTypeService.getTypes().subscribe(response => {
      this.types=response;
      if(this.types.filter(e => e.type == type).length==0){
        this.workoutTypeService.addType({type} as WorkoutType).subscribe(newType => {
          this.newTypes.push(newType)
          console.log(this.newTypes)
        });
      }
    });
    this.workoutService.addWorkout( {name,type } as Workout)
      .subscribe( workout => this.workouts.push(workout) );
  }
  getWorkouts(): void{
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts=workouts;
    });
  }
  constructor(
    private workoutService: WorkoutService,
    private workoutTypeService:WorkoutTypeService
    ) { }

  ngOnInit(): void {
    this.getWorkouts();
    this.newTypes=[];
  }

}
