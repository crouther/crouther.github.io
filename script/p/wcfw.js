/**
* 	Framework (Web Components)
*
*	A collection of support function to dynamically populate and manipulate
*	various page specific web components. Review frameworks.html
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/



// Global Variables
var parent = true;
var parentName = "";
var parentIndex = 0;


/* Page Content Population Functions and Support functions */

// Makes Full Roster of all Framework Items
function Roster(listOf){

	// The Return array created listOf parameter
	var arr = [];

	// Loop through main items
	for ( e = 0; e < listOf.obj.length; e++ ) {
		arr.push(listOf.obj[e]);

		// Loop through any child items
		if ( listOf.obj[e]['children'] != null ) {

			for ( f = 0; f < listOf.obj[e]['children'].length; f++ ) {
				arr.push(listOf.obj[e]['children'][f])
			} 
		}
	}
	return arr;
}


// Toggle Text or Tile View of Web Component Object Selction in componentList 
function hideBank(){document.getElementById("txtBank").style.display = "none";}
function showBank(){document.getElementById("txtBank").style.display = "block";}
function hideTile(){document.getElementById("imgGrid").style.display = "none";}
function showTile(){document.getElementById("imgGrid").style.display = "block";}

// Checks initial Hash Tag value to set conponentList Viewer List styling
function defaultView(){
	if (window.location.hash.substring(0, 5).localeCompare("#tile") == 0) 
		{ hideBank();	showTile(); }
	else{ showBank();	hideTile(); }
	
}(defaultView()) // onLoad: Auto Magically Run Function


// Populates Component List Field and Image Grid
function populateComponentList(listOf){

	for (index = 0; index < listOf.obj.length; index++) {

		var li = document.createElement("li");
		li.setAttribute("class", "wctbLink");

		li.innerHTML = listOf.obj[index].title;

		var col = document.createElement("div");
		col.setAttribute("class", "column igI");

		var img = document.createElement("img");
		img.src = listOf.obj[index].image;

		col.appendChild(img);

		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);

	}

}(populateComponentList(exampleWBCP)) // onLoad: Populate Component List Field

// Starts the children funciton to populate Component List Field and Image Grid
function updateWithChildren(listOf, key){
	parentName = listOf.obj[key].title;

	// Confirms child nodes exist and populates list with them
	if (listOf.obj[key]['children'].length > 0) 
		children(listOf.obj[key]['children']);

	else{console.log(parentName + " has no children"); parent =  true;}
}

// Populates Component List Field and Image Grid with children
function children(listOf){

	removeContent();
	document.getElementById("objTitle").innerHTML = "<span class=\"flashingTxt\"><</span>  Children / Support: ";

	// Creates, updates and styles each link or node in child list from parent item
	for (index = 0; index < listOf.length; index++) {

		// Creates List Items
		var li = document.createElement("li");
		var liStr = "wctbLink " + "parentIs" + listOf[index].parent;

		li.setAttribute("class", liStr);
		li.innerHTML = listOf[index].title;

		// Creates Image Grid Items
		var col = document.createElement("div");
		var img = document.createElement("img");

		colStr = "column igI " + "parentIs" + listOf[index].parent;
		col.setAttribute("class", colStr);
		img.src = listOf[index].image;

		// Adds content to respective containers on page
		col.appendChild(img);
		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);
	}

	parent = false;
	choiceListener();
}

// Initiates populateComponentList() if no content is available 
function addContent(){
	if(!document.getElementById("imgGrid").hasChildNodes()){
		removeContent();	populateComponentList(exampleWBCP);
		document.getElementById("objTitle").innerHTML = "Component List";
	}
}

// Clears componentList for new content
function removeContent(){
	var bank = document.getElementById("txtBank");
	while (bank.firstChild) { bank.removeChild(bank.firstChild); }

	var grid = document.getElementById("imgGrid");
	while (grid.firstChild) { grid.removeChild(grid.firstChild); }

	parent = true;
}



/* Sort:
* Sort and Sort Support Functions
*
* Multi fuction call to populate children, return array list of items 
* and choose item order based on sort key phrase */

// Changes Component List View to Sort Options
function startSort(){

	hideTile();		showBank();
	window.location.hash = "";

	var arr = ["title", "type", "parent", "line"];
	document.getElementById("objTitle").innerHTML = "<span class=\"flashingTxt\"><</span>  By: ";

	removeContent();

	for (b = 0; b < 4; b++){

		var sortLi = document.createElement("li");
		sortLi.setAttribute("class", "wctbLink sort");

		sortLi.innerHTML = arr[b].toUpperCase();

		document.getElementById("txtBank").appendChild(sortLi);
	}
	sort();
}

// Update Page based on user sort preferences
function sort(){

	// Specific to Sort Text in Component List
	let sortList = document.querySelectorAll("li.sort");

	// Event Listener for each sort choice to populate viewer with content
	sortList.forEach(function(elem) {
	    elem.addEventListener("click", function() {
	    	children(bubbleSort(Roster(exampleWBCP), elem.innerHTML.toLowerCase())); 
	    });
	});
}

