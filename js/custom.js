$(document).ready(function(){
	console.log("Ready...");
	var i;
	var cities = {
			30301:"atlanta",
			73301:"austin",
			02108:"boston",
			60290:"chicago",
			75201:"dallas",
			80123:"denver",
			48201:"detroit",
			77001:"houston",
			89101:"lasvegas",
			90001:"losangeles",
			33101:"miami",
			55401:"minneapolis",
			10001:"newyork",
			92799:"orangecounty",
			19019:"philadelphia",
			85001:"phoenix",
			97201:"portland",
			27601:"raleigh",
			94203:"sacramento",
			92093:"sandiego",
			98101:"seattle",
			94101:"sfbay",
			20001:"washingtondc"
	}

	// Processing form
	$('#search_form').submit(function() {
		var location = $("#location").val();
		for (var key in cities) {
			if(key == location){
				location = cities[key];
			}
        }
		var search_string = $("#search_string").val();
		var min_price = $("#minAsk8").val();
		var max_price = $("#maxAsk8").val();
		var min_year = $("#minYear8").val();
		var max_year = $("#maxYear8").val();
		console.log("Location:"+location+"\n Search:"+search_string+"\n Min price:"+min_price+"\n Max price"+max_price
		+"\n Min year:"+min_year+"\n Max year:"+max_year+"\n"
		);
		return false;
	});
	
	
});