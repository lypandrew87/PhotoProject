import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    
      }
    

  ngOnInit() {
  }

}


