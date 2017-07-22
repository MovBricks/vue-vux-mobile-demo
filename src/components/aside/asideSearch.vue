<template>
  <div class="asideSearch">
    <header class="asideSearchHeader">
      <button class="asideSearchHeaderBack" v-on:click="changeAsideSearchShowFlag(false)">
        <x-icon type="ios-arrow-left" size="35" style="fill:#000"></x-icon>
      </button>
    </header>
    <section>
      <h1 class="asideSearchTitle1">一个搜索</h1>
      <h2 class="asideSearchTitle2">搜索引擎就是把字典塞到硅片里</h2>
      <div class="asideSearchInputWrapper">
        <input class="asideSearchInput" type="text" placeholder="该功能尚未完成"/>
      </div>
      <!--<search-->
        <!--@result-click="resultClick"-->
        <!--@on-change="getResult"-->
        <!--:results="results"-->
        <!--v-model="value"-->
        <!--position="absolute"-->
        <!--auto-scroll-to-top top="46px"-->
        <!--@on-focus="onFocus"-->
        <!--@on-cancel="onCancel"-->
        <!--@on-submit="onSubmit"-->
        <!--ref="search"></search>-->
    </section>
  </div>
</template>

<script>
  import { CheckIcon, XSwitch, Group, Cell, Search } from 'vux'
  import { mapActions } from 'vuex'

  export default {
    components: {
      CheckIcon,
      XSwitch,
      Group,
      Cell,
      Search
    },
    data: function () {
      return {
        isNightModel: false
      }
    },
    methods: {
      ...mapActions('storeIndexPage', [
        'changeAsideSearchShowFlag'
      ])
    }
  }
</script>
<style scoped>

  .asideSearch{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 501;
    background-color: white;
  }
  .asideSearchHeader{
    background-color: rgba(255,255,255,0);
  }
  .asideSearchHeaderBack{
    background-color: rgba(255,255,255,0);
  }
  .asideSearchTitle1{
    width: 100%;
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;
    margin-top: 50px;
  }
  .asideSearchTitle2{
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    color: #808080;
  }
  .asideSearchInputWrapper{
    box-sizing: border-box;
    width: 100%;
    padding: 0 40px;
    margin-top: 100px;
  }
  .asideSearchInput{
    border: none;
    outline:none;
    -webkit-appearance:none;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    font-size: 2rem;
    color: #808080;
    border-bottom: 1px solid;

  }
</style>

