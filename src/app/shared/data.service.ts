import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Products } from '../model/products';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore ) { 
    
  }


  // add product
  addProduct(product: Products){
    const productRef = collection(this.firestore, 'products')
    return addDoc(productRef, product)
  }

  // get products
  getProducts(){
    const productRef = collection(this.firestore, 'products');
    collectionData(productRef).subscribe(products => {
      console.log(products)
      // return products;
    
    })
  }

}
