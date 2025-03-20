/* VERSION CONSOLE

console.log("Jeu du nombre mystère !");
const nombreMystere = Math.floor(Math.random() * 100) + 1;
let essais = 0;
let proposition = Number(prompt("Devinez le nombre mystère !"));
while (proposition != nombreMystere)
{
	essais++;
	if (isNaN(proposition) || proposition < 1 || proposition > 100)
		proposition = Number(prompt("❌ Nombre invalide ! Entrez un nombre entre 1 et 100 :"));
	else if (proposition < nombreMystere)
		proposition = Number(prompt("⬆️ Trop bas ! Essayez encore :"));
	else if (proposition > nombreMystere)
		proposition = Number(prompt("⬇️ Trop haut ! Essayez encore :"));
}
console.log("🎉 Bravo ! Vous avez trouvé le nombre mystère en ${essais} essai(s) !");
 */