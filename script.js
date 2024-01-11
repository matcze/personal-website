// const navToggle = document.querySelector(".nav-toggle")
// const navLinks = document.querySelectorAll(".nav_link")

// navToggle.addEventListener("click", () => {
// 	document.body.classList.toggle("nav-open")
// })

// navLinks.forEach(link => {
// 	link.addEventListener("click", () => {
// 		document.body.classList.remove("nav-open")
// 	})
// })



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });