import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public micondition: boolean = true;

  @HostListener('window:scroll') scrolling() {
    console.log('scrolling');
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.micondition = false;
    } else this.micondition = true;
  }
  constructor() { }

  ngOnInit(): void {



  }

}
