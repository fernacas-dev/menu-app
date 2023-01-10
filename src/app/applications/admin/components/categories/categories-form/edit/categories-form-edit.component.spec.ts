import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFormEditComponent } from './categories-form-edit.component';

describe('CategoriesFormEditComponent', () => {
  let component: CategoriesFormEditComponent;
  let fixture: ComponentFixture<CategoriesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
