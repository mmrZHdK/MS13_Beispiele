// Kurz-Einführung in JavaScript

// Kontrollstrukturen

switch ( expression ) {
  case wertA:
    statements;
    break;
  case wertB:
    statements;
  case wertC:
  case wertD:
    statements;
    break;
  default:
    statements;
}

var a = 1;
switch ( a ) {
  case 1:
    print( "sehr" );
    break;
  case 6:
    // Vorsicht: da es hier kein "break"-Statement hat, wird auch der
    // nachfolgende Code für Case "10" ausgeführt!
    print( "kleine" );
  case 10:
    print( "Zahl");
    break;
  default: // Falls oben nichts zutrifft...
    print( "grosse Zahl" );
}

BREAK!! IS NORMAL!!!!