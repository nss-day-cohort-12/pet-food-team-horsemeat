

function executeThisCodeAfterFileIsLoaded () {

var data = JSON.parse(this.responseText);
console.log("data", data);

var contentEL = document.getElementById("dogFood")
console.log("contentEL", contentEL);

var dogFood = "";
var currentDog;

for (var i = 0; i < data.dog_brands.length; i++) {
	currentDog = data.dog_brands[i];
	for (var j = 0; j < data.dog_brands.length; j++) {
	currentType = data.dog_brands[j];
	for (var k = 0; k < data.dog_brands.length; k++) {
	currentType = data.dog_brands[k];


	
	// currentVolume = data.volumes[i];

	dogFood += '<div class="col-md-6">';
		dogFood+=`<h1>${currentDog.name}</h1>`; 
		dogFood+='<div class= "type"> Type: ';
		dogFood+= `${currentDog.types[j].type}`;
		dogFood+='</div>';
		dogFood+='<div class= "size"> Size: ';
		dogFood+= `${currentDog.types[j].volumes[k].size}`;
		dogFood+='</div>';
		dogFood+='<div class= "price"> Price: ';
		dogFood+= `${currentDog.types[j].volumes[k].price}`;
		dogFood+='</div>';
		dogFood+='</div>';
	
}

	console.log(dogFood);
	contentEL.innerHTML = dogFood;
}
}
}	
var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.open("GET", "dog.json");
myRequest.send();
		



