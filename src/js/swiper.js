import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            374: {
                slidesPerView: 1.8,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',
    });
});