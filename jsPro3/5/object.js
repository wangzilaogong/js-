function displayInfo(args) {
	var output = "";
	if (typeof args.name == "string") {
		output + = "name :"+ args.name + "\n";
	}
	if (typeof args.age == "number") {
		output + = "age :" +args.age + "\n";
	}
	alert(output);
}

	displayInfo({
		name : "wk",
		age : 23
	});
	displayInfo({
		name: "adv"	
	});