import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {
  
  showComponent:boolean = false
  element: Element = document.createElement('div')
  options: IntersectionObserverInit | undefined;
  
  ngAfterContentInit(): void {
    this.getElement()
  }

  getElement() {
    this.element = document.querySelector("#about") || this.element
    this.lazyLoading()
  }

  lazyLoading() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entrie => {
        if (entrie.isIntersecting) {
          this.showComponent = true
          observer.unobserve(this.element)
        }
      })
    }, this.options)
    observer.observe(this.element)
  }

}
