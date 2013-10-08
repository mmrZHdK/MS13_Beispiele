// Kurz-Einführung in JavaScript

// Prototype Objekt

s = "Hallo Welt";
print( s );

s.rueckwaerts();
// FEHLER!!

String.prototype.rueckwaerts = function () {
  var resultat = "";
  for ( var index = this.length - 1; index >= 0; index-- ) {
    resultat += this[ i ];
  }
  return resultat;
}
print( s.rueckwaerts() );
// --> tleW ollaH

function HoeflichePerson( in_name ) {
  this.name = in_name;
  this.alter = 0;
}
var einstein = new HoeflichePerson( "Herr Einstein" );
var zweistein = new HoeflichePerson( "Frau Zweistein" );
var dreistein = new HoeflichePerson( "Frau Dreistein" );

HoeflichePerson.prototype.vorstellen = function () {
  print( "Guten Tag, ich bin " + this.name );
}
einstein.vorstellen();
zweistein.vorstellen();
dreistein.vorstellen();

