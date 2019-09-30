import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {
  private baseUrl = 'https://engine-staging.viame.ae/assessment/user';
  public todoList;

  constructor(private http: HttpClient) { 

  }
  getTodoList() {
    return this.http.get(`${this.baseUrl}/list`);
  }
  createTodoList(data) {
    return this.http.post(`${this.baseUrl}/task`, 
    {
      todolist: {
      title: data.title,
      description: data.desc,
      status: 1 
      }
    });
  }
  updateTodoList(data, status) {
    return this.http.put(`${this.baseUrl}/task/${data._id}`, 
    {
      todolist: {
      title: data.title,
      description: data.description,
      status: status 
      }
    });
  }
  deleteTodoList(data) {
    return this.http.delete(`${this.baseUrl}/task/${data._id}`);
  }
}
