import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/applications/admin/models/category.model';

@Component({
  selector: 'app-add-form',
  template: '',
  styleUrls: []
})
export class AddFormComponent implements OnInit {

  form: FormGroup<any> | any;
  formBuilder?: FormBuilder;

  constructor(@Inject('formBuilder') formBuilder: FormBuilder, @Inject('genericService') private service: any) {
    this.formBuilder = formBuilder;
    this.buildForm();
  }

  ngOnInit(): void {
  }

  protected buildForm(){
    this.form = this.formBuilder?.group({
      name: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    if(this.form?.valid){
      console.log(this.form.value);
      this.service.add(this.form.value);
    }else{
      this.form?.markAllAsTouched();
    }
  }

  mapForm(item: any){
    return {name: item.name};
  }

}

