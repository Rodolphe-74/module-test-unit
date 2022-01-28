// Implement the sum function here
export function numberToText(n) {
    if (n.toString().length === 1) {
        return conversionLettre1a9(n)
    }
    else if (n.toString().length === 2) {
        return deuxChiffres(n)
    }

    else if (n.toString().length === 3) {
        let deuxDerniersChiffres = deuxChiffres(parseInt(n.toString().slice(1,3)))
        let chiffreCentaine = conversionLettreCentaine(parseInt(n.toString().slice(0,1)))
        return chiffreCentaine.concat(' ',deuxDerniersChiffres)
    }
}

function deuxChiffres(n){
    let premierChiffre = parseInt(n.toString().slice(0,1))
    let deuxiemeChiffre = parseInt(n.toString().slice(1,2))
    if(n>9 && n<17){
        return conversionLettre10a16(n)
    }
    else{
        let chiffreUnite = conversionLettre1a9(deuxiemeChiffre)
        let chiffreDizaine = conversionLettreDizaine(premierChiffre)
        if(deuxiemeChiffre === 0){
            return conversionLettreDizaine(premierChiffre)
        }
        if((premierChiffre === 7 || premierChiffre === 9) && (deuxiemeChiffre >= 0 && deuxiemeChiffre < 7) ){
            chiffreUnite = conversionLettre10a16(deuxiemeChiffre+10)
            chiffreDizaine = conversionLettreDizaine(premierChiffre-1)
        }
        return chiffreDizaine.concat(' ',chiffreUnite)
    }
}

function conversionLettre1a9(chiffre) {
    let lettre;
    switch (chiffre) {
        case 1:
            lettre = "un";
            break;
        case 2:
            lettre = "deux";
            break;
        case 3:
            lettre = "trois";
            break;
        case 4:
            lettre = "quatre";
            break;
        case 5:
            lettre = "cinq";
            break;
        case 6:
            lettre = "six";
            break;
        case 7:
            lettre = "sept";
            break;
        case 8:
            lettre = "huit";
            break;
        case 9:
            lettre = "neuf";
            break;
    }
    return lettre
}

function conversionLettre10a16(chiffre) {
    let lettre;
    switch (chiffre) {
        case 10:
            lettre = "dix";
            break;
        case 11:
            lettre = "onze";
            break;
        case 12:
            lettre = "douze";
            break;
        case 13:
            lettre = "treize";
            break;
        case 14:
            lettre = "quatorze";
            break;
        case 15:
            lettre = "quinze";
            break;
        case 16:
            lettre = "seize";
            break;
    }
    return lettre
}

function conversionLettreDizaine(chiffre) {
    let lettre;
    switch (chiffre) {
        case 1:
            lettre = "dix";
            break;
        case 2:
            lettre = "vingt";
            break;
        case 3:
            lettre = "trente";
            break;
        case 4:
            lettre = "quarante";
            break;
        case 5:
            lettre = "cinquante";
            break;
        case 6:
            lettre = "soixante";
            break;
        case 7:
            lettre = "soixante dix";
            break;
        case 8:
            lettre = "quatre vingt";
            break;
        case 9:
            lettre = "quatre vingt dix";
            break;
    }
    return lettre
}

function conversionLettreCentaine(chiffre) {
    let lettre;
    switch (chiffre) {
        case 1:
            lettre = "cent";
            break;
        case 2:
            lettre = "deux cent";
            break;
        case 3:
            lettre = "trois cent";
            break;
        case 4:
            lettre = "quatre cent";
            break;
        case 5:
            lettre = "cinq cent";
            break;
        case 6:
            lettre = "six cent";
            break;
        case 7:
            lettre = "sept cent";
            break;
        case 8:
            lettre = "huit cent";
            break;
        case 9:
            lettre = "neuf cent";
            break;
    }
    return lettre
}