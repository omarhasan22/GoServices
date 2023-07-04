import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
postId:number=0;
myContact : contactInfo= new contactInfo();
  constructor(private apiCaller:HttpClient){}
  ngOnInit() {
  
  }
  postData(){
   
    this.apiCaller.post<any>(
      'http://localhost:3000/contactUs',
       this.myContact
       )
    //    .subscribe(data => {
    //     this.postId = data.id;
    //  })
      console.log(this.myContact);
  }
}

class contactInfo {
name:string="";
email:string="";
subject:string="";
msg:string="";
}