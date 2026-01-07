let response:any='43';

let stringLength:number=(response as string).length

console.log(stringLength);

// json parse object

type User={
    name:string
}

let userData='{"name":"ratul"}'

let userObject=JSON.parse(userData) as User

userObject.name // access name easyly 