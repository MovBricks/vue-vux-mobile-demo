<template>
  <header class="headerNavBar">
    <button class="headerNavBarIcon" @click="changeAsideShowFlag(true)"><x-icon type="android-person" size="27"></x-icon></button>
    <h1>{{title}}</h1>
    <a class="headerNavBarIcon"><x-icon type="search" size="27"></x-icon></a>
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
      ...mapActions([
        'changeAsideShowFlag'
      ])
    }
  }
</script>
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

