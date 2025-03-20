/* VERSION HTML */

let nombreMystere = Math.floor(Math.random() * 100) + 1;
let essais = 0;
const input = document.getElementById("guess")
const button = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");
let restartBtn = document.createElement('button');

restartBtn.textContent = "Relancer";

button.addEventListener("click", () => {
	proposition = Number(input.value);

	if (isNaN(proposition) || proposition < 1 || proposition > 100){
		feedback.textContent = "❌ Nombre invalide ! Entrez un nombre entre 1 et 100."
		feedback.style.color = "red";
		input.value = "";
		input.focus();
		return ;
	}
	essais++;
	attempts.textContent = essais;
	if (proposition < nombreMystere)
	{
		feedback.textContent = "⬆️ Trop bas ! Essayez encore."
		feedback.style.color = "orange";
	}
	else if (proposition > nombreMystere)
	{
		feedback.textContent = "⬇️ Trop haut ! Essayez encore."
		feedback.style.color = "orange";
	}
	else
	{
		feedback.textContent = `🎉 Bravo ! Vous avez trouvé le nombre mystère en ${essais} essai(s) !`
		feedback.style.color = "green";
		input.disabled = true;
		button.disabled = true;
		button.hidden = true;
		feedback.append(restartBtn);
	}
	input.value = "";
	input.focus();
});

restartBtn.addEventListener("click", () => {
	button.disabled = false;
	feedback.textContent = "";
	attempts.textContent = 0;
	input.disabled = false;
	essais = 0;
	button.hidden = false;
	restartBtn.remove()
	nombreMystere = Math.floor(Math.random() * 100) + 1;
})


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