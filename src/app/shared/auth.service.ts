import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

//login method
login(email: string, password: string) {
  return this.fireauth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/products']);
      }, err => {
        console.log(err.message);
        alert("Error al iniciar sesión");
        this.router.navigate(['/login']);
      
      }
    );
  }


//register method
regiter(email: string, password: string) {
  this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
    alert("Usuario creado con éxito");
    this.router.navigate(['/login']);
  }, err =>{
    console.log(err.message);
    alert("Error al iniciar sesión");
    this.router.navigate(['/register']);
  }
  )
}

logout(){
  this.fireauth.signOut().then( () => {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }, err => {
    alert(err.message)
  } );
}

}
