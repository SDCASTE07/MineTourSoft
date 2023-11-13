import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../signin/service/auth.service"
import { Router } from '@angular/router';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    test : Date = new Date();
    form: FormGroup;
    constructor(
        private readonly formBuilder: FormBuilder,
        private service: AuthService,
        private router: Router
    ) { 
        this.form = this.formBuilder.group({
        email: '',
        password: '',
      })
     }

    ngOnInit() {
       
    }
    
    login() {
        console.log("entro")
        if (this.form.valid) {
            const email =this.form.get("email")?.value       
            const password =this.form.get("password")?.value
                      
            const loginRequest={
                email:email,
                password:password
            };
            this.service.login(loginRequest).subscribe((response) => {
          console.log(response);
          if (response.jwtToken) {            
            const jwtToken = response.jwtToken;
            localStorage.setItem('JWT', jwtToken);
            this.router.navigate(['/dash']);
          }
        }

        )}
        
  }
}
