import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  categories = [
    {id: 1, name : 'Development' },
    {id: 2, name : 'Art' },
    {id: 3, name : 'Languages' }
  ]

  log(x: any){
    console.log(x)
  }
}
