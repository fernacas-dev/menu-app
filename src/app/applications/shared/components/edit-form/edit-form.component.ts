import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  template: '',
  styleUrls: []
})
export class EditFormComponent implements OnInit {

  form: FormGroup<any> | any;
  @Output() closingForm: EventEmitter<any> = new EventEmitter(true);

  @Input('data') data: any | undefined;

  constructor(@Inject('formBuilder') protected formBuilder: FormBuilder, @Inject('genericService') private service: any) {
    this.buildForm();
  }

  ngOnInit(): void {
    console.log(`DATA: ${JSON.stringify(this.data)}`)
  }

  protected buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    this.form.value = this.data;
  }

  save(event: Event) {
    if(this.form?.valid){
      console.log(this.form.value);
      this.service.edit(this.mapForm(this.form.value));
    }else{
      console.log(`error: ${JSON.stringify(this.form.value)}`);
      this.form?.markAllAsTouched();
    }
  }

  cancel() {
    console.log('closingForm')
    this.closingForm.emit(true);
  }

  mapForm(item: any): any{
    console.log(`mapForm padre`)
    return {name: item.name, $id: this.data?.$id};
  }
}

