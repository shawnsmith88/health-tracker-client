import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkoutType } from './workout-type';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {
  private baseURL="http://localhost:8080";
  private typeURL=this.baseURL+"/type";

  addType(type:WorkoutType):Observable<WorkoutType>{
    return this.http.post<WorkoutType>(this.typeURL,type).pipe(tap((newType:WorkoutType)=>{
      console.log(newType);
    }));
  }
  getTypes():Observable<WorkoutType[]>{
    return this.http.get<WorkoutType[]>(this.typeURL).pipe(tap((newType:WorkoutType[])=>{
      console.log(newType);
    }));
  }

  constructor(private http:HttpClient) { }
}
