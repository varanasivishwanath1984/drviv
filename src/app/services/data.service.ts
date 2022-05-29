import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class GithubDataService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
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
