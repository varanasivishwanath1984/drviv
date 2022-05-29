import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DriverDataService } from '../services/driver.service.';
import { map } from 'rxjs/operators';
import { Driver } from './drivers-model';

@Component({
  selector: 'drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
 @Input('driverLicenseNumber') driverLicenseNumber: any;
  firstName: string = "";
  email: string = "";
  lastName: string= "";
  address: string = "";
  address2:string = "";
  dob: string = "";
  zip: number = null;
 dummyImage = "assets/images/dummy.png";
  
  drivers: Driver[] =[];
  dlNumber : number = 0;
  selectedDriver: Driver;
  driverService;

  constructor(
    route: ActivatedRoute,
    driverService: DriverDataService){
      this.driverService = driverService;
      // driverService
      // .getAll().pipe(
      // .switchMap((drivers: Driver[]) => {
      //   this.drivers = drivers;
      //   return route.queryParamMap;
      // }))
      // .subscribe((params: { get: (arg0: string) => any; }) => {
      //   this.dlNumber = params.get('driverLicenseNumber');
        
      //   this.selectedDriver = (this.dlNumber) ? 
      //     this.drivers.filter(p => p.dlNumber === this.dlNumber) : 
      //     this.drivers;
      // });
  }

  // form = new FormGroup({
  //   driverLicenseNumber: new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   dob: new FormControl('',Validators.required),
  // });

  // get registrationNum(){
  //   return this.form.get('registrationNum');
  // }

  // get chasisNum(){
  //   return this.form.get('chasisNum');
  // }


  submit(f: any) {
    console.log(f.value);
    this.drivers = this.driverService.getAll().filter(p => p.driverLicenseNumber === f.value.dlNumber);
    this.firstName = this.drivers[0].firstName;
    this.email= this.drivers[0].email;
    this.lastName = this.drivers[0].lastName;
    this.address = this.drivers[0].address;
    this.address2 = this.drivers[0].address2;
    this.dob = this.drivers[0].dob;
    this.zip = this.drivers[0].zip;
    console.log(this.firstName);
  }

  onKeyUp(x: any) {
    console.log(x);
  }

}
