<template>
  <div class="serial">
    <com-detail-header :title="headerTitle" class="serialHeader"></com-detail-header>
    <section class="serialScroll">
      <article>
        <!--标题-->
        <header class="serialScrollHeader">
          <h1 class="serialScrollTitle">{{serial.title}}</h1>
          <hr />
          <p class="serialScrollAuthor">文&nbsp/&nbsp{{author.user_name}}</p>
        </header>
        <!--正文-->
        <p class="serialScrollContent" v-html="serial.content"></p>
        <footer class="serialScrollFooter">
          <!--编辑-->
          <div v-if="serial.charge_edt" class="editorIntroduce">
              {{ serial.charge_edt.replace(/（|）/g, '') }}
          </div>
          <!--copyright-->
          <div v-if="serial.copyright" class="editorIntroduce">{{serial.copyright}}</div>
          <!--翻章节-->
          <div class="serialMoreContent">
            <div
              @click="moreContenClick(serial.lastid)"
              :class="{serialMoreContentNOMORE: serial.lastid <= 0}"
              class="serialMoreContenPrevious">
              <x-icon type="ios-arrow-left" size="23"></x-icon>
              <p>前一章</p>
            </div>
            <div
              @click="moreContenClick(serial.nextid)"
              :class="{serialMoreContentNOMORE: serial.nextid <= 0}"
              class="serialMoreContenPrevious">
              <p>后一章</p>
              <x-icon v-if="serial.nextid > 0" type="ios-arrow-right" size="23"></x-icon>
              <p v-else>:即将更新</p>
            </div>
          </div>
          <!--作者-->
          <section class="authorInfo">
            <h2 class="authorInfoTitle">作者</h2>
            <hr />
            <ul class="authorInfoContent">
              <li class="authorInfoContentIcon">
                <img :src="author.web_url"/>
              </li>
              <li class="authorInfoContentName">
                <p>{{ author.user_name }}&nbsp{{ author.wb_name }}</p>
                <small>{{ author.summary }}</small>
              </li>
              <li class="followButton">
                <x-button :mini="true" :plain="true">关注</x-button>
              </li>
            </ul>
          </section>
        </footer>
      </article>
    </section>
    <com-detail-footer
      :likeCount="serial.praisenum"
      :commentNum="serial.commentnum"
      class="serialFooter"></com-detail-footer>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  import comDetailHeader from '../../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'serialDetail',
    components: {
      XButton,
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeReadPage', [
        'serial',
        'author'
      ]),
      headerTitle: function () {
        return this.tag ? this.tag : '阅读.连载'
      },
      classObject: function () {
        console.log('classObject' + this.serial.nextid)
        return {
          serialMoreContentNOMORE: this.serial.nextid <= 0
        }
      }
    },
    created () {
      console.log(this.$route.params)
      window.scrollTo(0, 0)
      this.getSerialById(this.$route.params.id)
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions('storeReadPage', [
        'getSerialById'
      ]),
      moreContenClick: function (id) {
        if (id <= 0) {
          return
        }
        this.$router.push({
          name: 'SerialDetail',
          params: {
            id: id
          }
        })
      }
    },
    watch: {
      '$route' (to, from) {
        console.log('$route' + JSON.stringify(this.$route.params))
        window.scrollTo(0, 0)
        this.getSerialById(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
  .serialHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .serialScroll{
    background-color: white;
    padding: 50px 20px;
  }
  hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .serialScrollTitle{
    font-size: 2.8rem;
    font-weight: bold;
  }
  .serialScrollAuthor{
    padding-bottom: 20px;
    font-size: 1.3rem;
  }
  .serialScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .serialScrollFooter{
    margin-bottom: 20px;
  }
  .editorIntroduce{
    color: #808080;
    text-shadow: none;
    font-size: 1.2rem;
    margin: 20px 0;
  }
  .serialMoreContent>*,
  .serialMoreContent{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .serialMoreContent>*:hover{
    cursor: default;
  }
  .serialMoreContentNOMORE{
    color: #808080;
    fill: #808080;
  }
  .authorInfo{
    margin-top: 60px;
  }
  .authorInfoContent{
    display: flex;
  }
  .authorInfoContentIcon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  .authorInfoContentIcon>img{
    width: 100%;
    height: 100%;
  }
  .authorInfoContentName{
    font-size: 1.4rem;
    padding-left: 10px;
    flex: 1;
  }
  .authorInfoContentName>small{
    color: #808080;
    font-size: 1rem;
  }
  .followButton{
    align-self:center;
  }
  .serialFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;
  }
</style>
