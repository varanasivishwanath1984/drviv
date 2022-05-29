import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../services/data.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[]=[];
  constructor(private service: GithubDataService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(followers=>
      this.followers=followers as any)
  }

}
