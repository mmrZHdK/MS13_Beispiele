// Kurz-Einführung in JavaScript

// Scope ( no scope except function scope )

var wert = "global";
function machWas() {
  var wert = "lokal";
  alert( wert );  // lokal
  return;
}
alert( wert );  // global
wert = machwas();


var wert = "global";
function normal() {
  var test = "lokal";
  print( wert );  // global
  function innen() {
    var wert = "doppel" + wert;
    print( wert );  // doppellokal
  }
  print( wert );  // lokal
  innen();  // doppellokal
  return [ 2, wert ];
}
var dieInnenFunktion = normal();
dieInnenFunktion();  // FEHLER!!!

var tuEs = machWas; // ohne ()
tuEs();

var person.toString() = makeObject( "{ name: { vorname: "Beat", nachname: "Suter" }, alter: 34 }" );

[ 2, 3, 6, 8, 9, 10.8 ]