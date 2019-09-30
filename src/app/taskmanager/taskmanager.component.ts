import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatetaskComponent } from '../createtask/createtask.component';
import { AuthenticateService } from '../authenticate.service';
import { TaskmanagerService } from '../taskmanager.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  public tasks = <any>[];
  public actions = ['Created', 'Working', 'Finished', 'Cancelled', 'Delete'];
    

  constructor(
    private modalService: NgbModal, 
    private router: Router, 
    private authenticationService: AuthenticateService,
    private taskmanagerService: TaskmanagerService
    
    ) {

    }
  ngOnInit() {
    this.getTodoList();
  }

  open() {
    const modalRef = this.modalService.open(CreatetaskComponent);
    modalRef.result.then(() => {
      this.reload();
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  getTodoList() {
    this.taskmanagerService.getTodoList()
    .pipe(first())
    .subscribe(tasks => this.tasks = tasks);
  }
  reload() {
    this.getTodoList();
  }
  updateTask(data, status) {
    if (status === 5) {
      this.deleteTask(data);
    } else {
      this.taskmanagerService.updateTodoList(data, status)       
      .subscribe(
          data => {
            this.reload();
          },
          error => {
            console.log(error);
          });
    }
    
  }
  deleteTask(data) {
    this.taskmanagerService.deleteTodoList(data)       
    .subscribe(
        data => {
          this.reload();
        },
        error => {
           console.log(error);
        });
  }

}
