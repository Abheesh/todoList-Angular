import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TaskmanagerService } from '../taskmanager.service';



@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent {
 

  constructor(public activeModal: NgbActiveModal, private taskmanagerService: TaskmanagerService) {}
  createTask(formData) {
    this.taskmanagerService.createTodoList(formData)
            
            .subscribe(
                data => {
                  this.activeModal.close('Close click');
                },
                error => {
                   console.log(error);
                });
    
  }

}
