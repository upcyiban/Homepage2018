<template>
    <div id="foot">
      地址:基础实验楼B座负一层  电话:0532-86983248
    </div>
</template>

<script>
    export default {
        name: "Foot"
    }
    console.log('同学，祝贺你喜提彩蛋~\n' +
      '或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷；\n' +
      '在这里做自己，欢迎来到易班！')
</script>

<style scoped>
  #foot{
    width: 100%;
    text-align: center;
    color: black;
    position: absolute;
    margin-top: 720px;
  }
  @media screen and (max-width: 1240px){
    #foot{
      width: 1240px;

    }
  }
</style>
