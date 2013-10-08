// Kurz-Einführung in JavaScript

// Kontrollstrukturen

while ( expression ) {
  statement;
}
while ( zaehler < 10 ) {
  zaehler++;
}

var spass = 100;
while ( spass < 666 ) {
  spass /= 1.5;
  spass = spass / 1.5;
}

for ( init; compare; step ) { statement(s) }
for ( var index = 0; index < text.length; index++ ) {
  mit_sternchen += "*" + text[ index ] + "*";
}

var index = 0;
while ( index < text.length ) {
  index++;
  mit_sternchen += "*" + text[ index ] + "*";
  if ( !weihnachten ) {
    index += 5;
  }
}