// Organizes list based on sort variables (line, title, etc.)
function bubbleSort(arr, category){
	var list = arr;

	for (g = 0; g < list.length; g++){
		for (h = 0; h < list.length - g - 1; h++){

			if (list[h][category] > list[h + 1][category]){

				var temp = list[h]; 
                list[h] = list[h + 1]; 
                arr[h + 1] = temp; 
			}
		}
	}
	return list;
}



/* Search ::
*  A collection of sequential search and support functions */

// Find keywords or user input that matches component briefs
function search(){

	// Variable declaration
	var input, keyword, ul, liList, c, liTxt;

	input = document.getElementById("searchField");
	keyword = input.value.toUpperCase();

	ul = document.getElementById("txtBank");
	liList = ul.getElementsByTagName("li");

	imgG = document.getElementById("imgGrid");
	imgList = imgG.getElementsByTagName("div");

	// Loops through liList array and compares string contained with keyword
	for (i = 0; i < liList.length; i++) {
		liTxt = liList[i].textContent || liList[i].innerText;

		if (liTxt.toUpperCase().indexOf(keyword) > -1){ 
			liList[i].style.display = ""; 
			if (imgList[i] != null) imgList[i].style.display = ""; 
		}

    	else { 
    		liList[i].style.display = "none"; 
    		if (imgList[i] != null) imgList[i].style.display = "none"; 
    	}
    }
}

// Toggle Search Field Visibility with Hide / Show Search Bar functions
function toggleSearchBar(){
	if (document.getElementById("searchBar").style.display == "none") 
		showSearchBar();
	else { hideSearchBar(); }
}

function hideSearchBar(){
	document.getElementById("searchBar").style.display = "none"; }

function showSearchBar(){
	document.getElementById("searchBar").style.display = "block"; }



/* Activity listerner ::
*  A collection of event listeners and support functions */

// Component List Selection Listener; populates viewer with example
function choiceListener(){

	//Initiate iFrame Content
	var doc = document.getElementById("vTarget").contentWindow.document;
	doc.open();
	doc.write('<!DOCTYPE html><head><link rel="stylesheet" type="text/css" href="https://myles.works/css/AvantFlat.css"></head><body></body></html>');
	doc.close();

	// Specific to text Component List
	let imgGridList = document.querySelectorAll("div.igI");

	// Event Listener for each image to populate viewer with content
	imgGridList.forEach(function(elem) {
	    elem.addEventListener("click", function() {

	    	doc.body.innerHTML ="<style type=\"text/css\">#vTarget > img{width: 100%; padding: 5%; height: auto;}</style><div id=\"vTarget\">" + elem.innerHTML + "</div>";
	    });
	});

	// Specific to Image Grid Component List
	let txtBankList = document.querySelectorAll("li");

	// Event Listener for each text brief to populate viewer with example
	txtBankList.forEach(function(elem) {
	    elem.addEventListener("click", function() {

	    	// Resets Parent Boolen to based off selected list item
	    	try{
		    	if (exampleWBCP.obj[findIndex(exampleWBCP, elem.innerHTML)].title.toUpperCase() == 
		    		exampleWBCP.obj[findIndex(exampleWBCP, elem.innerHTML)].parent.toUpperCase() )
		    		parent = true;
		    }
		    catch(error){

		    	parent = false;
		    	var list = Roster(exampleWBCP);

		    	// Finds Selected Item from Full Roster
		    	for(j = 0; j < list.length; j++){

		    		// Compares roster and item titles, retrieves parent name
		    		if (list[j].title == elem.innerHTML)
		    			parentName = list[j].parent;
		    	}

		    	// Finds Parent of Selected Item or set's to 0
		    	try{ parentIndex = findIndex(exampleWBCP, parentName); }
		    	catch(error){ parentIndex = 0;}
		    }

	    	let index;
	    	if (parent) {

	    		// Finds elem index in list (symetrical to json / js aray)
	    		index = findIndex(exampleWBCP, elem.innerHTML);
				parentIndex = index;

				//Checks for children, updates iFrame with Parent content
				updateWithChildren(exampleWBCP, index);
				doc.body.innerHTML = getEx(exampleWBCP, index);
	    	}

	    	else{

	    		//Finds Index of current node in children list
	    		var i = 0;
	    		var child = elem;
				while( (child = child.previousSibling) != null ) { i++; }

				//Updates iFrame with child node example content
		    	doc.body.innerHTML = exampleWBCP.obj[parentIndex].children[i].ex;
	    	}	
	    });
	});
} (choiceListener()) // onLoad: Listen for user specific choice

//Get the Example text of a dataset item given array and item index
function getEx(listOf, index) { return listOf.obj[index].ex; }

//Get the item index given the name of the dataset and keyword / item title
function findIndex(listOf, key){
	for(d = 0; d < listOf.obj.length; d++){
		if (listOf.obj[d].title.toUpperCase().indexOf(key.toUpperCase()) > -1)
			return d;
	}
}


//Mobile Content Switcher
function Toggle(){

	//Evaluates Top Container
	if (document.getElementById("viewer").style.zIndex 
		> document.getElementById("componentList").style.zIndex) {

		//Swaps Layers
		document.getElementById("viewer").style.zIndex = "0";
		document.getElementById("componentList").style.zIndex = "100";
	}

	else{
		//Inverted Layer Swaps
		document.getElementById("viewer").style.zIndex = "100";
		document.getElementById("componentList").style.zIndex = "0";
	}
}