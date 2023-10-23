import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

user = {
  email:'',
  password:''
}

constructor(private auth: AuthService){}

ngOnInit(): void {  
}

login(){
  console.log('login');
  console.log(this.user.email);
  console.log(this.user.password);


  if(this.user.email == '' ){
    alert('Por favor ingrese su correo');
    return;
  }

  if(this.user.password == '' ){
    alert('Por favor ingrese su contraseña');
    return;
  }
  this.auth.login(this.user.email, this.user.password);
  this.user.email = '';
  this.user.password = '';
}

}
