let u  = "hello";
// Math.round(u); will I get an error?

let v: any = "hello";
Math.round(v); // why is there no error?

let names: string[] = []; 
names.push("Adwaith"); // what if i don't want to be able to modify this array?


let students: readonly string[] = ["Evangeline"];
// students.push("YunWei"); 

console.log(typeof(u)); // what type will this give me?

let instructor: readonly [string, number, boolean] = ["Brenda", 20, true] // why should I make it radonly (typesafety)

// how can i make the above more descriptive?

let teacher: readonly [name: string];

const student: {name: string, is_present: boolean, age: number} = {
    ,
    ,
    ,
}

// student.name = 2;

// IN CLASS ACTIVITY HERE:
