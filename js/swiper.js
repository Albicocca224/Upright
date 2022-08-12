const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // mobile + tablet - 320-990
      0: {
        slidesPerView: 1
      },
      704:{
        slidesPerView: 2
      },
      // desktop >= 991
      991: {
        slidesPerView: 3
      }
    }
  });
  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // mobile + tablet - 320-990
      0: {
        slidesPerView: 1
      },
      704:{
        slidesPerView: 2
      },
      // desktop >= 991
      991: {
        slidesPerView: 3
      }
    }
  }); 