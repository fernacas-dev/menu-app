import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<any> | any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if(user !== null){
        console.log(user);
        this.router.navigate(['/client']);
      }
    })
  }

  private buildForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    if(this.loginForm?.valid){
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    }else{
      this.loginForm?.markAllAsTouched();
    }
  }

}
