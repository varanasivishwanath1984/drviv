import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  posts: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient){
    http.get(this.url).subscribe(response=>{
      this.posts = response as any;
    });
  }

  createPost(input:HTMLInputElement){
    let post:any = {title:input.value};
    input.value = '';
    this.http.post(this.url,JSON.stringify(post)).subscribe(newPost=>{
      post['id']  = (newPost as any).id;
      this.posts.splice(0,0,post);
    });
  }
}
