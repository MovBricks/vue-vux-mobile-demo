<template>
  <div class="hello">
    <com-header :title="headerTitle"></com-header>
    <section class="waterFall">

    </section>
  </div>
</template>

<script>
  import comHeader from '../../components/header/headNavBar.vue'
  export default {
    name: 'moviePage',
    components: {
      'com-header': comHeader
    },
    data: function () {
      return {
        headerTitle: '一个影视'
      }
    },
    methods: {
      asideUserInfoClick () {
        this.$emit('asideUserInfoClick')
      }
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
