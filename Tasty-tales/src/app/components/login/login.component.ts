import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

type:string="password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash";
//login:FormGroup;
login:FormGroup;

constructor(private fb:FormBuilder){

  this.login=this.fb.group(
    {
    uname:["",Validators.required],
    pass:["",Validators.required]
    }
  ) 
}
ngOnInit():void{
 
}




hideShowPass(){
 this.isText =!this.isText;
 this.isText ? this.eyeIcon ="fa-eye": this.eyeIcon="fa-eye-slash";
 this.isText ? this.type="text" : this.type="password";
}

}
