let response:any='43';

let stringLength:number=(response as string).length

console.log(stringLength);

// json parse object

type User={
    name:string
}

let userData='{"name":"ratul"}'

let userObject=JSON.parse(userData) as User

console.log(userObject.name); // access name easyly 

let value:unknown='hello';

value=[1,2,3,4,5,6];
value=3.5;
value='99';

if (value==='string') {
    value.toUpperCase()
}


// normal type handel
try {
    
} catch (error:any) {
    console.log(error.message);
}


// type gard

try {
    
} catch (error) {
    if (error instanceof Error) {
        
        console.log(error.message); 
    }
}

// force fully type data
let data:unknown='ratul'

let name:string=data as string