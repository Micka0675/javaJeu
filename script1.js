var table = 0;
var mult = 0;
var total = 0;
	
for(table = 1 ; table <= 10 ; table++)
{
	mult = 1;
	document.write("<hr>")
	
	for(mult = 1 ; mult <= 10 ; mult++)
	{
		total = table * mult ; 
		document.write( table + " * " + mult + " = " + total ) ; 
		document.write("<br>")
	}
	
}

