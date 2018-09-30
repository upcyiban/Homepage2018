<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in 6">
        <a :href="image[i]">
          <img :src="img_host + i + '.jpg'">
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import '../style/add.css';
  import axios from 'axios';
  axios.defaults.withCredentials=true;
    export default {
        name: "Swipe",
      props: ['image'],
      data(){
        return{
          img_host: 'http://yb.upc.edu.cn/yb-images/homeImg/',
        }
      },
      mounted:function () {

        setTimeout(function () {
          let swiperObj =  new swiper('#swiper', {
            loop:true,
            autoplay: true,
            effect: "coverflow",
            slidesPerView: 2,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 10,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows : true
            },
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
          });
        }, 100);
      }
    };
</script>

<style scoped>
  .swiper-container{
    width: 70%;
    margin-left: 15%;
    margin-top: 220px;
    position: absolute;
  }
  .swiper-wrapper{
    text-align: center;
  }
  .swiper-slide{
    height: 220px;
  }
  img{
    height: 220px;
    width: 100%;
  }
  @media screen and (max-width: 1240px){
    .swiper-container{
      width: 744px;
      margin-left: 248px;
    }
  }
</style>
