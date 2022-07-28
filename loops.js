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


// for of loop

let obj = { kuku : 98,
           midori : 98,
           kimochi : 89,
           lamba : 79,
           pigga : 60, anshika : 100
          }

for ( a  in obj ) {
    console.log("Marks of" +  a + "are " + obj [a]);
}

// for of loop

for ( let  b of "Harry" ){
    console.log(b);
}
