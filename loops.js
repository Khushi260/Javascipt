//For loop

for(let i=0; i<5; i++){
    console.log("Hello");
}

//program to add first n natural numbers

let sum =0;
let n = prompt("Enter value of n");
n = Number.parseInt(n)

for( let i=1; i<n; i++){
    sum = sum + i;
}

console.log("Sum of first" + n + " natural numbers is " + sum);
