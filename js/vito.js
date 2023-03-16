const scroll_animation = document.getElementsByClassName("scroll")[0]
const toggle = document.getElementsByClassName("menu__toggle")[0]
const bars = document.getElementsByClassName("menu__toggle__bars")[0]
const navbar = document.getElementsByClassName('navbar')[0]
let timer = null;
let last_scroll_top = 0;

//makes the animation visible when the user does not scroll for at least 3 seconds
window.addEventListener('scroll', function() {


 // display logo at upscroll
	let st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > last_scroll_top){
		// downscroll code
		logo.classList.add("logo--hidden")
	} else {
		// upscroll code
		logo.classList.remove("logo--hidden")
	}
	last_scroll_top = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}, false);

//add smooth scrolling when clicking button
document.querySelectorAll('.bubbly-button').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		setTimeout( (e) => {
			window.location.replace(this.getAttribute('href'))
		}, 400)

	});
});

//add smooth scrolling when clicking any menu link
document.querySelectorAll('.navigation ul li a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		navbar.classList.toggle('navbar--visible')

		setTimeout( (e) => {
			window.location.replace(this.getAttribute('href'));
		}, 600)

	});
});



toggle.addEventListener('click', () => {
	bars.classList.toggle('menu__toggle__bars--active')
	navbar.classList.toggle('navbar--visible')
})
