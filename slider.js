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


// Slider for upcoming
const slider = document.querySelector("[data-slider]");
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}