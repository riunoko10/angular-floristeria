import { Component, OnInit } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  isOpen = false;

  clients: any[] = [];

  client = {
    name: '',
    last_name: '',
    email: '',
    edad: ''
  }
  
  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.apiService.getDataClient().subscribe(data => {
      this.clients = data;
    })
  }


  addClient(){
    const product = {
      name: this.client.name,
      last_name: this.client.last_name,
      email: this.client.email,
      edad: parseInt(this.client.edad)
    }
    console.log(product)
    this.apiService.addClient(product).subscribe(res => {
      console.log('Cliente agregado Correctamente!')
      this.getData();
    });
    this.client.name = '';
    this.client.last_name = '';
    this.client.email = '';
    this.client.email = '';
  
  }



}
