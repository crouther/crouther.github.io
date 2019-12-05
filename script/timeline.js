/**
* 	Timeline (Web Component)
*
*	Javascript Object (JSON) datasets leveraged to populate 
*	a vertically expanding timeline.
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/

function Timeline(event, target){

	for(t = 0; t < event.milestone.length; t++){

		//Milestone Variable Components
		var container = document.createElement("div");
		var content = document.createElement("div");

		var h3 = document.createElement("h3");
		var p = document.createElement("p");

		//Milestone Variable Styles
		content.setAttribute("class", "tlContent");

		if( t > 0 && t % 2 == 1)	// if odd (position right)
			container.setAttribute("class", "tlContainer tlRight");
		else
			container.setAttribute("class", "tlContainer tlLeft");
		
		h3.innerHTML = event.milestone[t].date;
		p.innerHTML = event.milestone[t].brief;

		content.appendChild(h3);

		//Builds Anchor if a link is given for waypoint
		if(event.milestone[t].link != null){

			var a = document.createElement("a");
			a.setAttribute("href", (event.milestone[t].link.toString()) );

			a.appendChild(p);
			content.appendChild(a);
		
		}
		else{ content.appendChild(p); }

		container.appendChild(content);
		document.getElementById( (target.toString()) ).appendChild(container);
	}
}




/*******************************  DOCUMENTATION  *******************************


Timeline(event, target)


Parameters -

event:
	The json object or JavaScript array imported, parsed or passed possessing
	timeline milestones and details regarding each waypoint.

target:
	The id tag name for a div found in the html source file for appending each
	additional waypoint and detail box to the timeline

	<div class="timeline" id = "target">


Function Output -

	The target div appends child elements which resemble the code -

	  <div class="container left">
	    <div class="content">
	      <h2>2017</h2>
	      <p>Lorem ipsum..</p>
	    </div>
	  </div>

	  or

	  <div class="container right">
	    <div class="content">
	      <h2>2016</h2>
	      <p>Lorem ipsum..</p>
	    </div>
	  </div>


Pre-requisites -

	Include the following scripts and files (with modified paths) and function 
	calls to activate the Timeline component.


	At the beginning of your HTML file:

	<link rel="stylesheet" type="text/css" href="../w3-timeline.css">

	<script src="../YOURDATA.js"></script>

	At the end of your HTML file:

	<script src="../timeline.js"></script>
	<script type="text/javascript">Timeline(YOURJSON,"w3-timeline")</script>


Tips -

	To avoid styling overlap, it is best to included the timeline component 
	in an encapsulated iFrame. This will allow the CSS' universal styling to be 
	uninterrupted. or simply remove/transplant the * and body css properties.


*******************************************************************************/