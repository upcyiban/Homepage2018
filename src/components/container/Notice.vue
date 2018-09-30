<template>
    <div id="notice">
      <div id="notice-left">
        <p>校园活动</p>
        <ul type="square">
          <li v-for="item in xiaoYuan"><a :href="item['url']">{{item['details']}}</a></li>
          <li ><a href="http://www.yiban.cn/school/notice/id/5370538/type/2">更多内容...</a></li>
        </ul>
      </div>
      <div id="notice-mid">
        <p>通知公告</p>
        <ul type="square">
          <li v-for="item in gongGao"><a :href="item['url']">{{item['details']}}</a></li>
          <li ><a href="http://www.yiban.cn/school/notice/id/5370538/type/1">更多内容...</a></li>
        </ul>
      </div>
      <div id="notice-right">
        <p>易新闻</p>
        <ul type="square">
          <li v-for="item in zaHui"><a :href="item['url']">{{item['details']}}</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.withCredentials=true;
    export default {
        name: "Notice",
      data(){
          return{
          }
      },
      created:function () {
          //this.get_notice();
      },
      props:['xiaoYuan', 'gongGao', 'zaHui'],
      methods:{
      }
    }
</script>

<style scoped>
  #notice{
    width: 100%;
    background: rgba(240, 240, 240, 0.7);
    height: 240px;
    position: absolute;
    margin-top: 460px;
  }
  #notice-left{
    width: 27.5%;
    height: 220px;
    background: white;
    text-align: center;
    margin-left: 4.375%;
    top: 13px;
    position: relative;
    overflow-y: auto;
  }
  #notice-mid{
    width: 27.5%;
    height: 220px;
    background: white;
    text-align: center;
    margin-left: 36.25%;
    position: relative;
    bottom: 206px;
    overflow-y: auto;
  }
  #notice-right{
    width: 27.5%;
    height: 220px;
    background: white;
    text-align: center;
    margin-left: 68.125%;
    position: relative;
    bottom: 426px;
    overflow-y: auto;
  }
  p{
    color: #197ad9;
    font-size: 17px;
  }
  li{
    text-align: left;
    color:  #197ad9;
    font-size: 14px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 1240px){
    #notice{
      width: 1240px;

    }
  }
</style>
