function factorialize(num) {
    var temp=1;

	if(num <= 1)
        return 1;
	temp = num * factorialize(num - 1);
	return temp;
}

factorialize(5);
