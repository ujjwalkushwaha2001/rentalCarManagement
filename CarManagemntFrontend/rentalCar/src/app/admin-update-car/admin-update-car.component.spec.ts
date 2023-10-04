import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateCarComponent } from './admin-update-car.component';

describe('AdminUpdateCarComponent', () => {
  let component: AdminUpdateCarComponent;
  let fixture: ComponentFixture<AdminUpdateCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateCarComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
