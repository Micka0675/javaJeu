var i = parseInt(prompt("Entrez un nombre (0 pour quitter)"));
var compteur = 1;
var som = 0;

// prompt("Entrez un nombre (0 pour quitter)");
while ( i != 0 )
{
  som = som + i;
  var i = parseInt(prompt("Entrez un nombre (0 pour quitter)"));
}

alert("La somme est " + som);
