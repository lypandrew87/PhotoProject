import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

declare var $:any; 


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  
  ngOnInit() {
    
$('.image1').each(function(i){

  $(this).hover(function(){
    $( this).css('opacity', '0.6'); 
    $( this).find('.info').css('opacity', '1');    
    
    
  }, function(){
    $( this ).css('opacity', '1');   
    $( this).find('.info').css('color', 'black');      
    
  })


});    

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop(); 

      $('.image11').css({
        'transform': 'translate(0px, -'+ wScroll/100+'%)'
      }); 

      if(wScroll > $('.image1').offset().top) {
        
      $(".parallax").css("background-image", "url('../assets/carousel1.jpg')");
      
      }
      if(wScroll < $('.image1').offset().top) {
        
      $(".parallax").css("background-image", "url('../assets/carousel2.jpg')");
      
      }
  
      $( ".parallax" ).fadeTo( "slow" , 1, function() {}); 


      if(wScroll > $('.image1').offset().top - ($(window).height()/1.2)) {
          
        $('.image1').each(function(i){

          setTimeout(function(){
            $('.image1').eq(i).addClass('is-showing'); 
          }, 500 * (i+1)); 
          
        }
        )}; 
        });
      }}
