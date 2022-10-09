
import {  Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EducationComponent } from "./education/education.component";
import { FailedComponent } from "./failed/failed.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { IntroComponent } from "./intro/intro.component";
import { ServicesComponent } from "./services/services.component";
export const rt:Routes= [ 
    { path: 'Intro', component: IntroComponent },
    { path: 'Home', component: HomepageComponent },
    { path: 'About', component: AboutComponent },  
    { path: 'Services', component: ServicesComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Education', component: EducationComponent },
    { path: 'Failed', component: FailedComponent },
    {path: '', redirectTo: '/Intro', pathMatch: 'full'},
    { path: '**', component: IntroComponent },
]