$(document).ready(function(){
	console.log("Ready...");
	var i;
	var cities = [
			"atlanta",
			"austin",
			"boston",
			"chicago",
			"dallas",
			"denver",
			"detroit",
			"houston",
			"lasvegas",
			"losangeles",
			"miami",
			"minneapolis",
			"newyork",
			"orangecounty",
			"philadelphia",
			"phoenix",
			"portland",
			"raleigh",
			"sacramento",
			"sandiego",
			"seattle",
			"sfbay",
			"washingtondc"
		]
	for(i=0;i<cities.length;i++){
		//console.log(cities[i]);
	}
	// Processing form
	$('#search_form').submit(function() {
		var location = $("#location").val();
		var search_string = $("#search_string").val();
		var min_price = $("#minAsk8").val();
		var max_price = $("#maxAsk8").val();
		var min_year = $("#minYear8").val();
		var max_year = $("#maxYear8").val();
		console.log("Location:"+location+"<br> Search:"+search_string+"<br> Min price:"+min_price+"<br> Max price"+max_price
		+"<br> Min year:"+min_year+"<br> Max year:"+max_year+"<br>"
		);
	});
	
	
});