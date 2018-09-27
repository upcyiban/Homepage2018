<template>
  <div id="menu">
    <div id="buttons">
      <div :class="[{button: true, buttonOn: thisButton === key }]" v-for="(value, key)  in value" @click="change(key)">
        {{key}}
      </div>
    </div>
    <ul v-show="buttonActive">
      <li v-model="thisButton" v-for="i in value[thisButton]">
        <a v-bind:href="i['url']">{{i['name']}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Menu",
    data() {
      return {
        thisButton: '',
        buttonActive: false,

      }
    },
    props:['value'],
    methods: {
      change: function (key) {
        if (key === this.thisButton) {
          this.buttonActive = !this.buttonActive;
          this.thisButton = '';
        }
        else {
          console.log(key);
          console.log(this.value)
          console.log(this.value[key]);
          this.thisButton = key;
          this.buttonActive = true;
        }
      }
    }
  }
</script>

<style scoped>
  #menu {
    width: 100%;
    background: rgba(240, 240, 240, 0.7);
    height: 40px;
    margin-top: 120px;
    position: absolute;
  }

  #buttons {
    width: 60%;
    margin-left: 20%;
    height: 40px;
    overflow: hidden;

  }

  .button {
    width: 25%;
    text-align: center;
    color: #08a5ea;
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    padding-top: 8px;
    font-weight: 500;
    font-size: large;
  }

  .small-menu {
    width: 100%;
  }

  li {
    display: inline;
    color: white;
    height: 40px;
    margin-top: 20px;
    padding-left: 50px;
    font-size: 14px;
  }

  ul {
    background: linear-gradient(#197ad9, #3995ff);
    height: 40px;
    width: 60%;
    padding: 0;
    margin-left: 20%;
    margin-top: 0;
  }

  .buttonOn {
    background: #197ad9;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
    line-height: 40px;
  }
  @media screen and (max-width: 1240px){
    #menu{
      width: 1240px;
    }
  }
</style>
