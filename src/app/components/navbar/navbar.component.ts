import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // define properties
  private logoText: string;

  constructor() {
    // set properties
    this.logoText = 'Firebase Authentication';
  }

  ngOnInit() {

  }
}