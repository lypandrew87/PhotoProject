import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class ContactService {

  constructor(private http: Http) {
   }

  sendEmail(email, name, note){
    var Indata = {email, name, note}; 
  return this.http.post("http://localhost:3000/email",Indata); 
 }

 }



