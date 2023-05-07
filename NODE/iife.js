
//IIFE -- immediately invoked function expression   , provides module scope
//syntax   (function(){})();

(function(){
    const superhero = "batsman";
    console.log(superhero);
})();

(function(){
    const superhero = "superman";
    console.log(superhero);
})();

//output:
//PS C:\Users\COMP\HTML-CSS\NODE> node iife
//batsman
//superman

//passing parametes to function in iife
(function(message){
    const superhero = "batsman";
    console.log(message, superhero);
})('Hello');

(function(message){
    const superhero = "superman";
    console.log(message, superhero);
})('Hi');

//Hello batsman
//Hi superman