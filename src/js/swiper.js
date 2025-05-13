import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        loop: true,
        breakpoints: {
            374: {
                slidesPerView: 1.8,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',
    });
    let swiperInstance = null;

    function initSwiperIfNeeded() {
        const shouldInit = window.innerWidth > 1439;
    
        if (shouldInit && !swiperInstance) {
            swiperInstance = new Swiper('.rewiews-swiper', {
                modules: [Navigation],
                loop: true,
                slidesPerView: 3.2,
                spaceBetween: 24,
                slideClass: 'rewiews-swiper-slide',
                wrapperClass: 'rewiews-swiper-wrapper',
                direction: 'horizontal',
            });
        } else if (!shouldInit && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
    
    window.addEventListener('load', initSwiperIfNeeded);

    window.addEventListener('resize', initSwiperIfNeeded);
});