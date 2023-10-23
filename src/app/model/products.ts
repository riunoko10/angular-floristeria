export interface Products {

    id : string,
    name : string,
    category: string,
    descript: string,
    price : number,

}


export interface CreateProduct extends Omit<Products, 'id' >{

}