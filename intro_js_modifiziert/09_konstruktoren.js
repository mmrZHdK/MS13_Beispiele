// Kurz-Einführung in JavaScript

// Konstruktoren, Objekte mit Methoden

function vorstellen( person ) {
  print( "Hej, ich bin " + person.name );
}

private function machPerson( in_name ) {
  var lokalerMensch = {
    name: in_name,
    alter: 0
  };
  return lokalerMensch;
}
var leererMensch = machPerson( "Ohne Name" );
vorstellen( leererMensch );
var zweiterMensch = machPerson( "Ramun" );
vorstellen( zweiterMensch );
vorstellen( leererMensch );



console.log( meinObjekt.name );
meinObjekt.neuesProperty = 5643;


var text = "Hallo";
text.reverse();



function MachHoeflichePerson( in_name ) {
  var person = {,
    name: in_name,
    alter: 0,
    vorstellen: function () {
      console.log( "Guten Tag, ich bin " + this.name );
    }
  };
  return person;
}

var einstein = MachHoeflichePerson( "Herr Einstein" );
einstein.vorstellen();  //---> Guten Tag, ich bin Herr Einstein
einstein.name = "Albert";
einstein.vorstellen();  //---> Guten Tag, ich bin Albert

var stress = MachHoeflichePerson( "Stress" );
stress.vorstellen();  //---> Guten Tag, ich bin Stress

stress.vorstellen = function () {
  console.log( "Hej! *#()§&, ich bin " + this.name );  // name ?!?!
}
stress.vorstellen();  //--->Hej! *#()§&, ich bin Stress


function Person( in_name ) {
  return {
    this.name: in_name,
    this.sagHallo: function() {
      this.name = "Neuer Name";
    }
  };
}


var antonieta = new Person( "Maria Antonieta ..." );

--- > { name: "Maria Antonieta ...",
        sagHallo: function () { /* die Funktion */ }
      }
      
antonieta.sagHallo();
--- > { name: "Neuer Name",
        sagHallo: function () { /* die Funktion */ }
      }





