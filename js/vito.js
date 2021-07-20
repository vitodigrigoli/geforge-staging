const scroll_animation = document.getElementsByClassName("scroll")[0]
const logo = document.getElementsByClassName("logo")[0]
const navbar = document.getElementsByClassName('navbar')[0]
let timer = null;
let last_scroll_top = 0;

//makes the animation visible when the user does not scroll for at least 3 seconds
window.addEventListener('scroll', function() {
	scroll_animation.classList.remove("scroll--visible")

	// scroll micro-interaction
	if(timer !== null) {
		clearTimeout(timer);

	}

	timer = setTimeout(function() {
		scroll_animation.classList.add("scroll--visible")
	}, 3000);


 // display logo at upscroll
	let st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > last_scroll_top){
		// downscroll code
		console.log("Scroll down")
		logo.classList.add("logo--hidden")
	} else {
		// upscroll code
		console.log("Scroll up")
		logo.classList.remove("logo--hidden")
	}
	last_scroll_top = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}, false);

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('.bubbly-button').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		setTimeout( (e) => {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		}, 400)

	});
});

//add smooth scrolling when clicking any menu link
document.querySelectorAll('.navigation ul li a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		navbar.classList.toggle('navbar--visible')
		setTimeout( (e) => {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		}, 900)

	});
});



logo.addEventListener('click', () => {
	navbar.classList.toggle('navbar--visible')
	logo.classList.toggle('logo--animate')
})
