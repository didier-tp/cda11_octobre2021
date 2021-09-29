var a = 12; console.log("Type de a = " + typeof a);
var sB = "13"; console.log("Type de sB = " + typeof sB);
var b = Number(sB);
var c = a + b;
console.log("c = a + b = " + c);
var d;
console.log("d = " + d);
console.log("Type de d = " + typeof d);
if(c == "25") console.log("c vaut 25");
if(c === "25") 
    console.log("c vaut 25 et est de type string");
 else 
   console.log("c ne vaut pas 25 ou bien n'est pas de type string");

function addition(pa,pb){
   //console.log("type de pa=" + typeof pa);
   let r = Number(pa) + Number(pb);
   return r;
}   

var soustraction = function (pa,pb){
    return pa-pb;
}
/*
//fonction flèchée possible depuis version 2015 de javascript
var multiplication = (pa,pb) => {
    return pa-pb;
}
*/

var res2 = soustraction(7,3);
console.log("res2="+res2);
console.log("type de la variable soustraction= "+typeof soustraction);

//x=6; //possible (sans mot clef var) mais déconseillé
var x=6; //bien
console.log(x)

var res = addition(5,6);
console.log("res="+res);

res = addition("5","6");
console.log("res="+res);

var jour="mercredi"
console.log( (jour == "lundi" ) ? "Bon lundi" : "pas lundi" );

var age = prompt("votre age ?");