
// very poor way
// code is duplicate
function products1(product:{name:string;price:number;stockStatus:boolean}) {
    console.log(product);
}


let product1:{
    name:string;
    price:number;
    stockStatus:boolean
}={
    name:'book',
    price:200,
    stockStatus:true
}
products1(product1);




interface Product  {
    name: string;
    price: number;
    stockStatus: boolean;
};


function products(product:Product) {
    console.log(product);
}


let product:Product={
    name:'book',
    price:200,
    stockStatus:true
}
products(product)