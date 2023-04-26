let yourName, yourLastName, yourFavoriteColor;

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

// scrivi ull'HTML

document.getElementById('your_password').innerHTML = yourName + yourLastName + yourFavoriteColor;