//using arrays and include 

var guestlist = ["aku","kuku","pigga", "midori", "kimochi", "lamba"];
var guestname = prompt("Please enter your name");

if (guestlist.includes(guestname)){
    alert("Welcome!");
}
else{
    alert("May be next time!");
}
