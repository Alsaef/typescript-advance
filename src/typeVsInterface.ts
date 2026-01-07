// interface মূলত object-এর structure define করার জন্য ব্যবহার হয় এবং এটি extends ও declaration merging সাপোর্ট করে, তাই বড় ও scalable প্রোজেক্টে বেশি উপযোগী।

// type বেশি flexible; এটি object ছাড়াও union, tuple, primitive alias ইত্যাদি define করতে পারে, তবে declaration merging সাপোর্ট করে না।


interface User{
    name:string
}

interface User {
  age: number;
}

interface Admin extends User {
    role:string
}




// type nothing use large application
type User2 = {
  name: string;
};

// show in error
// type User2={
//     age:number
// }

type Admin2 = User2 & {
  role: string;
};