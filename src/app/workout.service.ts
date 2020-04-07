import { Injectable } from '@angular/core';
import { Workout } from './workout';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private baseURL="http://localhost:8080"
  private workoutsURL=this.baseURL+"/workout";
  addWorkout(workout:Workout): Observable<Workout>{
      return this.http.post<Workout>(this.workoutsURL,workout).pipe(
        tap((newWorkout: Workout)=> {
          
        })
      )
  }
  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutsURL);
  }
  updateWorkout(workout:Workout): Observable<any> {
    return this.http.put(this.workoutsURL,workout);
  }
  deleteWorkout(workout:Workout): Observable<any> {
    return this.http.delete(this.workoutsURL+"?id=" + workout.id);
  }
  constructor(
    private http:HttpClient
  ) {

   }
}
