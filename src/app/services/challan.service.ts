import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class ChallanService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  challanDetails = [
    {
        registrationNum : "TS01AB1235",
        challanNum: "824234245",
        violationType: "Over Speed",
        trafficPSLocation: "ShadNagar",
        violationLocation: "ShadNagar, Hyderabad,Telangana",
        violationDate: "27/04/2021",
        violationTime: "09:30",
        amount: 1000
    },
    {
      registrationNum : "TS01AB1235",
      challanNum: "8242342432",
      violationType: "Wrong Parking",
      tollPlazaId: "2634234",
      trafficPSLocation: "ShadNagar",
      violationLocation: "ShadNagar, Hyderabad,Telangana",
      violationDate: "27/03/2022",
      violationTime: "09:30",
      amount: 500
    },
    {
        certificateNum : "TS01HG4546",
        challanNum: "824234245",
        violationType: "Over Speed",
        trafficPSLocation: "Gachibowli",
        violationLocation: "Gachibowli, Hyderabad,Telangana",
        violationDate: "10/03/2021",
        violationTime: "09:30",
        amount: 1000
    },
    {
      certificateNum : "TS01HG4546",
      challanNum: "824234245",
      violationType: "Over Speed",
      trafficPSLocation: "Secunderabad",
      violationLocation: "RTC X Roads, Hyderabad,Telangana",
      violationDate: "22/10/2021",
      violationTime: "09:30",
      amount: 1000
    },
    {
      certificateNum : "TS01HG4546",
      challanNum: "824234245",
      violationType: "Wrong Parking",
      trafficPSLocation: "Gachibowli",
      violationLocation: "Gachibowli, Hyderabad,Telangana",
      violationDate: "10/03/2021",
      violationTime: "09:30",
      amount: 500
    },
    {
      certificateNum : "TS03TH2856",
      challanNum: "824234245",
      violationType: "Wrong Parking",
      trafficPSLocation: "Gachibowli",
      violationLocation: "Gachibowli, Hyderabad,Telangana",
      violationDate: "10/03/2021",
      violationTime: "09:30",
      amount: 500
    }
  ];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.challanDetails;
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
