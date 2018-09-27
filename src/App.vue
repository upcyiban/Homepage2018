<template>
  <div id="app">
        <router-view name="bar"></router-view>
        <router-view name="menu" :value="name"></router-view>
        <router-view name="carousel" :image="swiper"></router-view>
        <router-view name="notice" :zaHui="za" :xiaoYuan="xiao" :gongGao="gong"></router-view>
        <router-view name="foot"></router-view>
  </div>
</template>
<script>
  import axios from 'axios';
  axios.defaults.withCredentials=true;
  let host = 'http://localhost';
  let url = {
    'force': '/test_error',
    'img' : '/get_img',
    'notice': '/get_notice',
    'app': '/get_app'
  };
export default {
  name: 'App',
  created: function () {
    this.get_img();
  },
  data() {
    return {
      menu: [],
      swiper: [],
      gong: [],
      za: [],
      xiao: [],
      name: {}
    }
  },
  methods: {
    get_img: function () {
      let that = this;
      axios.get(host + url['force'])
        .then(function () {
          axios.post(host + url['img'])
            .then(function (response) {
              let response_value = response.data;
              //console.log(response)
              that.swiper = response_value
            });
          axios.post(host + url['notice'])
            .then(function (response) {
              let response_value = response.data;
              //console.log(response)
              that.gong = response_value['通知公告'];
              that.xiao = response_value['校园活动'];
              //console.log(that.gongGao);
              that.za = response_value['易杂烩'];
            });
          axios.post(host + url['app'])
            .then(function (response) {
              let response_value = response.data;
              //console.log(response)
              that.name = response_value
              console.log(that.name)
            });
        });
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 100%;
}
  @media screen and (max-width: 1240px) {
    #app{
      width: 1240px;
    }
  }
</style>
