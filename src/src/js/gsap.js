// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

GSDevTools.create();



/* HOME */  


let intro = document.querySelector('#introHome');


let pupidduGhosting = gsap.to(".ghosting", { ease: "power1.in", duration: 3, yoyo: true, repeat: -1, y: 40,}, 1);

// change color background

const bgDark = gsap.to("body", {
  css: { background: '#131C25', color: 'white'},
  duration: 1
});




let tl1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".flow-1",
      markers: false,
      scrub: 1,
      pin: false,
      start: 'top 20%',
      id: "TL1",
      onEnter: () => switchVideo("video-1", "video-1"),
    }
  })
  .to(".flow-overlay", {
    force3D: true, 
    duration: 1,
    yPercent: 5,
    rotation: "0deg",
    ease: "power1.inOut",
    
  })
  .to(".flow-overlay", { ease: "power1.out", duration: 1, scaleX:0.8, scaleY:0.8 }, 0)
  .to(".flow-overlay", { ease: "power1.in", duration: 1 }, 1);

  // TL2
  let tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".flow-2",
      markers: false,
      scrub: 1,
      pin: false,
      start: 'top 20%',
      end: '+=40%',
      onEnter: () => switchVideo("video-2", "video-2"),
      id: "TL2",
    }
  })
  .to(".flow-overlay", {
    force3D: true, 
    duration: 3,
    yPercent: 5,
    rotation: "90deg",
    x: '200px',
    
  })
  .to(".flow-overlay", { ease: "power1.out", duration: 1, y: '20px' }, 0)
  .to(".flow-overlay", { ease: "power1.in", duration: 1, y: "30px" }, 1);


// TL3
let tl3 = gsap
.timeline({
  scrollTrigger: {
    trigger: ".flow-3",
    markers: false,
    scrub: 1,
    pin: true,
    start: 'top 20%',
    end: '+=40%',
    //onEnter: () => switchVideo("video-1", "video-3"),
    id: "TL3",
  }
})
.to(".flow-overlay", {
  force3D: true, 
  duration: 3,
});



 // TL4
 let tl4 = gsap
 .timeline({
   scrollTrigger: {
     trigger: ".flow-3-3",
     markers: false,
     scrub: 1,
     pin: false,
     start: 'top 50%',
     end: '+=40%',
     onEnter: () => switchVideo("video-3", "video-3"),
     id: "TL4",
   }
 })
 .to(".flow-overlay", {
   force3D: true, 
   duration: 3,
   yPercent: 5,
   rotation: "0deg",
   x: '0px',
   
 })
 .to(".flow-overlay", { ease: "power1.out", duration: 1, y: '20px' }, 0)
 .to(".flow-overlay", { ease: "power1.in", duration: 1, y: "30px" }, 1);


  // TL5
  let tl5 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".flow-4",
      markers: false,
      scrub: 1,
      pin: true,
      start: 'top 34%',
      end: '+=140%',
      onEnter: () => switchVideo("video-4", "video-4"),
      id: "TL4",
    }
  })
  .to(".flow-overlay", {
    force3D: true, 
    duration: 3,
    yPercent: 5,
    rotation: "0deg",
    x: '0px',
    
  })
  .to(".stories", { ease: "power1.out", duration: 1, scaleX:0.7, scaleY:0.7  }, 1);

  gsap.to(".stories.even", { ease: "power1.inOut", duration: 9, yoyo: true, repeat: -1, y: 40,}, 1);
  gsap.to(".stories.odd", { ease: "power1.inOut", duration: 9, yoyo: true, repeat: -1, y: -20, scaleX: 0.85, scaleY: 0.85, }, 1);

  


/* TRIGGER secondo paragrafo */
ScrollTrigger.create({
  scrub: false,
  duration: 2,
  pin: false,
  trigger: ".flow-2",
  animation: bgDark,
  toggleActions: 'play reverse reverse reset'
});


/* VIDEOS CONTROL */


function switchVideo(el, vid){
  changeVideo(vid);
  playVideo(el);
}

function changeVideo(vid){
  const video = document.getElementById(vid);
  //video.src = 'assets/video/' + vid + '.mp4';
  for (const element of document.querySelectorAll(".smartphone-video")) {
    element.style.zIndex = 0
  }
  video.style.zIndex = 100;
  console.log("video changed", vid);
}

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  console.log('playing video');
}

function pauseVideo(el) {
  let vid = document.getElementById(el);
  vid.pause();
  console.log('pausing video');
}


// function selectVideo(vid){
//   var video = document.getElementById(vid);
//   var allVideo = document.getElementsByClassName('.video');

//   allVideo.classList.remove('active');
//   video.classList.add('active');
// }






