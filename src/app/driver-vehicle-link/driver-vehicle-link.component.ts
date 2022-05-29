import { Component, Input, OnInit } from '@angular/core';
import { DriverVehicleAssignement } from './driverVehicleLink-model';

@Component({
  selector: 'driver-vehicle-link',
  templateUrl: './driver-vehicle-link.component.html',
  styleUrls: ['./driver-vehicle-link.component.css']
})
export class DriverVehicleLinkComponent {
  @Input('driverLicenseNumber') driverLicenseNumber: any;
  @Input('registrationNumber') registrationNumber: any;

  driverAssignment: DriverVehicleAssignement[] =[];
  constructor() { }

  submit(f){
    this.driverAssignment.push(new DriverVehicleAssignement(f.value.dlNumber,f.value.registrationNumber));
  }
}
