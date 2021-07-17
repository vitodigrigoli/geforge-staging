const scroll_animation = document.getElementsByClassName("scroll")[0]
let timer = null;

//makes the animation visible when the user does not scroll for at least 3 seconds
window.addEventListener('scroll', function() {
	scroll_animation.classList.remove("scroll--visible")

	if(timer !== null) {
		clearTimeout(timer);
	}

	timer = setTimeout(function() {
		scroll_animation.classList.add("scroll--visible")
	}, 3000);

}, false);

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		setTimeout( (e) => {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		}, 400)

	});
});
