

//strings 

let firstname="Ankitha";
let lastname="rao";
// console.log(firstname * 10)  //concatetenation it will throw nan error 

console.log(firstname.toUpperCase())
console.log(lastname.toLowerCase())

console.log(firstname.replace('harsh',"harshini")) //replece harsh to harshini

console.log(firstname[0])//output:h

console.log(firstname.substring(0,4))

let fruits=['apple','banana','cherry','orange','litchi','papaya']
fruits.push('pinapple') //adds pineapple at the end
fruits.pop(); //pops pinepple from end
fruits.shift() //removes from front
console.log(fruits.map((fruit)=>fruit!='banana'))
fruits=fruits.filter((fruit)=>fruit!='banana') //delete banana
// fruits=fruits.filter((fruit)=>fruit ='banana')
console.log(fruits)
console.log(fruits.map((fruit)=>fruit!='banana'))
console.log(fruits)




