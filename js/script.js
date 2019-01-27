	//Slider
	var slideIndex = 1;
	showImage(slideIndex);
	function plusIndex(n){
		"use strict";
		showImage(slideIndex += n);
	}
	
	function currentSlide(n){
		"use strict";
		showImage(slideIndex = n);
	}
			
	function showImage(n){
		"use strict";
		var slide = document.getElementsByClassName("slides");
		var dots = document.getElementsByClassName("dots");
		if(n>slide.length){
			slideIndex = 1;
		}
		if(n<1){
			slideIndex = slide.length;
		}
		for(var i = 0; i < slide.length; i++){
			slide[i].style.display = "none";
		}
		slide[slideIndex-1].style.display = "block";
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(" active","");
			}
		dots[slideIndex-1].className += " active";
	}
	
	function carousel() {
		"use strict";
		var i;
		var x = document.getElementsByClassName("slides");
		var dots = document.getElementsByClassName("dots");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			dots[i].className = dots[i].className.replace(" active","");
		}
		dots[slideIndex-1].className += " active";
		slideIndex++;
		if (slideIndex > x.length) {
			slideIndex = 1;
		}    
		x[slideIndex-1].style.display = "block";  
		setTimeout(carousel, 5000); // Change image every 2 seconds
	}
	
	//navbar
	window.onscroll = function() {
		"use strict";
		myFunction();
		};
		var navbar = document.getElementById("menu");
		var sticky = navbar.offsetTop;
		function myFunction() {
			"use strict";
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky");
			} else {
				navbar.classList.remove("sticky");
			}
		}
	carousel();
