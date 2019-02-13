
//L'objectif est de transformer un nombre en chiffre en nombre écrit en lettres. L'utilisateur a juste à rentrer sa valeur en 
// chiffres et le navigateur lui traduit immédiatement en lettres.




// On créé trois tableaux qui vont stocker les unités, dizaines et centaines en lettres.
var unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"
    , "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
var dizaine = [" ", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
var centaine = [" ", "cent", "deux-cent", "trois-cent", "quatre-cent", "cinq-cent", "six-cent", "sept-cent", "huit-cent", "neuf-cent"];

// Cette variable sert à créer une fenêtre qui permet à l'utilisateur de rentrer son chiffre:
var nombre = prompt("Entrez votre nombre entre 0 et 999", "");
// Cette variable est un modulo 10. Il divise la valeur par 10 et on obtient le chiffre des unités.
var u = nombre % 10;
// Cette variable divise retire l'unité de la valeur en modulo 100 pour cibler le chiffre en centaines et divise par 
// 10 pour en obtenir le chiffre des dizaines.
var d = (nombre % 100 - u) / 10;
// Cette variable a le même objectif, mais pour obtenir le chiffre des centaines.
var c = (nombre - nombre % 100) / 100;



// Le cas de 0
if (nombre == 0) {
    document.getElementById("toto").innerHTML = ("vous avez bien dit zéro");

}
// Le cas des chiffres entre 1 et 9
else if (c == 0 && d == 0) {
    document.getElementById("toto").innerHTML = ("vous avez bien dit " + unite[nombre] + " ?");
}


// Les chiffres inférieurs à 100.
if (c == 0 && nombre > 0) {
    if (nombre > 10 && nombre < 20) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + unite[nombre - 1] + " ?");
    }
    // Le cas du quatre-vingts:
    else if (nombre == 80) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[8] + "s" + "?");
    }
    else if (u == 0) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[d] + "?");
    }
    // Les chiffres en et un:
    else if ((d == 2 || d == 3 || d == 4 || d == 5 || d == 6) && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[d] + " et " + unite[u] + "?");
    }
    // les 70 et 90:
    else if (d == 7 && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[d] + " et " + unite[10] + "?");
    }
    else if ((d == 7) && (u >= 1 && u <= 9)) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[6] + "-" + unite[u + 9] + "?");
    }
    else if (d == 9 && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[8] + "-" + unite[10] + "?");
    }
    else if ((d == 9) && (u >= 1 && u <= 9)) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[8] + "-" + unite[u + 9] + "?");
    }

    // Le cas général des dizaines:
    else {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + dizaine[d] + " " + unite[u] + "?");
    }

}

// Les nombres supérieurs à 100.
if (c > 0) {
    // Le cas de cent-quatre-vingts:
    if (d == 8 && u == 0) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + "-quatre-vingts" + "?");
    }
    // Le cas des centaines justes:        
    else if (c > 1 && d == 0 && u == 0) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + unite[c] + "-cents " + "?");
    }
    else if (c == 1 && d == 0 && u == 0) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + "cent " + "?");
    }
    // Le cas où la dizaine est égale à zéro:
    else if (d == 0 && u > 0) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit "+centaine[c]+"-" + unite[u] + "?");
    }
    // Le cas du cent de onze à dix-neuf:
    else if (d == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + "-" + unite[u + 9] + "?");
    }
    // Les nombres qui finissent en "et un":
    else if ((d == 2 || d == 3 || d == 4 || d == 5 || d == 6) && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[d] + " et " + unite[u] + "?");
    }
    // Les soixante-dix et quatre-vingt-dix:
    else if (d == 7 && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[d] + " et " + unite[10] + "?");
    }
    else if ((d == 7) && (u >= 1 && u <= 9)) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[6] + "-" + unite[u + 9] + "?");
    }
    else if (d == 9 && u == 1) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[8] + "-" + unite[10] + "?");
    }
    else if ((d == 9) && (u >= 1 && u <= 9)) {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[8] + "-" + unite[u + 9] + "?");
    }
    // Le cas général des centaines:
    else {
        document.getElementById("toto").innerHTML = ("vous avez bien dit " + centaine[c] + " " + dizaine[d] + "-" + unite[u] + "?");
    }

}




