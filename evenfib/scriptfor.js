function evenfib() {

	
	var currentFibNumber = 2;
	var preceedingFibNumber =1;
	var z = 1;
	var total = 0;

while(currentFibNumber<4000000){
	
	if (currentFibNumber % 2 ==0){
		total += currentFibNumber;
}
	z = currentFibNumber;
	currentFibNumber += preceedingFibNumber; //cn=3 pn=1
	preceedingFibNumber = z;
	
}

	return total;

}

document.getElementById("result").innerHTML = evenfib();
