const scroll_animation = document.getElementsByClassName("scroll")[0]
let timer = null;

window.addEventListener('scroll', function() {
	scroll_animation.classList.remove("scroll--visible")

	if(timer !== null) {
		clearTimeout(timer);
	}

	timer = setTimeout(function() {
		scroll_animation.classList.add("scroll--visible")
	}, 3000);

}, false);