<template>
  <div id="app">
    <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '../node_modules/vux/src/styles/reset.less';
  html {
    font-size: 62.5%;
  }
  body {
    /*background-color: #fbf9fe;*/
    background-color: #efefef;
  }
  h1{
    font-weight: normal;
    font-family: "PingFangSC-Light",sans-serif;
  }
  ul,li{
    list-style-type:none
  }
  button{
    outline: none;
    background-color: rgba(255,255,255,0);
    border: none;
  }
</style>
