import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordFormComponent } from './add-record-form.component';

describe('AddRecordFormComponent', () => {
  let component: AddRecordFormComponent;
  let fixture: ComponentFixture<AddRecordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
