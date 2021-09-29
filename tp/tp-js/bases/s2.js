function comparerEltTableau(e1,e2){
    /*
    if(e1>e2) return 1;
    if(e1<e2) return -1;
    if(e1==e2) return 0;
    */
   return e1-e2;
}

var tabVal = [12, 23, 5, 45, 7, 8];
//tabVal.sort(comparerEltTableau);
tabVal.sort(function (e1,e2) { return e1-e2});
//tabVal.sort((e1,e2)=>{ return e1-e2}); //possible depuis 2015
console.log("tabTrie=" + tabVal);


var s = 0;
/*
for(var i = 0 ; i < tabVal.length ; i++){
    s += tabVal[i];
}*/
for(let i in tabVal){
    //console.log("i="+i); //0,1,2,3,4,5
    s += tabVal[i];
}
console.log("somme = " + s);

var x=4;
var y=5;
var z = eval ("x+y");
console.log("z="+z);

var tab = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
//tab.push("samedi");
tab[5]="samedi";
//tab.push("dimanche"); 
tab[tab.length]="dimanche"; //en position 6
//rien en position 7 et 8
tab[9]="jourNouveau";

for(i = 0 ; i < tab.length ; i++)
    console.log("**" + tab[i]);
for(i in tab)
    console.log("##" + tab[i]);

var saisonsCouleurs = []; // Tableau associatif
    saisonsCouleurs["hiver"] = "blanc";
    saisonsCouleurs["printemps"] = "vert";
    saisonsCouleurs["ete"] = "jaune";
    saisonsCouleurs["automne"] = "marron";
    
for(clef in saisonsCouleurs){
        console.log(clef + " : " + saisonsCouleurs[clef]);
    }    

function Devise(code, nom, change){
        this.code = code;
        this.nom = nom;
        this.change = change;
        this.display = function(){
            console.log('[' + this.code + "] " 
                       + this.nom + " : " + this.change)
        }
    }    

var d1 = new Devise("EUR" , "euro" , 0.9);
console.log("nom = " + d1.nom);
console.log("nom = " + d1["nom"]);
d1.display();
d1.couleur="blanc";
console.log("couleur=" + d1.couleur);
//console.log("d1="+d1); //affiche [object Object]
console.log("d1="+ JSON.stringify(d1));

var d2 = new Devise();
console.log("d2.nom = " + d2.nom);

var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));
for(i in tabDevises){
   tabDevises[i].display();
}

var expression = "2*4+8";
var res = eval(expression); console.log(expression + " = " + res);

console.log("maintenant = " + (new Date()).toTimeString());
function actionDifferee() {
    console.log("plus tard = " + (new Date()).toTimeString());
}
var refAction = actionDifferee;
setTimeout(refAction,5000); // Déclenchement en différé de 5000ms

var devise1 = {
    code : "M1",
    nom : "Monnaie1",
    change : 0.9
};

devise1.change = devise1.change + 0.1; // 1.0
devise1["change"] = devise1["change"] + 0.1; // 1.1
console.log("devise1.change = " + devise1.change);
console.log("devise1 (JSON) = " + JSON.stringify(devise1));