//using random number generation


prompt("What is your name?");
prompt("What is their name?");

var lovescore = Math.random()*100;
lovescore = Math.floor(lovescore)+1;

alert("Your lovescore is " + lovescore+"% .");

//using conditional statements

if (lovescore>=70){
    alert("Your lovescore is " + lovescore + "% .  You both love each other like Kanye loves Kanye.");
}
else if(lovescore>49){
      alert("Your lovescore is " + lovescore + "% . You love them more.");
}

else{
    alert("Your lovescore is " + lovescore+"% .");
}
