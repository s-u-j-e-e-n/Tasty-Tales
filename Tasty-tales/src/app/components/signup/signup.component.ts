import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
type:string="password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash";

signform:FormGroup;
constructor(private fb:FormBuilder){
  this.signform=this.fb.group({
    uname:["",Validators.required],
    pass:["",Validators.required],
    email:["",Validators.required]
  })
}


hideShowPass(){
 this.isText =!this.isText;
 this.isText ? this.eyeIcon ="fa-eye": this.eyeIcon="fa-eye-slash";
 this.isText ? this.type="text" : this.type="password";
}

}
