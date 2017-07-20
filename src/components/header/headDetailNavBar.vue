<template>
  <header class="headerDetailNavBar">
    <button class="headerDetailNavBarIcon" @click="headerDetailNavBarBackClick()">
      <x-icon class="headerDetailNavBarXicon" type="ios-arrow-left" size="25"></x-icon>
    </button>
    <h1 class="headerDetailNavBarTitle">{{title}}</h1>
    <a class="headerDetailNavBarIcon">
      <x-icon class="headerDetailNavBarXicon" type="share" size="25"></x-icon>
    </a>
  </header>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      title: {
        default: '未知',
        type: String
      }
    },
    data: function () {
      return {
      }
    },
    methods: {
      headerDetailNavBarBackClick: function () {
        this.$router.go(-1)
      },
      ...mapActions('storeIndexPage', [
        'changeAsideShowFlag'
      ])
    }
  }
</script>
<style scoped>
  .headerDetailNavBar{
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  .headerDetailNavBarIcon{
    margin: 0 10px;
    fill: rgb(53,73,94);
  }
  .headerDetailNavBarTitle{
    font-size: 1.6rem;
  }
  .headerDetailNavBarXicon{
    fill: #ABABAB;
  }
</style>

