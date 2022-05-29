import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input('likesCount') likesCount: number = 0;
  @Input('isLiked') isActive: boolean = false;

  onClick(){
    this.likesCount += (this.isActive) ? -1:1;
    this.isActive = !this.isActive;
  }

}
