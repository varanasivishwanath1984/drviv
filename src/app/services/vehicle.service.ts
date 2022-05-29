import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class VehicleDataService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  vehicles = [
    {
        certificateNum : "TS01AB1235",
        engineNum: "1111111111",
        chasisNum: "afdvheu32434",
        ownerName: "John Doe",
        address: "casdufbv,afvdbf",
        fuel: "Diesel",
        maker: "Maruti Suzuki",
        certificateDate: "25/03/2020",
        marufacturingYear: "2020",
        insurancePolicyNum: "3436445677",
        insuranceCompany: "AIG",
        insuranceUpto: "30/12/2022",
        insuranceStatus: "Active"
    },
    {
        certificateNum : "TS01HG4546",
        engineNum: "22222222222",
        chasisNum: "asdvucsbdf23",
        ownerName: "A SDFHEfSD",
        address: "asdfd,asfvervebuv",
        fuel: "Petrol",
        maker: "Tata Motors",
        certificateDate: "15/04/2021",
        marufacturingYear: "2021",
        insurancePolicyNum: "65645242",
        insuranceCompany: "Reliance General Insurance",
        insuranceUpto: "30/12/2021",
        insuranceStatus: "Expired"
    },
    {
        certificateNum : "TS03TH2856",
        engineNum: "3333333333",
        chasisNum: "igvgnrig22353",
        ownerName: "ADcs adfvhsudf",
        address: "rvfejvbe,acsdjjf",
        fuel: "Diesel",
        maker: "Mahindra",
        certificateDate: "25/02/2022",
        marufacturingYear: "2022",
        insurancePolicyNum: "34256432",
        insuranceCompany: "ICIC Lombard",
        insuranceUpto: "30/10/2022",
        insuranceStatus: "Active"
    }
  ];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.vehicles;
    //return this.http.get(this.url);
  }

  create(resource: any) {
      return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}
