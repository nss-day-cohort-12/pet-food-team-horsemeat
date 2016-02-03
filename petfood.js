



var data = JSON.parse(this.responseText);

var contentEL = document.getElementById("dogFood")

var dogFood = "";
var currentDog;

for var i = 0, i<dogFood.length; i++) {
	currentDog = data.dogFood[i];

	dogFood += "<div>";
		dogFood+=`<h1>${currentDog.title}</h1>`; 
		dogFood+="<div class= name> Name: ";
		dogFood+= currentDog.name;
		dogFood+="</div>";
		dogFood+="<div class= type> Type: ";
		dogFood+= currentDog.type;
		dogFood+="</div>";
		dogFood+="<div class= size> Size: ";
		dogFood+= currentDog.size;
		dogFood+="</div>";
		dogFood+="<div class= price> Price: ";
		dogFood+= currentDog.name;
		dogFood+="</div>";
		dogFood+="</div>";
}

	console.log("dogFood", dogFood);

	contentEL.innerHTML = dogFood;
		
var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.open("GET", "dog.json");
myRequest.send();
		



