<template>
  <div class="homePage">
    <com-header :title="headerTitle" class="homePageHeader"></com-header>
    <!--<section-->
      <!--v-infinite-scroll="loadMore"-->
      <!--infinite-scroll-disabled="loading"-->
      <!--infinite-scroll-distance="10"-->
      <!--class="waterFall" id="IdWaterFall">-->
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
      ></com-card>
        <!--:imgSrc="item.img_url"-->
      <!--&gt;</com-card>-->
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
      getRouterNameByCategory: function (Category) {
        const map = {
          '1': 'EssayDetail',
          '2': 'SerialDetail',
          '3': 'QuestionDetail',
          '4': 'Music',
          '5': 'Movie'
        }
        return Category ? map[Category] : ''
      },
      getTagByCategory: function (Category) {
        const map = {
          '0': '插画',
          '1': 'ONE STORY',
          '2': '连载',
          '3': '问答',
          '4': '音乐',
          '5': '影视'
        }
        return Category ? map[Category] : ''
      },
      getTag: function (node) {
        let taglist = node.tag_list
        let tag = ''
        if (taglist.length > 0) {
          tag = taglist[0].title
        } else {
          tag = this.getTagByCategory(node.category)
        }
        return tag
      },
      getAuthorName: function (node) {
        let retStr
        if (node.author) {
          retStr = node.author.user_name
          if (node.category !== '3') {
            retStr = '文/' + retStr
          }
        }
        return retStr
      },
      getTimeBefore: function (node) {
        let now = new Date()
        let diffValue = (now.getTime() - Date.parse(node.post_date)) / 1000
        let retStr
        if (diffValue / (24 * 3600) >= 1) {
          retStr = '' + parseInt(diffValue / (24 * 3600)) + '天前'
        } else if (diffValue / 3600 >= 1) {
          retStr = '' + parseInt(diffValue / 3600) + '小时前'
        } else if (diffValue / 3600 < 1) {
          retStr = '刚刚'
        }
        return retStr
      },
      waterFallCardClick: function (node) {
        this.$router.push({
          name: this.getRouterNameByCategory(node.category),
          params: {
            id: node.item_id,
            test: 223
          }
        })
      },
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
  .waterFall>*{
    margin-bottom: 10px;
    background-color: white;
  }

</style>
