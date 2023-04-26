let yourName, yourLastName, yourFavoriteColor, numberRandom;

// chiedi qual'e il tuo nome
yourName = prompt(
    "Qual'e il tuo nome?"
);

// chiedi qual'e il tuo cognome
yourLastName = prompt(
    "Qual'e il tuo cognome?"
);

// chiedi qual'e il tuo colore preferito
yourFavoriteColor = prompt(
    "Qual'e il tuo colore preferito?"
);


numberRandom = Math.floor((Math.random() * 99) + 10);
// scrivi ull'HTML

document.getElementById('your_password').innerHTML = yourName + yourLastName + yourFavoriteColor + numberRandom;