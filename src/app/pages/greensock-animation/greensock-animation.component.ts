import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-greensock-animation',
  templateUrl: './greensock-animation.component.html',
  styleUrls: ['./greensock-animation.component.scss']
})
export class GreensockAnimationComponent implements OnInit {

  constructor() { }
  items = [
    'move', 'bounce', 'rotate', 'scroll'];
  selectedItem = this.items[0];

  ngOnInit(): void {
  }

  action(item) {
    console.log(item);
    switch (item) {
      case 'move':
        this.moveLeft();
        break;
      case 'bounce':
        this.moveAndBounce();
        break;
      case 'rotate':
        this.rotate();
        break;
      case 'scroll':
        this.scroll();
    }
  }
  moveLeft() {
    gsap.to('.img', {
      duration: 2, x: -600,
    });
  }



  scroll() {
    const windowWrap = gsap.utils.wrap(0, window.innerWidth);
    gsap.to('.img', {
      duration: 30, x: 10000, y: 80, modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
      }
    });
  }

  moveAndBounce() {
    gsap.to('.img', {
      duration: 2, x: 600, y: 80, backgroundColor: '#42a653', ease: 'bounce.out'
    });
  }

  rotate() {
    gsap.to('.img', {
      duration: 2, rotation: 360, onUpdate: () => {
      }
    });

    // gsap.set('.img', { transformOrigin: "50%" });
    // gsap.to(obj, {
    //   duration: 2, rotation: 360
    // });


  }
}
