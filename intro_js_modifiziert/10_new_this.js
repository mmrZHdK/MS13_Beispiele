// Kurz-Einführung in JavaScript

// This und New

function machHoeflichePerson() {
  return {
    name: 'Ohne Name',
    alter: 0,
    vorstellen: function () {
      print( "Guten Tag, ich bin " + this.name );
    }
  };
}
var einstein = machHoeflichePerson();
einstein.name = "Einstein";
einstein.vorstellen();

function HoeflichePerson( in_name ) {
  this.name = in_name;
  this.alter = 0;
  this.vorstellen = function () {
    print( "Guten Tag, ich bin " + this.name );
  };
}
var einstein = new HoeflichePerson( "Herr Einstein" );
einstein.vorstellen();

// ACHTUNG! NUR FÜR DEMO!
var einstein = ({}).HoeflichePerson( "Herr Einstein" );

