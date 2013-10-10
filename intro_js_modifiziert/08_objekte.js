// Kurz-Einführung in JavaScript

// Objekte sind Property Lists

var miniObjektB = new Object();
var miniObjekt = {};

var mensch = { name: 'Willi', alter: 16 };
print( mensch.name vor );
print( mensch[ "name" ], mensch[ “alter” ] );

mensch.name = "Regula";
function vorstellen( person ) {
  print( "Hej, ich bin " + person.name );
}
vorstellen( mensch );

mensch.geschlecht = "weiblich";
mensch.alter = undefined;

var plz = 8620;
var visitenkarte = {
      name: {
          vorname: "Ramun",
          nachname: "Riklin"
      },
      alter: 29,
      adresse: {
          strasse: "Stegenstrasse",
          hausnummer: 3
      },
      sagHallo: function () {
        var plz = 8000;
        console.log( "Hallo ich bin " + plz );
      }
}
visitenkarte.sagHallo();  ---> 
plz = 9000;
visitenkarte.sagHallo(); ---> 
print( visitenkarte.alter ); ---> 29

var sagHallo = function () {
        
      }
      
      
      
var visitenkarte = {
      name: {
          vorname: "Ramun",
          nachname: "Riklin"
      },
      alter: 29,
      adresse: {
          strasse: "Stegenstrasse",
          hausnummer: 3,
          plz: 8620
      },
      sagHallo: function () {
        print( "Hallo ich bin " + this.adresse.plz );
      }
}
visitenkarte.adresse.plz = 8000;
visitenkarte.sagHallo();

var danielVisite = visitenkarte
