import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public errorMsg;
  constructor(private router: Router ,private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }
  register(formData) {
    this.authenticateService.register(formData)
            
            .subscribe(
                data => {
                 // console.log(data);
                  this.router.navigate(['/login']);
                },
                error => {
                  // console.log(error);
                   this.errorMsg = 'Duplicate email';
                });
  }
  closeMsg() {
    this.errorMsg = null;
  }

}
