

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

	dogFood += "<div>";
		dogFood+=`<h1>${currentDog.name}</h1>`; 
		dogFood+="<div class= type> Type: ";
		dogFood+= `${currentDog.types[j].type}`;
		dogFood+="</div>";
		dogFood+="<div class= size> Size: ";
		dogFood+= `${currentDog.types[j].volumes[k].size}`;
		dogFood+="</div>";
		dogFood+="<div class= price> Price: ";
		dogFood+= `${currentDog.types[j].volumes[k].price}`;
		dogFood+="</div>";
		dogFood+="</div>";
	
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
		

function ShowCatFood () {

var catData = JSON.parse(this.responseText);
console.log("catData", catData);

var catFoodEl = document.getElementById("catFood")
console.log("catFoodEl", catFoodEl);

var catFood = "";
var currentCat;
var currentTypes = catData.cat_brands.types;

for (var i = 0; i < catData.cat_brands.length; i++) {
    currentCat = catData.cat_brands[i];
    for (var j = 0; j < catData.cat_brands[i].types.length; j++) {
    currentType = catData.cat_brands[j];
    for (var k = 0; k < catData.cat_brands[i].types[j].volumes.length; k++) {
    currentType = catData.cat_brands[k];


    
    // currentVolume = catData.volumes[i];

    catFood += "<div>";
        catFood+=`<h1>${currentCat.name}</h1>`; 
        catFood+="<div class= type> Type: ";
        catFood+= `${currentCat.types[j].type}`;
        catFood+="</div>";
        catFood+="<div class= size> Size: ";
        catFood+= `${currentCat.types[j].volumes[k].size}`;
        catFood+="</div>";
        catFood+="<div class= price> Price: ";
        catFood+= `${currentCat.types[j].volumes[k].price}`;
        catFood+="</div>";
        catFood+="</div>";
    
}

    console.log(catFood);
    catFoodEl.innerHTML = catFood;
}
}
}    
var myCatFoodRequest = new XMLHttpRequest();

myCatFoodRequest.addEventListener("load", ShowCatFood);
myCatFoodRequest.open("GET", "cat.json");
myCatFoodRequest.send();		



