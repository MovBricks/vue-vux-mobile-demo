<template>
  <div class="homePage">
    <com-header :title="headerTitle" class="homePageHeader"></com-header>
    <section
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="waterFall">
      <com-card v-for="(item,index) in list" :key="index" :tag="item.toString()"></com-card>
    </section>
  </div>
</template>

<script>
  import comHeader from '../../components/header/headNavBar.vue'
  import comCard from '../../components/card/card.vue'
  export default {
    name: 'homePage',
    components: {
      'com-header': comHeader,
      'com-card': comCard
    },
    data: function () {
      return {
        list: [
          1,
          2
        ],
        loading: false,
        headerTitle: '一个'
      }
    },
    methods: {
      loadMore: function () {
        console.log('laodMore')
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
          this.loading = false
          console.log(this.list)
        }, 1500)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .homePage{
    padding: 50px 0;
  }
  .homePageHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .waterFall{
  }

</style>
