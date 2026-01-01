// union

let height:number|string="5.8 inch"

console.log(height);

let apiRequest:'pending'|'success'|'error'

apiRequest='pending'

console.log(apiRequest);


let orders=['20','30','40']

let currentOrder:string|undefined

for (const order of orders) {
    if (order==='20') {
        currentOrder=order
        break
    }
}

console.log(currentOrder);