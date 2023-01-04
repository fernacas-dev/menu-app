import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<any> | any;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void {

  }

  private buildForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    if(this.loginForm?.valid){
      console.log(this.loginForm.value);
    }else{
      this.loginForm?.markAllAsTouched();
    }
  }

}
