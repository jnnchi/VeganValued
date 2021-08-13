// Function that creates the map
function initMap()
{
	var options=
	{
		zoom: 9,
		center: {lat: 26.132171978945507, lng: -80.13757135767017} // Centers on South Florida
	}
	var map = new google.maps.Map(document.getElementById('map'), options);

	// Function to add markers to map
	function addMarker(props)
		{
			var marker= new google.maps.Marker
			({
				position: props.coords,
				map: map,
				icon: 'images/store.png'
			});

			// Check content
			if(props.content)
			{
				var infoWindow= new google.maps.InfoWindow
				({
					content: props.content
				});

				marker.addListener('click', function()
				{
				infoWindow.open(map, marker);
				});
			}

		}

	// Creates array of ethnic stores to be marked on the map
	var stores = [{coords:{lat: 26.161399854632002, lng: -80.28572522613747},
		    content: "<h1>New York Mart</h1><h3>The New York Mart is an authentic Asian market with mostly Chinese grocery items available. Stop by here to pick up your favorite fresh fruits, vegetables, and snacks!</h3>"},
		{coords:{lat: 26.191474574773913, lng: -80.25133805634368},
		    content: "<h1>Oriental Mart</h1><h3>The Oriental Mart is a Korean-owned grocery store with tons of fresh vegetables, snacks, ice cream, and sometimes fresh, jumbo-sized rice cakes!</h3>"},
		{coords:{lat: 26.642063827533754, lng: -80.11136967991304},
		    content: "<h1>New India Bazaar</h1><h3>This is an Indian Grocery Store with great customer service, low prices, and tons of locally-sourced produce. They also have many Middle Eastern ingredients!</h3>"},
		{coords:{lat: 26.51414869298604, lng: -80.08113687365459},
		    content: "<h1>Asian World Market</h1><h3>This market is one of the best Asian markets in Boynton Beach, with its wide selection of sauces, spices, and exotic produce. The store is always clean and well-stocked, so stop by for some inexpensive ethnic groceries!</h3>"},
		{coords:{lat: 26.23172288167427, lng: -80.20465150265395},
		    content: "<h1>Bourda Market</h1><h3>This family-owned market specializes in Guyanese food. It has great prices and high-quality fresh vegetables!</h3>"},
		{coords:{lat: 26.253605670249407, lng: -80.20220179361753},
		    content: "<h1>Quoc Thach Deli and Grocery</h1><h3>Quoc Thach is a Vietnamese grocery store with lots of authentic Chinese and Vietnamese goods. Their selection includes, noodles, spices, canned/dried fruit, vegetables, soups, sauces, teas, and more!</h3>"},
		{coords:{lat: 26.172458111989087, lng: -80.26274658458112},
		    content: "<h1>Apna Bazaar</h1><h3>Apna is a great source for Middle Eastern & Indian groceries, drinks, fresh produce, and more!</h3>"},
		{coords:{lat: 25.824659286756592, lng: -80.19142823401218},
		    content: "<h1>Bravo Supermarket</h1><h3>This supermarket consists of high-quality, well-priced Caribbean and Latin American produce and snacks! There are multiple locations in South Florida, so it’ll be a convenient find wherever you are!</h3>"},
		{coords:{lat: 25.828524038826085, lng: -80.20023254381091},
		    content: "<h1>Zubi Supermarket</h1><h3>This Hatian grocery store provides reliable products at an affordable price, with great fresh food, a convenient venue, and even a selection of Asian products too!</h3>"},
		{coords:{lat: 25.92901556500128, lng: -80.19557654565614},
		    content: "<h1>Caribbean Best Market</h1><h3>This Caribbean grocery and spices store has amazing prices and very fresh products. Stop by to pick up rare Caribbean snacks and food!</h3>"}];

	// Loops through the array of markers and adds them to the map
	for(var i=0; i < stores.length; i++)
	{
		addMarker(stores[i])
	}
	return map;
}

// Opens pages when user clicks the tabs
function openPage(pageName, elmnt)
{
  // Hides all elements of the class "tabcontent"
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
  {
    tabcontent[i].style.display = "none";
  }

  // Shows the tab content
  document.getElementById(pageName).style.display = "block";
}

// Gets the element with id="defaultOpen" and click it automatically when the website is opened
document.getElementById("defaultOpen").click();