import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg;
  constructor(private router: Router ,private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }
  login(data) {
    this.authenticateService.login(data)
    .subscribe(data => {
      if (data.error) {
        this.errorMsg = data.message;
      } else {
        this.router.navigate(['/']);
      }
      
      },
      error => {
          console.log(error);
          
      });
  }
  closeMsg() {
    this.errorMsg = null;
  }
}
