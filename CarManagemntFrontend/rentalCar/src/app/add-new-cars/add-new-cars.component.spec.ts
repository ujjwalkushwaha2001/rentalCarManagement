import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCarsComponent } from './add-new-cars.component';

describe('AddNewCarsComponent', () => {
  let component: AddNewCarsComponent;
  let fixture: ComponentFixture<AddNewCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCarsComponent]
    });
    fixture = TestBed.createComponent(AddNewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
