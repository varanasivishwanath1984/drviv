import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverVehicleLinkComponent } from './driver-vehicle-link.component';

describe('DriverVehicleLinkComponent', () => {
  let component: DriverVehicleLinkComponent;
  let fixture: ComponentFixture<DriverVehicleLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverVehicleLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverVehicleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
