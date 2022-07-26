//uisng loop

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var a =[0];
    
    if (n==1){
        
        a = [0];
    }
    else if (n==2){
        a = [0,1];
    }
   else{
       a = [0,1];
       for (var i = a.length; i<n; i++){
           
           a.push(a[a.length-2]+a[a.length-1]);
       }
   }
   return a;
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
