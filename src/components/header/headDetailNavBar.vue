<template>
  <header class="headerNavBar">
    <button class="headerNavBarIcon" @click="changeAsideShowFlag(true)">
      <x-icon class="headerNavBarXicon" type="ios-arrow-left" size="25"></x-icon>
    </button>
    <h1 class="headerNavBarTitle">{{title}}</h1>
    <a class="headerNavBarIcon">
      <x-icon class="headerNavBarXicon" type="share" size="25"></x-icon>
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
      ...mapActions('storeIndexPage', [
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
    padding: 5px 0;
  }
  .headerNavBarIcon{
    margin: 0 10px;
    fill: rgb(53,73,94);
  }
  .headerNavBarTitle{
    font-size: 1.6rem;
  }
  .headerNavBarXicon{
    fill: #ABABAB;
  }
</style>

