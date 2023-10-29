<template>
    <swiper :slides-per-view="4" :space-between="50" 
    @swiper="onSwiper" 
    @slideChange="onSlideChange">
        <swiper-slide class="swiper-slide-content" v-for="good in goods" :key="good.id">
            <div class="swiper__image"></div>
            <div class="swiper__h1">{{ good.name }} </div>
            <div class="swiper__p">{{ good.description }} </div>
            <div class="swiper__rub">6 848 ₽ – 56 584 ₽</div>
            <div class="swiper__evro">77.60 € – 643.86 €</div>
            <div class="swiper__btn button button-primary">Подробнее</div>
        </swiper-slide>
    </swiper>
</template>
<script>
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState } from "vuex";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    computed:{
    ...mapState(['goods'])
  },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<style>
.swiper {
    width: 1280px;
    height: 660px;

}

.swiper-slide {
    margin-right: 20px;
}

.swiper-slide-content {
    width: 305px;
    height: 563px;
    border-radius: 5px;
    background: #F6F8FA;


    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    /* align-items: center; */

}

.swiper__image {
    width: 245px;
    height: 245px;
    background-color: white;
    align-self: center;
    margin-bottom: 5px;
}

.swiper__h1 {

    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    color: #1F2432;
    margin-bottom: 10px;
}

.swiper__p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #1F2432;
    margin-bottom: 59px;
}

.swiper__rub {
    font-size: 22px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0.005em;
    color: #1F2432;
    margin-bottom: 3px;
}

.swiper__evro {
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #797B86;
    margin-bottom: 20px;
}

.swiper__btn {}
</style>
  