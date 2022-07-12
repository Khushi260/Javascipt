/*length of string */

var nameofuser = "Khushi";
nameofuser.length;

/*creating a alert like twitter */
var tweet = prompt("Write a tweet");
var tweetcharcount = tweet.length;
alert("You have written " + tweetcharcount +" characters, you have "+ tweetcharcount-140 + " characters left.");

/* slice function */
tweetunder140=tweet.slice(0,140);
alert("tweetunder140");






/*string casing challenge*/

/*create a variable that stores the name entered by the user*/
var yourname = prompt("Please enter your name");

/*Capitalize first letter of their name */

//a isolate the first character
var firstchar = yourname.slice(0,1);

//b turn the first character to uppercase
var uppercaseFirstchar = firstchar.toUpperCase();

//c isolate the rest of the name
var restofName = yourname.slice(1,yourname.length);

//d concatenate 1st char with rest of char 
var captilalisedname = uppercaseFirstchar + restofName;

// use capitalize version of their name to greet them
alert("Hello, " + captilalisedname);

