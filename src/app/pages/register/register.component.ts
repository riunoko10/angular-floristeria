import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

email : string ='';
password : string ='';
repassword : string ='';

constructor(private auth: AuthService) { }

ngOnInit() {
  }


  registrar(){


    if(this.email == '' ){
      alert('Por favor ingrese su correo');
      return;
    }
  
    if(this.password == '' ){
      alert('Por favor ingrese su contraseña');
      return;
    }

    if(this.repassword != this.password ){
      alert('Las contraseñas no coinciden');
      return;
    }
    this.auth.regiter(this.email, this.password);
    this.email = '';
    this.password = '';
  }

} 



