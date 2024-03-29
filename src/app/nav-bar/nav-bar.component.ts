import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
 }

  scroll = (): void => {

   let scrollHeigth;
   document.body.style.setProperty('--navbar-scroll-text', "#6c0606");
   if(window.innerWidth < 350){
    scrollHeigth = 150;
   }else if(window.innerWidth < 500 && window.innerWidth > 350){
    scrollHeigth = 250;
   }else if(window.innerWidth < 700 && window.innerWidth > 500){
    scrollHeigth = 350;
   }else if(window.innerWidth < 1000 && window.innerWidth > 700){
    scrollHeigth = 500;
   }else{
     scrollHeigth = 650;
   }

    if(window.scrollY >= scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "rgba(107,6,6,0.9)");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
    }else if(window.scrollY < scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
    }
  

  }
}