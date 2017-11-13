import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ContactService} from '../../services/contact-service.service'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:string; 
  name:string; 
  note:string; 
  emailResponse:any; 
  constructor(private contentService: ContactService) { 
    
  }

  ngOnInit() {
    this.email = "testing@test.com"; 
    this.name = "Teddy";
    this.note = "Input Note Here";
  }

  sendEmail(){
  var response = this.contentService.sendEmail(this.email, this.name, this.note);
  response.subscribe(
    res => this.emailResponse = res.text()
  )
  }
}
