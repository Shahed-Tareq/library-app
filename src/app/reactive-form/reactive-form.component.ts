import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
emailFrm:FormGroup;
  constructor(FB: FormBuilder) { 
// Builder: 
    // this.emailFrm= FB.group({
    // email:['', [  Validators.required , Validators.email]]
    
    // })
  this.emailFrm = new FormGroup(
    {
    email:new FormControl('',[Validators.required ,
       Validators.email ,
       Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}")])
    ,  userName: new FormControl('',
    [Validators.required ,
       Validators.maxLength(10),Validators.minLength(5) ,Validators.pattern("[A-Za-z0-9 \s]{5,10}")
      ])})
  }
    

  ngOnInit(): void {
  }
  onFormSubmit(){
console.log(this.emailFrm.controls['email'].errors)
console.log(this.emailFrm.get('email')?.value)
this.email?.setValue('test@gmail.com')
  }
  get email(){
   return this.emailFrm.get('email')
  }
  get name(){
    return this.emailFrm.get('userName');
   }
}
