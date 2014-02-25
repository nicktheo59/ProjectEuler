function multiples() {

	var x = 1;
	var fives = 0;
	while (x < 200){

		fives += (x*5);
		x++;
	}

	var y = 1;
	var threes = 0;
	while (y <= 333){

		threes += (y*3);
		y++;

	}

	var z = 1;
	var fifteens = 0;
	while (z < 67){

		fifteens += (z*15);
		z++;

	}


	return threes + fives - fifteens;

}

document.getElementById("result").innerHTML = multiples();
