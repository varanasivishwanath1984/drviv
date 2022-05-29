import { Component, Input, OnInit,Output } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ChallanItem } from '../models/challas-item';
import { ChallanService } from '../services/challan.service';
import { FastagDataService } from '../services/fastag.service';
import { VehicleDataService } from '../services/vehicle.service';
import { FastagDetails } from './fastag-model';
import { Vehicle } from './vehicles-model';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent {
  @Input('regNum') registrationNum: any;
  @Input('engineNum') engineNum: any;
  @Input('chasisNum') chasisNum: any;
    regNumber: string = "";
    chasisNumber: string = "";
    engineNumber: string = "";
    address: string = "";
    ownerName: string = "";
    fuel: string = "";
    maker: string = "";
    certificateDate: string = "";
    marufacturingYear: string = "";
    insurancePolicyNum: string  = "";
    insuranceCompany: string = "";
    insuranceUpto: string ="";
    insuranceStatus: string = "";
    openChallans : string = "3";
    paidChallans: string="5";
    vehicleService;
    fastagService;
    challanService;

    vehicles: Vehicle[] =[];
    @Output() fastagDetails: FastagDetails[] =[];
    @Output() challanDetails: ChallanItem[] = [];

  constructor(vehicleService: VehicleDataService, fastagService: FastagDataService,challanService: ChallanService){
    this.fastagService = fastagService;
    this.vehicleService = vehicleService;
    this.challanService = challanService;
  }
  submit(f: any) {
    console.log(f.value);
    this.vehicles = this.vehicleService.getAll().filter(p => (p.regNum === f.value.registrationNum) || (p.chasisNum === f.value.chasisNum)
      || (p.engineNum === f.value.engineNum));
      console.log(this.vehicles[0]);
    this.fastagDetails = this.fastagService.getAll().filter(g => (g.certificateNum === this.vehicles[0].certificateNum));
    this.challanDetails = this.challanService.getAll().filter(g => (g.certificateNum === this.vehicles[0].certificateNum));
    console.log(this.fastagDetails);
    this.address = this.vehicles[0].address;
    this.certificateDate= this.vehicles[0].certificateDate;
    this.fuel = this.vehicles[0].fuel;
    this.maker = this.vehicles[0].maker;
    this.marufacturingYear = this.vehicles[0].marufacturingYear;
    this.ownerName = this.vehicles[0].ownerName;
    this.insuranceCompany = this.vehicles[0].insuranceCompany;
    this.insurancePolicyNum = this.vehicles[0].insurancePolicyNum;
    this.insuranceUpto = this.vehicles[0].insuranceUpto;
    this.insuranceStatus = this.vehicles[0].insuranceStatus;
    this.regNumber = this.vehicles[0].certificateNum;
    this.chasisNumber = this.vehicles[0].chasisNum;
    this.engineNumber = this.vehicles[0].engineNum;
  }
}
