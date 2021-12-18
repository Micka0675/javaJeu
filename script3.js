var i = prompt("Entrez un nombre");
var rep = 1992;

while (i != rep)
{
	if (i < 1000)
	{
		alert("c'est graaaave plus t'es un ouf! Pff t'es nul a chier!");
	}
	else
	{
		if (i < 1992)
		{
			alert("c'est un peu plus, t'es vraiment naze!");
		}
		else
		{
			if (i > 2500)
			{
				alert("c'est graaaave moins t'es un ouf! Toujours dans l'exces comme d'hab'!");
			}
			else
			{
				alert("c'est un peu moins! Fais un effort bordel!");
			}
		}
	}
	var i = prompt("Entrez un nombre");
}
		
document.write("Bravo! le nombre etait 1992!")
