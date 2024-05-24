let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

const reviewSlider = new Swiper('.review-slider', {
    // slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });

// Breakpoints
// $(window).on('resize', function(){
//     var width = $(window).width();
//     if(width < 1000 && width >= 500) {
//         reviewSwiper.params.slidesPerView = 2;
//         reviewSwiper.params.spaceBetween = 40;
//     } else if(width < 500) {
//         reviewSwiper.slidesPerView = 1;
//         reviewSwiper.params.spaceBetween = 30;
//     } else {
//         reviewSwiper.params.slidesPerView = 3;
//         reviewSwiper.params.spaceBetween = 50;
//     }
//     reviewSwiper.onResize();
// }).resize();    

$(function(){
const brandSwiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },    
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });
});

// // Breakpoints
// $(window).on('resize', function(){
//     var width = $(window).width();
//     if(width < 1000 && width >= 500) {
//         brandSwiper.params.slidesPerView = 2;
//         brandSwiper.params.spaceBetween = 40;
//     } else if(width < 500) {
//         brandSwiper.slidesPerView = 1;
//         brandSwiper.params.spaceBetween = 30;
//     } else {
//         brandSwiper.params.slidesPerView = 3;
//         brandSwiper.params.spaceBetween = 50;
//     }
//     brandSwiper.onResize();
// }).resize();   

// });