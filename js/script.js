
//console.clear();

const consoleWelcome = `%c
                                                                          
   @@@@@@@@  @@@@@@@@  @@@@@@@@   @@@@@@   @@@@@@@    @@@@@@@@  @@@@@@@@  
  @@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@@  @@@@@@@@  
  !@@        @@!       @@!       @@!  @@@  @@!  @@@  !@@        @@!       
  !@!        !@!       !@!       !@!  @!@  !@!  @!@  !@!        !@!       
  !@! @!@!@  @!!!:!    @!!!:!    @!@  !@!  @!@!!@!   !@! @!@!@  @!!!:!    
  !!! !!@!!  !!!!!:    !!!!!:    !@!  !!!  !!@!@!    !!! !!@!!  !!!!!:    
  :!!   !!:  !!:       !!:       !!:  !!!  !!: :!!   :!!   !!:  !!:       
  :!:   !::  :!:       :!:       :!:  !:!  :!:  !:!  :!:   !::  :!:       
   ::: ::::   :: ::::   ::       ::::: ::  ::   :::   ::: ::::   :: ::::  
    :: :: :   : :: ::    :         : :  :    :   : :   :: :: :   : :: ::  
                                                                          
      genius for genius                                                   `;

      console.log(consoleWelcome, 'color: #fe8005; background:#131C25;');


// Chrome Scroll Restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


/* Reset Video */
changeVideo("video-0");

/* LOADING */
window.addEventListener('load', (event) => {
  if (document.readyState !== "complete") {
    //
  } else {
      $("#LoadingOverlay").delay(1600).addClass("bye");
      $(".page-wrapper").delay(1300).addClass("fade-in");
      $("#LoadingOverlay").delay( 1300 ).remove()
  }
});



// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

var smallMediaQuery = window.matchMedia("(max-width:1024px)");


let pupidduGhosting = gsap.to(".ghosting", { ease: "power1.in", duration: 3, yoyo: true, repeat: -1, y: 40,}, 1);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-trigger",
    pin: true,
    scrub: 1,
    maxScroll: 300,
    start: "top top",
    end: smallMediaQuery.matches ? "+=3000" : "+=3000",
    toggleActions: "play pause play reset",
  },
});


  // Mostro il titolo
  tl
    .from(".title", {
    opacity: 0,
    duration: 1,
    onStart: () => switchVideo("video-0", "video-0"),
    onReverseComplete: () => switchVideo("video-0", "video-0"),
  })

  // Reset zindex
  .to("[data-slide='2']",{
    css : {"z-index" : "-1"}
  }, "+=1")

  // Ingrandisco Smartphone
  .from("[data-slide='1'] .image",
    {
      opacity: 1,
      yPercent: 15,
      duration: 3,
      scale: 0.75,
      onStart: () => switchVideo("video-0", "video-0"),
      onReverseComplete: () => switchVideo("video-0", "video-0"),
    }, "+=1")

  // Cambio Sfondo => Scuro
  .to(".pin-spacer",
  {
    css: { background: '#131C25', color: 'white' },
    duration: 1,
  }, "+=1")

  // Nascondo il titolo
  tl.to(".title", {
    yPercent: smallMediaQuery.matches ? 0 : -100 ,
    onStart: () => $(".smartphone .overlay").addClass("bye"),
    onReverseComplete: () => $(".smartphone .overlay").removeClass("bye"),
    duration: 3,
  })

  // Ruoto lo smartphone
  .to("[data-slide='1'] .image",
    {
      yPercent: 5,
      scale: 0.8,
      duration: 3,
      ease: "power1.inOut",
      onStart: () => switchVideo("video-1", "video-1"),
      onReverseComplete: () => switchVideo("video-1", "video-1"),
    }, "+=1")
  // Sposto lo smartphone --->
  .to(
    "[data-slide='1'] .image",
    {
      xPercent: smallMediaQuery.matches ? 0 : 75 ,
      yPercent: smallMediaQuery.matches ? -30 : 0 ,
      duration: 3,
      ease: "power1.inOut",
      
    }, "+=1")

  .from("#text-1",
    {
      opacity: 0,
      duration: 1,
      stagger: 1,
    }, "+=1")

  .to("#text-1",
    {
      opacity: 0,
      duration: 1,
      xPercent: -10,
    }, "+=5")

  // Cambio Sfondo => Chiaro
  .to(".pin-spacer",
    {
      css: { background: '#ffffff', color: '#131C25' },
      duration: 1,
    })

  // Ruoto lo smartphone
  .to("[data-slide='1'] .image",
  {
    yPercent: 5,
    rotation: "90deg",
    xPercent: smallMediaQuery.matches ? 120 : 90 ,
    scale: 0.8,
    duration: 3,
    ease: "power1.inOut",
    onStart: () => switchVideo("video-2", "video-2"),
    onReverseComplete: () => switchVideo("video-2", "video-2"),
  }, "+=1")    

  .from("#text-2",
    {
      opacity: 0,
      duration: 1,
      stagger: 1,
    }, "+=1")

  .to("#text-2",
    {
      opacity: 0,
      duration: 3,
      xPercent: -10,
    }, "+=5")

  // Ruoto lo smartphone
  .to("[data-slide='1'] .image",
  {
    yPercent: 5,
    xPercent: 0,
    rotation: "0deg",
    scale: 0.8,
    duration: 3,
    ease: "power1.inOut",
    onStart: () => switchVideo("video-3", "video-3"),
    onReverseComplete: () => switchVideo("video-2", "video-2"),
  }, "+=5")

  // Reset zindex
  .to("[data-slide='2']",{
    css : {"z-index" : "2"}
  }, "+=1")

  .from(
    "[data-slide='2'] .image",
    {
      opacity: 0,
      duration: 1,
      scale: 0.8,
      onStart: () => switchVideo("video-4", "video-4"),
     },
    
    "+=3")


    .to(
      "[data-slide='2'] .image",
      {
        yPercent: 5,
        xPercent: 0,
        duration: 1,
        scale: 0.8,
       },
      
      "+=3").
    
    from(
    "[data-slide='2'] .storyThumb",
    {
      opacity: 0,
      xPercent: 10,
      scale: smallMediaQuery.matches ? 0.8 : 1 ,
      duration: 2,
      stagger: 1 },
    
    "+=1").
    
    to(
    "[data-slide='2'] .storyThumb",
    {
      opacity: 0,
      xPercent: -10,
      duration: 1,
      stagger: 1 },
    
    "+=5");




