<template>
  <div class="hello">
    <!--<header class="headerNavBar">-->
      <!--<button class="headerNavBarIcon" @click="asideUserInfoClick()"><x-icon type="android-person" size="27"></x-icon></button>-->
      <!--<h1>{{headerTitle}}</h1>-->
      <!--<a class="headerNavBarIcon"><x-icon type="search" size="27"></x-icon></a>-->
    <!--</header>-->
    <com-header :title="headerTitle"></com-header>
    <section class="waterFall">

    </section>
  </div>
</template>

<script>
  import comHeader from '../../components/header/headNavBar.vue'
  export default {
    name: 'homePage',
    components: {
      'com-header': comHeader
    },
    data: function () {
      return {
        headerTitle: '一个'
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .headerNavBar{
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerNavBarIcon{
    margin: 0 10px;
    fill: rgb(53,73,94);;
  }
</style>
