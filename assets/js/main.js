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
  alert(
    'Simon Says by Andrea Di Cataldi ©\n\nLo scopo del gioco è memorizzare i 5 numeri iniziali.\nDopo 30 secondi ti verrà richiesto di inserire tutti i numeri che ti ricordi uno alla volta.\nBuona fortuna!'
  );
  alert("Questi sono i numeri che dovrai ricordare: " + rndNumbers);
  //Dopo 30 secondi l'utente deve inserire un prompt alla volta, i numeri che ha visto precedentemente
  // VERSIONE SET TIMEOUT
  /* setTimeout(function () {
    ask5Times();
    //Una volta inseriti i numeri, il software dice quanti e quali numeri sono stati ricordati
    alert(
      "Hai ricordato " +
        userNumbers.length +
        " numeri.\nI numeri che ti sei ricordato sono: " +
        userNumbers
    );
  }, 30000); */
  var seconds = 30;
  // VERSIONE SET INTERVAL CON COUNTDOWN GRAFICO
  var interval = setInterval(function () {
    document.getElementById("secondi").innerHTML = seconds;
    if (seconds === 0) {
      ask5Times();
      //Una volta inseriti i numeri, il software dice quanti e quali numeri sono stati ricordati
      alert(
        "Hai ricordato " +
          userNumbers.length +
          " numeri.\nI numeri che ti sei ricordato sono: " +
          userNumbers
      );
      clearInterval(interval);
    } else {
      seconds--;
    }
  }, 1000);
});
