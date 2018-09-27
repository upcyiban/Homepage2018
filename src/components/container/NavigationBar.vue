<template>
  <div id="bar">
    <div id="bar-son">
      <img src="../../assets/logo/logo.svg" id = "logo">
      <p id="title">石大易班</p>
    </div>
    <div id = "buttons">
      <ul class="bar-ul">
        <li class="bar-li"><a href="http://www.yiban.cn/square/index">账号广场</a></li>
        <li class="bar-li"><a href="https://mp.yiban.cn/login/index">微社区</a></li>
        <li class="bar-li"><a href="http://app.yiban.cn/">应用广场</a></li>
        <li class="bar-li"><a href="http://www.yooc.me/">优课YOOC</a></li>
        <li class="bar-li"><a href="https://i.upc.edu.cn/">数字石大</a></li>
        <li class="bar-li" id="login" style="margin: 0"><a href="http://i.upc.edu.cn/dcp/yiban.jsp?">&ensp;&#12288;登入&ensp;&#12288;</a></li>
      </ul>
    </div>
    <div id="small-bar">
      <ul class="small-bar-ul">
        <li class="small-bar-li"><a href="http://yb.upc.edu.cn/project/zhitongche">查看简介</a></li>
        <li class="small-bar-li"><a href="#">机构群</a></li>
        <li class="small-bar-li"><a href="#">名师推荐</a></li>
        <li class="small-bar-li" style="margin: 0"><a href="#">学院入口</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavigationBar",

  }
</script>

<style scoped>
  #bar {
    position: absolute;
    top: 0;
    width: 100%;
    height: 65px;
    background-color: #08a5ea;
    color: #fff;
    z-index: -2;
  }

  #bar-son:before {
    content: '';
    position: absolute;
    left: 0;
    height: 60px;
    width: 400px;
    background: transparent;
    border-right: 50px solid transparent;
    border-top: 90px solid #1b7cda;
    top:0;
    z-index: -1;
  }

  #bar-son:after {
    content: '';
    z-index: -2;
    position: absolute;
    Left: 0;
    height: 80px;
    width: 403px;
    background-color: transparent;
    border-right: 54px solid transparent;
    border-top: 96px solid #08a5ea;
    top: 0;
  }
  #logo{
    width:200px;
    height:auto;
    margin-top: 10px;
    margin-left:60px;
  }
  #title{
    font-size:20px;
    font-weight:500;
    margin-left:300px;
    width: 100px;
    margin-top:-10px;
  }
  #buttons{
    position: absolute;
    width: 60%;
    top: 30%;
    right: 5%;
    float: right;
  }
  .bar-ul{
    padding-top: 0;
    margin: 0;
    width: 100%;
    height: 30px;
  }
  #bar-son{
    display: inline-block;
    width: 400px;
    height: 100%;
    z-index: 10;
  }
  .bar-li{
    display:inline;
    margin-right: 7%;
    font-size: 15px;
  }
  #login{
    width: 50px;
    background: white;
    border-radius: 10px;
    height: 30px;
    margin: 0;
  }
  @media screen and (max-width: 1240px){
    #bar{
      width: 1240px;
    }
  }
  .bar-li > a{
    text-decoration: none;
    color: white;
  }

  #login > a{
    color: #08a5ea;
  }
  #small-bar{
    position: absolute;
    right: 5%;
    top: 65px;
    width: 25%;
  }
  .small-bar-ul{
    width: 100%;
  }
  .small-bar-li{
    display: inline;
    font-size: 10px;
    margin-right: 7%;
  }
  .small-bar-li > a{
    text-decoration: none;
    color: black;
  }
</style>
