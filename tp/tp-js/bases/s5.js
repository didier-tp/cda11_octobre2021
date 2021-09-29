var objP1 = {
    prenom : 'alain',
    nom : "Therieur",
    age : 34 ,
    adresse : {
        rue : "12 rue Elle",
        codePostal : 75001,
        ville : "Paris"
    },
    fou : false
};

let p1Json = JSON.stringify(objP1);
console.log("p1Json="+p1Json);
//======
let cloneDeP1 = JSON.parse(p1Json);
console.log("codePostal="+cloneDeP1.adresse.codePostal);