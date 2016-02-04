var dogData = document.getElementById("dog");
dog.addEventListener("click", function() {
	
	var dogFoodVisible = document.getElementById("dog-container");
		dogFoodVisible.classList.add("visible");
		dogFoodVisible.classList.remove("hidden");
	
	var catFoodVisible = document.getElementById("cat-container");
		catFoodVisible.classList.add("hidden");
		catFoodVisible.classList.remove("visible")
});

var catData = document.getElementById("cat");
cat.addEventListener("click", function() {
	
	var catFoodVisible = document.getElementById("cat-container");
		catFoodVisible.classList.add("visible");
		catFoodVisible.classList.remove("hidden");
	
	var dogFoodVisible = document.getElementById("dog-container");
		dogFoodVisible.classList.add("hidden");
		dogFoodVisible.classList.remove("visible")
});