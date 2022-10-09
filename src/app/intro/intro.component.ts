import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      const target = document.querySelector('.name')
      setTimeout(() => {
        const text_items = document.querySelector('.tw')
      const writer = new Typewriter(text_items, {
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 80,
        typeColor: 'white'
      })
      
      writer
        .type('I\'m Web-Developer')
        .rest(500)
        .changeOps({ deleteSpeed: 80 })
        .remove(13)
        .type('Designer')
        .rest(500)
        .changeOps({ deleteSpeed: 80 })
        .remove(8)
        .type('Photographer')
        .rest(500)
        .changeOps({ deleteSpeed: 80 })
        .remove(12)
        .type('Ceo')
        .rest(500)
        .changeOps({ deleteSpeed: 80 })
        .clear()
        .start()
      }, 5000);
      

        const onetime = new Typewriter(target, {
          loop: false,
          typeColor: 'white'
        })
        
        onetime
          .type('Hi There')
          .rest(500)
          .changeOps({ deleteSpeed: 80 })
          .remove(8)
          .type('I\'m Faizan')
          .rest(5)
          .start()
    }

}
