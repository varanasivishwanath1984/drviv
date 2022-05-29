import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <button class="btn btn-primary" [style.backgroundColor]="isActive? 'blue':'red'">Save</button>
    `
})

export class CoursesComponent {
    title = "List Of Courses";
    courses;
    email = "me@example.com";
    isActive = false;

    onKeyUp(){
        console.log(this.email);
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}