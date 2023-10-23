import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/model/products';
import { ApiService } from 'src/app/shared/api.service';
import { DataService } from 'src/app/shared/data.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
 
  
productList : Products[] = []
id: string = '';
name: string = '';
category: string = '';
descript: string = '';
price: string = '';


data: any[] = [];



constructor(private apiService: ApiService) { 
}

ngOnInit(): void {
  this.getData();
}

getData(){
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(data);
    this.productList = data;
  })
}

addProduct(){
  const product = {
    name: this.name,
    category: this.category,
    descript: this.descript,
    price: parseInt(this.price)
  }
  console.log(product)
  this.apiService.addProduct(product).subscribe(res => {
    console.log('Product added successfully!')
    this.getData();
  });
  this.id = '';
  this.name = '';
  this.category = '';
  this.descript = '';
  this.price = '';

}



}
