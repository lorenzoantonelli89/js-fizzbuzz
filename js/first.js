// esercizio fizz Buzz
// ho preferito dichiarare le var con le relative opzioni nel for per non scrivere tutto in if ed else ed essere più dichiarativo come abbiamo fatto a lezione, ma so che avrei potuto inserire direttamente il valore delle 3 var elencate direttamente nei vari if ed else.

for (var i = 1; i <= 100; i++) {
  var fizz = i % 3 == 0 && i % 5 !== 0;
  var buzz = i % 5 == 0 && i % 3 !== 0;
  var fizzBuzz = i % 3 == 0 && i % 5 == 0;

  if (buzz) {
    console.log("BUZZ");
  }else if (fizz) {
    console.log("FIZZ");
  }else if (fizzBuzz) {
    console.log("FIZZBUZZ");
  }else {
    console.log(i);
  }
}
