/**
* 	Timeline (Web Component)
*
*	Javascript Object (JSON) datasets leveraged to populate 
*	a vertically expanding timeline.
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/

function Timeline(point, target){

	for(t = 0; t < point.milestone.length; t++){

		//console.log(t);
		var container = document.createElement("div");

		if( t > 0 && t % 2 == 1){
			container.setAttribute("class", "container right");
		}
		else{container.setAttribute("class", "container left");}

		var content = document.createElement("div");
		content.setAttribute("class", "content");

		var h2 = document.createElement("h2");
		var p = document.createElement("p");

		h2.innerHTML = point.milestone[t].date;
		p.innerHTML = point.milestone[t].brief;

		content.appendChild(h2);

		if(point.milestone[t].link != null){

			var a = document.createElement("a");
			a.setAttribute("href", ( point.milestone[t].link.toString() ) );
			a.appendChild(p);
			content.appendChild(a);
		
		}

		else{content.appendChild(p);}

		container.appendChild(content);

		document.getElementById( ( target.toString() ) ).appendChild(container);
	}
}