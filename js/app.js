/*==================== PORTFOLIO SWIPER  ====================*/
// https://codesandbox.io/s/o0mxvt?file=/index.html:2277-2582

let swiper = new Swiper(".shop__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
