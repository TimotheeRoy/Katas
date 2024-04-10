function incrementString(strng) {
    const match = strng.match(/^([a-zA-Z]*)(\d*)$/);

    if (!match) {
        console.log('no match')
        return strng;
    }

    const [, lettrePart, chiffrePart] = match;
    let nouveauChiffre = "";
    
    if (chiffrePart === "") {
        nouveauChiffre = "1";
    } else {
        nouveauChiffre = (parseInt(chiffrePart) + 1)
        .toString()
        .padStart(chiffrePart.length, "0");
    }
    console.log("incrementString , lettrePart:", lettrePart)
    console.log("incrementString , nouveauChiffre:", nouveauChiffre)
    
    return lettrePart + nouveauChiffre;
}

console.log(incrementString("foo99"))