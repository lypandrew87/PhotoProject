import { Component, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  styles: [`
  .star {
    position: relative;  
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: red;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: red;
  }
`],
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
