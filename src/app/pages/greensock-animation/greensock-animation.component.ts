import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TimelineMax, Linear } from 'gsap';
declare var $: any;

import { Router } from '@angular/router';
gsap.registerPlugin(ScrollToPlugin);
@Component({
  selector: 'app-greensock-animation',
  templateUrl: './greensock-animation.component.html',
  styleUrls: ['./greensock-animation.component.scss']
})
export class GreensockAnimationComponent implements OnInit {

  items = [
    'move', 'bounce', 'rotate', 'scroll', 'scrollToPlugin', 'news Scroll'];
  selectedItem = this.items[0];
  infinite;
  Items = ['This is list item1', 'This is list item2', 'This is list item3', 'This is list item4', 'This is list item5'];
  constructor(private router: Router) { }
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
        break;
      case 'news Scroll':
        this.liveNews();
        break;
    }
  }



  liveNews() {

    $(document).ready(() => {
      const $tickerWrapper = $('.tickerwrapper');
      const $list = $tickerWrapper.find('ul.list');
      const $clonedList = $list.clone();
      let listWidth = 10;

      $list.find('li').each(function (i) {
        listWidth += $(this, i).outerWidth(true);
      });

      // const endPos = $tickerWrapper.width() - listWidth;

      $list.add($clonedList).css({
        width: listWidth + 'px'
      });

      $clonedList.addClass('cloned').appendTo($tickerWrapper);

      //TimelineMax
      const infinite = new TimelineMax({ repeat: -1, paused: true });
      const time = 10;

      infinite
        .fromTo($list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
        .fromTo($clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
        .set($list, { force3D: true, rotation: 0.01, x: listWidth })
        .to($clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
        .to($list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
        .progress(1).progress(0)
        .play();

      $tickerWrapper.on('mouseenter', () => {
        infinite.pause();
      }).on('mouseleave', () => {
        infinite.play();
      });

    });
  }


  NavigateToCharts() {
    this.router.navigate(['/charts']);
  }

  scrollToPlugin() {
    const homeIntro = gsap.timeline();
    homeIntro
      .to(window,
        {
          duration: 2,
          ease: 'back',
          scrollTo: { y: ".Section2", offsetY: 70 }
        });
  }

  moveLeft() {
    gsap.to('.img', {
      duration: 2, x: -600,
    });
  }

  switch() {
    this.router.navigate(['./charts']);
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
