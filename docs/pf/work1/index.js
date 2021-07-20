$(function () {

  function Alarm_AnimationInit() {

    gsap.fromTo('.alarm', {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.alarm',
        start: '0% 50%',
        end: '100% 30%'
      },
      duration: 0.5
    });

  }

  function Mobile_SlideInit() {
    const swiper = new Swiper('.slide .swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      slidesPerView: 5,
      spaceBetween: 20
    });
  }


  function EvenStars_RotateInit(index) {
    gsap.from(".star-"+ index +" > img", {
      ease:"none",
      duration: 5,
      rotate: 720,
      repeat:-1
    });
  }

  function OddStars_RotateInit(index) {
    gsap.from(".star-"+ index +" > img", {
      ease:"none",
      duration: 5,
      rotate: -720,
      repeat:-1
    });
  }


  Alarm_AnimationInit();
  Mobile_SlideInit();
  for (var i = 0; i < 14; i++)
  {
    if(i%2==0) {
      EvenStars_RotateInit(i);
    }
    else {
      OddStars_RotateInit(i);
    }
  }

});