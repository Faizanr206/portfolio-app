import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  @ViewChild('store', { static: true }) uservalueElement: ElementRef;
  mystore: string = "";
  constructor(uservalueElement: ElementRef) {
    this.uservalueElement = uservalueElement;
  }
  ngOnInit(): void {
    this.mystore = this.uservalueElement.nativeElement.value;

  }

}
