import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubDataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverDataService } from './services/driver.service.';
import { VehicleDataService } from './services/vehicle.service';
import { FastagDataService } from './services/fastag.service';
import { ChallanService } from './services/challan.service';
import { DriverVehicleLinkComponent } from './driver-vehicle-link/driver-vehicle-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NavbarComponent,
    NotFoundComponent,
    DriversComponent,
    VehiclesComponent,
    HomeComponent,
    DriverVehicleLinkComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'followers/:id/:username',component: GithubProfileComponent},
      {path: 'followers',component: GithubFollowersComponent},
      {path: 'posts',component: PostsComponent},
      {path: 'vehicle',component: VehiclesComponent},
      {path: 'driver/:idlNumber',component: DriversComponent},  
      {path: 'driver',component: DriversComponent}, 
      {path: 'driverVehicle',component: DriverVehicleLinkComponent}, 
      {path: '**',component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    VehicleDataService,
    FastagDataService,
    DriverDataService,
    ChallanService,
    GithubDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
