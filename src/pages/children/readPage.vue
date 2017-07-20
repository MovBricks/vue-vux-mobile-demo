<template>
  <div class="readPage">
    <com-header :title="headerTitle" class="readPageHeader"></com-header>
    <section
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    class="waterFall" id="IdWaterFall">
    <!--<section class="waterFall" id="IdWaterFall">-->
      <com-card
        v-for="(item,index) in topten"
        :key="index"
        :tag="getTag(item)"
        :title="item.title"
        :author="getAuthorName(item)"
        :forward="item.forward"
        :timeBefore="getTimeBefore(item)"
        :likeCount="item.like_count"
        @click.native="waterFallCardClick(item)"
        :imgSrc="item.img_url"
      ></com-card>
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import comHeader from '../../components/header/headNavBar.vue'
  import comCard from '../../components/card/card.vue'
  import Mixins from '../../mixins/mixins.vue'

  export default {
    name: 'readPage',
    mixins: [Mixins],
    components: {
      'com-header': comHeader,
      'com-card': comCard
    },
    data: function () {
      return {
        busy: false,
        headerTitle: '一个阅读'
      }
    },
    computed: {
      ...mapGetters('storeReadPage', [
        'topten',
        'loading'
      ])
    },
    created () {
      this.getTopTen()
    },
    methods: {
      ...mapActions('storeReadPage', [
        'getTopTen',
        'getNextPageById'
      ]),
      waterFallCardClick: function (node) {
        this.$router.push({
          name: this.getRouterNameByCategory(node.category),
          params: {
            id: node.item_id
          }
        })
      },
      getTag: function (node) {
        return (node.tag_list.length > 0) ? node.tag_list[0].title : '阅读'
      },
      loadMore: function () {
        console.log('laodMore')
        let len = this.topten.length
        if (len > 0) {
          this.getNextPageById(this.topten[len - 1].id)
        }
      }
    },
    watch: {
      // 如果发生改变，这个函数就会运行
      loading: function () {
        this.busy = this.loading
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .readPage{
    padding: 50px 0;
  }
  .readPageHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .waterFall>*{
    margin-bottom: 10px;
    background-color: white;
  }

</style>