function switchVideo(el, vid) {
  changeVideo(vid);
  playVideo(el);
}

function changeVideo(vid) {
  const video = document.getElementById(vid);
  //video.src = 'assets/video/' + vid + '.mp4';
  for (const element of document.querySelectorAll(".smartphone-video")) {
    element.style.zIndex = 0
  }
  video.style.zIndex = 100;
}

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
}

function pauseVideo(el) {
  let vid = document.getElementById(el);
  vid.pause();
}

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}




/** CONVERSATIONAL: CONTACT FORM  */

$('form').on('submit', function(event) {
  event.preventDefault();
  return false
});



window.onload = function() {
  var flowCallback = function(dto, success, error) {
    console.log("dto....", dto, success, error);
    
    if(dto.tag.name == "start"){

    }

    if(dto.tag.name == "start"){
      if(dto.tag.value == "yes"){
        console.log("Hai scelto consulenza");
        document.getElementById("conversational-form").classList.add("box-shadow");
      
      } else{
        document.getElementById("conversational-form").classList.remove("box-shadow");
      }
    }
    
    success();
  }

  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    robotImage: "assets/img/bot-fabrizio.png",
    suppressLog: (true),
    showProgressBar: (true),
    preventAutoFocus: true,
    flowStepCallback: flowCallback,
    submitCallback: function() {
      
      var formDataSerialized = conversationalForm.getFormData(true);

      /* Facebook Pixel */
      fbq('track', 'Contact');

      document.getElementById("form").submit(); 
    
      conversationalForm.addRobotChatResponse(
        "Grazie! La tua richiesta è stata inviata con successo."
      )
    },
    dictionaryRobot: {
      "robot-image": "assets/img/bot-fabrizio.png",
      "textarea": "Scrivi il tuo testo.",
      "text": "Scrivi il tuo testo.",
      "input": "Scrivi il tuo testo.",
      "input-placeholder": "Scrivi...",
      "name": "Come ti chiami?",
      "email": "Inserisci la tua E-Mail.",
      "password": "Inserisci una password",
      "tel": "Inserisci il tuo numero di telefono?",
      "radio": "Seleziona uno di questi elementi.",
      "checkbox": "Seleziona uno o più elementi.",
      "select": "Scegli una di queste opzioni.",
      "general": "General1|General2|General2..",
      "file": "file",
      "group-placeholder": "Scrivi ..."
    },
    controlElementsInAnimationDelay: 250,
    robot: {
      robotResponseTime: 200,
      chainedResponseTime: 400
    },
    user: {
      showThinking: true,
      showThumb: true
    }
  });
};



/** CAROUSEL */
var $carousel = $('.carousel-main').flickity({
  "wrapAround": true,
  "draggable": true,
  "prevNextButtons": false,
  "pageDots": false,
});
var $nav = $('.carousel-nav').flickity({
   "on": {
     ready: choseCenterSlide,
     scroll: choseCenterSlide
   },
  "asNavFor": ".carousel-main",
   "wrapAround": true,
   "percentPosition": false,
   "draggable": true,
   "pageDots": false,
   "prevNextButtons": false,
   "contain": true

});

$nav.on('select', function() {
$carousel.trigger('select');
});

$nav.data('flickity').resize();

function choseCenterSlide () {

// 
// calculate closest slide
var distances = this.slides.map(slide => Math.abs(-slide.target - this.x));
var minDistance = Math.min.apply( Math, distances );
var closestSlideIndex = distances.indexOf( minDistance );

// early return
if ( closestSlideIndex == this.scrollSlideIndex ) return;
// register 
if (this.scrollSlideIndex == null) this.scrollSlideIndex = this.selectedIndex;
// change scrollSlide
this.slides[this.scrollSlideIndex].cells.forEach( cell => {
cell.element.classList.remove('is-closest');
});
this.select(closestSlideIndex);
if(this.navCompanion) {
this.navCompanion.select(closestSlideIndex);
}
this.slides[closestSlideIndex].cells.forEach( cell => {
cell.element.classList.add('is-closest');
});
// update state variable
this.scrollSlideIndex = closestSlideIndex;

}


// ScrollTo Carousel Nav
const yOffset = -10; 	
$nav.on('change.flickity', function() {
	window.scrollTo({
		top: document.querySelector('.carousel-nav').getBoundingClientRect().top + window.pageYOffset + yOffset, 
		behavior: 'smooth'
	});
});




/* MODAL */
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
	el.lightbox = new IframeLightbox(el);
});


