import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $:any; 


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent implements OnInit {


  ngOnInit() {


    $(window).scroll(function(){
      var wScroll = $(this).scrollTop(); 
      
      
      $('.image').css({
        'transform': 'translate(0px, -'+ wScroll/100+'%)'
      }); 
        }); 
      }

      
}
