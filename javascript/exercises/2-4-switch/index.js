// crée une fonction appelé 'getDayString' qui prend en paramètre un nombre
// converti le nombre representant le jour de la semaine (1 à 7)
// utilise un switch
// exemple: 
//      entrée: 1
//      sortie: "lundi"
//
//      entrée: 2
//      sortie: "mardi"





















// FIN DE L'EXERCICE. NE PAS MODIFIER

import chalk from "chalk";

function check(variable, variableName, expectedValue) {

    checkVariableValue(variable, expectedValue) ?
        console.log(chalk.green(`✓ ${variableName}: ${expectedValue}.`)) :
        console.log(chalk.red(`✗ ${variableName}: reçu ${variable} expecté ${expectedValue}`));

}

function checkVariableValue(variable, value) {
    return variable == value;
}

console.log(chalk.blue("Check fonction 'getDayString'..."));
try {

    check(getDayString(0), "getDayString(0)", "lundi");
    check(getDayString(1), "getDayString(1)", "mardi");
    check(getDayString(2), "getDayString(2)", "mercredi");
    check(getDayString(3), "getDayString(3)", "jeudi");
    check(getDayString(4), "getDayString(4)", "vendredi");
    check(getDayString(5), "getDayString(5)", "samedi");
    check(getDayString(6), "getDayString(6)", "dimanche");
    console.log("");
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}