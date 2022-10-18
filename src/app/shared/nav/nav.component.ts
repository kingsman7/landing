import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  stickyClass: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 68) {
      this.stickyClass = true;
    } else {
      this.stickyClass = false;
    }
  }

}
