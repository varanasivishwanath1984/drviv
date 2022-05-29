import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class FastagDataService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  fastagDetails = [
    {
        certificateNum : "TS01AB1235",
        sequenceNum: 1,
        vehicleType: "HMV",
        tollPlazaId: "2634234",
        tollLocation: "ShadNagar, Hyderabad,Telangana",
        readTime: "27/04/2022 09:30pm"
    },
    {
        certificateNum : "TS01AB1235",
        sequenceNum: 2,
        vehicleType: "HMV",
        tollPlazaId: "2634235",
        tollLocation: "Gachibowli, Hyderabad,Telangana",
        readTime: "27/04/2022 10:30pm"
    },
    {
        certificateNum : "TS01AB1235",
        sequenceNum: 3,
        vehicleType: "HMV",
        tollPlazaId: "2634236",
        tollLocation: "ShadNagar, Hyderabad",
        readTime: "27/04/2022 11:25pm"
    },
    {
        certificateNum : "TS01AB1235",
        sequenceNum: 4,
        vehicleType: "HMV",
        tollPlazaId: "2634234",
        tollLocation: "Hyderabad",
        readTime: "27/04/2022 11:30pm"
    },
    {
        certificateNum : "TS01HG4546",
        sequenceNum: 1,
        vehicleType: "HMV",
        tollPlazaId: "2634234",
        tollLocation: "Hyderabad",
        readTime: "27/04/2022 11:30pm"
    },
    {
        certificateNum : "TS03TH2856",
        sequenceNum: 1,
        vehicleType: "HMV",
        tollPlazaId: "2634234",
        tollLocation: "Hyderabad",
        readTime: "27/04/2022 11:30pm"
    }
  ];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.fastagDetails;
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
