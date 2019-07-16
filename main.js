window.addEventListener("load", init);

// Globals

// Poziomy
const levels = {
  easy: 6,
  medium: 4,
  hard: 2
};

// Zmiana poziomu
const currentLevel = levels.easy;
// const level = document.querySelectorAll("a.level");

// function pickLevel() {
//   for (i = 0; i < level.length; i++) {
//     level[i].addEventListener("click", function() {
//       if (level[i].innerHTML == "Łatwy") {
//         currentLevel = levels.easy;
//       } else if (level[i].innerHTML == "Średni") {
//         currentLevel = levels.medium;
//       } else if (level[i].innerHTML == "Trudny") {
//         currentLevel = levels.hard;
//       }
//     });
//   }
// }

let time = currentLevel;
let score = 0;
let isPlaying;

// Elementy DOM
const wordInput = document.getElementById("word-input"),
  currentWord = document.getElementById("current-word"),
  scoreDisplay = document.getElementById("score"),
  timeDisplay = document.getElementById("time"),
  message = document.getElementById("message"),
  seconds = document.getElementById("seconds");

const words = [
  "apostazja",
  "leniwiec",
  "katharsis",
  "majówka",
  "konstatacja",
  "europejskość",
  "kasacja",
  "morświny",
  "awokado",
  "bielizna",
  "blachodachówka",
  "biurowiec",
  "cytrynian",
  "czekany",
  "caryca",
  "delfinarium",
  "drogowskazy",
  "delikatesy",
  "drewutnia",
  "elaborat",
  "elektorat",
  "elektroenergetyka",
  "figlarz",
  "flanela",
  "fajtłapa",
  "aktorzyna",
  "guacamole",
  "granulat",
  "geopolityka",
  "hortensja",
  "herbatka",
  "hipochondryczka",
  "iluminacja",
  "igrzyska",
  "introwertyk",
  "jajecznica",
  "jarmark",
  "jezdnia",
  "kolendra",
  "ladacznica",
  "laicyzator",
  "lądolód",
  "łupieżca",
  "łaknienie",
  "łobuzerstwo",
  "łojotok",
  "mięsiwo",
  "margrabia",
  "mitochondrium",
  "należność",
  "natchnienie",
  "nuworyszostwo",
  "osteoporoza",
  "okropność",
  "okaleczenie",
  "pleonazm",
  "parsknięcie",
  "plombowanie",
  "retuszer",
  "rabarbar",
  "ryzykantka",
  "statystyka",
  "strychnina",
  "sadomasochista",
  "trofeum",
  "tabernakulum",
  "telepajęczarstwo",
  "ubezdźwięcznienie",
  "ubezwłasnowolnienie",
  "wagarowiczka",
  "warstewkowanie",
  "wariantowość",
  "yachting",
  "yakuza",
  "ypsylon",
  "zastępczyni",
  "zabezpieczenie",
  "zmiennokształtność",
  "źdźbło",
  "źrebięciarnia",
  "źródłosłów",
  "żaglomistrz",
  "żeromszczyzna",
  "żłobkowanie"
];

//Rozpocznij grę
function init() {
  // pickLevel();
  // Pokaż właściwą liczbę sekund w UI
  seconds.innerHTML = currentLevel;
  //   załaduj słowo z tablicy
  showWord(words);
  //   Rozpocznij porównywanie na inpucie
  wordInput.addEventListener("input", startMatch);
  //   Odliczanie co sekundę
  setInterval(countdown, 1000);
  //   Sprawdź status gry
  setInterval(checkStatus, 100);
}

// Rozpocznij prównywanie
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  //   Jeśli wynik to -1 pokaż 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Prównaj currentWord z wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Brawo!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Wybierz i pokaż losowe słowo
function showWord(words) {
  // Wygeneruj losowy indeks z tablicy
  const randIndex = Math.floor(Math.random() * words.length);
  //   Wyrzuć randomowe słowo
  currentWord.innerHTML = words[randIndex];
}

// Odliczanie
function countdown() {
  // Upewnij się, że czas się nie skończył
  if (time > 0) {
    // Zmniejszaj czas o sekundę
    time--;
  } else if (time === 0) {
    // Koniec gry
    isPlaying = false;
  }
  //   Pokaż czas
  timeDisplay.innerHTML = time;
}

// Sprawdź status gry
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "GAME OVER";
    score = -1;
  }
}
