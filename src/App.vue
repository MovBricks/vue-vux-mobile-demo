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
  h1{
    font-weight: normal;
  }

  body {
    background-color: #fbf9fe;
  }

  button{
    outline: none;
    background-color: rgb(255,255,255);
    border: none;
  }
</style>
