<template>
  <div class="hello">
    <h1 class="tips">该页面还未制作</h1>
    <div>
      <h2>这是一个仿照韩寒「ONE · 一个」制作的web App</h2>
      <h3>有兴趣的前往官网下载</h3>
      <div class="download">
        <a href="http://m.wufazhuce.com/download" data-inline="true" data-ajax="false" target="_blank" class="ui-link">
          <img alt="「ONE · 一个」" class="one-image-exclude logo-img" src="http://image.wufazhuce.com/app_download.png">
        </a>
        <p class="download-text">下载「一个」APP</p>
      </div>
      <h2 class="footerhead" >使用的相关开源代码</h2>
      <ul>
        <li>框架：Vue.js + Vuex + vue-router</li>
        <li>界面UI：VUX</li>
        <li>网络请求库：axios</li>
        <li>数据API：<a href="https://github.com/gongph/one-api" target="_blank">gongph</a>提供</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.logo-img{
  max-width: 60px;
  margin: 0px;
  border: 0;
}
  .hello>*{
    width: 100%;
    text-align: center;
  }
  .tips{
    font-size: 4rem;
    font-weight: bold;
    text-shadow: none;
    height: 100px;
    line-height: 100px;
  }
  .footerhead{
    font-size: 1rem;
  }
  .download{
    width: 100%;
    text-align: center;
    display: block;
    padding-bottom: 50px;
  }
</style>
