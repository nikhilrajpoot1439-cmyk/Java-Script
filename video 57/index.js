console.log("I am the king of Nepal in my dream")

let a=8;
for (let i = 0; i < 10; i++) {
    console.log(a+i)
    
}
let obj = {
    name : "Nikhil",
    role : "Begineer Code",
    company: "SNAPS Tech Company"
    
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
    
    const element = obj[key];
    console.log(element)
    }
    
}