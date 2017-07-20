<template>
  <div class="homePage">
    <com-header :title="headerTitle" class="homePageHeader"></com-header>
    <section class="waterFall" id="IdWaterFall">
      <com-card
        v-for="(item,index) in nodes"
        v-if="index != 0"
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
    name: 'homePage',
    mixins: [Mixins],
    components: {
      'com-header': comHeader,
      'com-card': comCard
    },
    data: function () {
      return {
        loading: false,
        headerTitle: '一个'
      }
    },
    computed: {
      ...mapGetters('storeHomePage', [
        'todaydate',
        'climate',
        'poster',
        'nodes'
      ])
    },
    created () {
      this.getIdlist()
    },
    methods: {
      ...mapActions('storeHomePage', [
        'getIdlist'
      ]),
      waterFallCardClick: function (node) {
        this.$router.push({
          name: this.getRouterNameByCategory(node.category),
          params: {
            id: node.item_id
          }
        })
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
  .waterFall>*{
    margin-bottom: 10px;
    background-color: white;
  }

</style>
