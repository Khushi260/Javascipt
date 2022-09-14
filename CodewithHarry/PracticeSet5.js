//chapter 5 practiceset 

//Q1 
let arr = [1,5,3,8,5,3]
let a = prompt("Enter a new number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)


//Q2
let arr = [1,5,3,8,5,3]
let a

do{
   a = prompt("Enter a new number")
a = Number.parseInt(a)
  arr.push(a)
  console.log(arr)
}while(a!=0)
  
  //Q3
  let arr = [1,5,3,8,5,3,10,20,40,30]
  let a = arr.filter((x)=>{
    return x%10==0
  })
  console.log(a)
  

//Q4
let arr = [1,6,4,9,3,5,0]
let a = arr.map((x)=>{
  return x*x
})
console.log(a)

//Q5
let arr = [1,2,3]
let a = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a)
