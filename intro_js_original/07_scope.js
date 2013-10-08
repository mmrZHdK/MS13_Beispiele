// Kurz-Einführung in JavaScript

// Scope ( no scope except function scope )

var wert = "global";
function machwas() {
  var wert = "lokal";
  alert( wert );
}
alert( wert );

var wert = "global";
function normal() {
  var wert = "lokal";
  function innen() {
    var wert = "doppel" + wert;
    print( wert );
  }
  print( wert );
  innen();
}

var tuEs = machWas; // ohne ()
tuEs();

