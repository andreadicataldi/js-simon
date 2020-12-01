$(function () {
  // Array di 5 numeri generati casualmente
  var rndNumbers = [];
  // Array dei numeri indovinati dall'utente
  var userNumbers = [];
  // Numero inserito dall'utente
  var remember;
  // Funzione per generare 5 numeri casuali univoci da 1 a 10
  function rndNumbersGenerator() {
    while (rndNumbers.length < 5) {
      var i = Math.floor(Math.random() * 10) + 1;
      if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
    }
  }
  // Funzione per chiedere 5 volte il numero all'utente
  function ask5Times() {
    for (let i = 0; i < 5; i++) {
      remember = Number(prompt("Inserisci un numero che ti ricordi"));
      if (rndNumbers.includes(remember)) {
        userNumbers.push(remember);
      }
    }
  }
  // Invoco funzione per generare numeri
  rndNumbersGenerator();
  // Un alert espone 5 numeri casuali diversi
  alert("Questi sono i numeri che dovrai ricordare: " + rndNumbers);
  //Dopo 30 secondi l'utente deve inserire un prompt alla volta, i numeri che ha visto precedentemente
  setTimeout(function () {
    ask5Times();
    //Una volta inseriti i numeri, il software dice quanti e quali numeri sono stati ricordati
    alert(
      "Hai ricordato " +
        userNumbers.length +
        " numeri.\nI numeri che ti sei ricordato sono: " +
        userNumbers
    );
  }, 30000);
});
