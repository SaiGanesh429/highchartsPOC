import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkTime();
    // setInterval(this.checkTime, 5000);
  }

  checkTime() {
    const n = new Date().getHours();
    if (n > 15 || n < 6) {
      document.getElementsByClassName("main")[0].classList.remove("day");
      document.getElementsByClassName("main")[0].classList.add("day");
    }
    else {
      document.getElementsByClassName("main")[0].classList.remove("day");
      document.getElementsByClassName("main")[0].classList.add("day");
    }
  }
}
