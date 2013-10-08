// Kurz-Einführung in JavaScript

// Variablen, Typen, Literale

var richtig = 192 > 42;
var alphabetisch = "Angeln" < "Segeln";
var gleich = "Magnus" == "Maria";
var nonsense = a || b && c == d != e;
!( a && b ) <=> !a || !b
    a  b  resultat
!   t     f
    f     t
||  f f   f
    t f   t
    t t   t
    f t   t 

!"" --> true
var allesFalsch = 0 == "" == null == undefined == NaN;
var exakterVergleich = 5 === "5";
var exaktUngleich = "Neun" !== 9;

var nix_drin = undefined;
var keinWert = null;

var a;
-- undefined
a = null;
-- null

10 / 0 + 7
10 / "drei"
-- NaN