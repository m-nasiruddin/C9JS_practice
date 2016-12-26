var batwing = { // it's a object (structure) defined by { and }
	status: "Ready", // member-1 of this object (seperated by a comma): it's a property (variable)
	rescueBatman: function() { // member-2 of this object (defined as an anonymous function): it's a method named "rescueBatman"
		document.write("Locating his transponder ... initiating launch ...");
	}
}
/* if (batwing.status === "Ready") {
	batwing.rescueBatman();
} */
var utilities = {
	printAllMembers: function(targetObject) {
		for (i in targetObject) {
			document.write("<br />" + targetObject[i]);
		}
	}
}
// utilities.printAllMembers(batwing);
/* var i_am_empty = { };
utilities.printAllMembers(i_am_empty); */
var planet = {
	id: 34,
	name: "Imtempesta Nox",
	faction: {
		factionId: 2,
		name: "Nex",
		notification: function() {
			document.write("Nex alliance ... unite!");
		}
	},
	cities: [
		{ locationId: 15, name: "Gladius" }
		{ locationId: 16, name: "Chalybs" },
		{ locationId: 17, name: "Ensis" }
	]
}
