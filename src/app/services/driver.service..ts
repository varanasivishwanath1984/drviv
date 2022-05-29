import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class DriverDataService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  drviers = [
    {driverLicenseNumber : "123245678",
    firstName: "john",
    lastName: "doe",
    email: "john.doe@gmail.com",
    address: "ABCD, Town, Village",
    address2: "City, Country",
    zip: "364627",
    dob: "25/03/1985",
    Gender: "Male"
  },
  {driverLicenseNumber : "237459592",
    firstName: "xyz",
    lastName: "abc",
    email: "xyz.abc@gmail.com",
    address: "1234, Town, Village",
    address2: "City, Country",
    zip: "364627",
    dob: "03/11/1967",
    Gender: "Female"
  },
  {driverLicenseNumber : "22222222",
    firstName: "mnfjhs",
    lastName: "sdfsew",
    email: "mnfjhs.sdfsew@gmail.com",
    address: "sdsdf, Town, Village",
    address2: "City, Country",
    zip: "23455",
    dob: "22/02/1979",
    Gender: "Male"
  },
  {driverLicenseNumber : "11111111",
    firstName: "dvgder",
    lastName: "sdsdfcsdf",
    email: "dvgder.sdsdfcsdf@gmail.com",
    address: "GKGHJ, Town, Village",
    address2: "City, Country",
    zip: "67896",
    dob: "15/06/1977",
    Gender: "Male"
  }
  ];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.drviers;
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
