import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FilterProfComponent } from './Search/filter-prof.component';
import { ImComponent } from './im/im.component';
import { careerS } from './careerS/careerS.component';
import { TeamComponent } from './team/team.component';
import { SevComponent } from './sev/sev.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FilterProfComponent,
    ImComponent,
    careerS,
    SevComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
  ]
})
export class HomeModule { }
