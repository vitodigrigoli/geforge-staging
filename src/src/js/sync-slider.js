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