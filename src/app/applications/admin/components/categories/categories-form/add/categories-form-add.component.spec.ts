import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFormAddComponent } from './categories-form-add.component';

describe('CategoriesFormAddComponent', () => {
  let component: CategoriesFormAddComponent;
  let fixture: ComponentFixture<CategoriesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
