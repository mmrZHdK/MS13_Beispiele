// Kurz-Einführung in JavaScript

// Konstruktoren, Objekte mit Methoden

function machPerson() {
  return {
    name: 'Ohne Name',
    alter: 0
  };
}
var leererMensch = machPerson();
vorstellen( leererMensch );

function machHoeflichePerson() {
  var person = {
    name: 'Ohne Name',
    alter: 0
  };
  person.vorstellen = function () {
    print( "Guten Tag, ich bin " + name );
  }
  return person;
}

var einstein = machHoeflichePerson();
einstein.name = "Herr Einstein";
einstein.vorstellen();

var stress = machHoeflichePerson();
stress.name = "Stress";
stress.vorstellen = function () {
  print( "Hej! *#()§&, ich bin " + name );  // name ?!?!
}
stress.vorstellen();

