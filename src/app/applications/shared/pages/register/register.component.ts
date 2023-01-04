import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup<any> | any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.userService.logged$.subscribe((response) => {

    });

  }

  private buildForm(){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    if(this.registerForm?.valid){
      console.log(this.registerForm.value);
      //this.userService.createAccount();
      this.userService.login();
    }else{
      this.registerForm?.markAllAsTouched();
    }
  }

}
