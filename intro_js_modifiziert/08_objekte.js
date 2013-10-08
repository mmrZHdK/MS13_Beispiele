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

