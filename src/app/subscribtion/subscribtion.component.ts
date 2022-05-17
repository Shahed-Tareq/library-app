import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.css']
})
export class SubscribtionComponent implements OnInit {
email = "shahed@gmial.com"
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(emailForm:NgForm){
       console.log(emailForm)
       console.log(emailForm.controls['email'].errors)

       
  }
  // emailForm.controls['email'].setErrors({'pattern':true});  

}
