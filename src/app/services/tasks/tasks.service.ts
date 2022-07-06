import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tasks } from 'src/app/pages/task/task.module';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getAllTask(): Observable<tasks[]> {
    return this.http.get<tasks[]>(API_URL + 'task');
  }

  
  saveTask(
    id: string,
    title: string,
    description: string,
    date: string,
    hour: string,
    responsable: string,
    status: string,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    lastChangedBy: string
  ) {
    return this.http
      .post<tasks>(API_URL + 'task', {
        id,
        title,
        description,
        date,
        hour,
        responsable,
        status,
        createdAt,
        createdBy,
        updatedAt,
        lastChangedBy
      })
      
  }
}
