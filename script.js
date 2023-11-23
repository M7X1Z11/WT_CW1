// Hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active-hamburger");
    navbar.classList.toggle("active-hamburger");
  });

// Validation form
  const modal = document.querySelector(".modal");
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const loginBtn = document.querySelector(".login-btn");
  
  
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
  
  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  function showRegister() {
	showLogin()
	wrapper.classList.toggle("active");
  }
  
  function showLogin() {
    modal.classList.add("active-form");
  }
  function closeLogin() {
    modal.classList.remove("active-form");
    wrapper.classList.remove("active");
  }
  
  function logRegComplete() {
    const username = document.getElementById("usernameInput");
    if (username.value == "" && password.value == "") {
      alert("Username and password required");
    } else {
      alert(`Welcome, ${username.value}!`);
      closeLogin();
    }
  }
  
  window.onresize = () => {
    const top = (window.innerHeight - modal.offSetHeight) / 2;
    const left = (window.innerWidth - modal.offSetWidth) / 2;
    modal.style.top = top + "px";
    modal.style.left = left + "px";
  };
  

// Logo to homepage
  logo.onclick = function () {
	location.href = "home.html";
  }

  // SLIDER CODE
  // Images
	let slideImages = document.querySelectorAll('img');
	// Next and previous buttons
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	// Dots
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	//Next button
	next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

	//Prev button
	prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}

	//Auto sliding
	function autoSliding(){
		deletInterval = setInterval(timer, 3000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();


	// Add & remove active class from the dots
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// click event to the dot
	function switchImage(currentImage){
		currentImage.classList.add('active');
		var imageId = currentImage.getAttribute('attr');
		if(imageId > counter){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(imageId == counter){
			return;
		}
		else{
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
		}
		indicators();
	}
