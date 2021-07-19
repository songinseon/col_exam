$(function () {

function Alarm_AnimationInit() {

  gsap.fromTo('.alarm', {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    scrollTrigger: {
      trigger: '.alarm',
      start:'0% 50%',
      end:'100% 30%'
    },
    duration: 0.5
  });

}

function Mobile_SlideInit() {
  const swiper = new Swiper('.slide .swiper-container', {
    loop: true,
    autoplay: {
      delay:2000,
      disableOnInteraction:false
    },
    slidesPerView: 5,
    spaceBetween: 20
  });
}


Alarm_AnimationInit();
Mobile_SlideInit();


});