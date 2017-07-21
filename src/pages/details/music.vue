<template>
  <div class="music">
    <com-detail-header :title="headerTitle" class="musicHeader"></com-detail-header>
    <section class="musicScroll">
      <div class="musicPlayerWrapper">
        <button  class="musicPlayerButton" @click="musicPlayerControlClick">
          <x-icon v-if="showPlay" class="musicPlayerXicon" style="padding-left: 5px;" type="ios-play" size="44"></x-icon>
          <x-icon v-if="!showPlay" class="musicPlayerXicon" type="ios-pause" size="44"></x-icon>
        </button>
        <div class="musicCoverWrapper" :class="{animationPlayStateRun:!showPlay}" :style="{backgroundImage: backgroundUrl}">
          <!--<img :src="musicCover" alt="">-->
        </div>
        <audio id="musicPlayer" :src="musicUrl"></audio>
      </div>
      <article>
        <section>
          <h1 class="musicName">{{article.title}}</h1>
          <p class="musicFrom">{{ author.user_name }}&nbsp|&nbsp{{ article.album}}</p>
        </section>
        <!--标题-->
        <header class="musicScrollHeader">
          <h1 class="musicScrollTitle">{{article.story_title }}</h1>
          <p class="musicScrollAuthor">文╱{{ storyAuthor.user_name}}</p>
        </header>
        <!--正文-->
        <p class="musicScrollContent" v-html="article.story"></p>
        <footer class="musicScrollFooter">
          <!--编辑-->
          <div v-if="article.charge_edt" class="editorIntroduce">
              {{ article.charge_edt.replace(/（|）/g, '') }}
          </div>
          <!--copyright-->
          <div v-if="article.copyright">{{article.copyright}}</div>
          <!--作者-->
          <section class="authorInfo">
            <h2 class="authorInfoTitle">作者</h2>
            <hr />
            <ul class="authorInfoContent">
              <li class="authorInfoContentIcon">
                <img :src="storyAuthor.web_url"/>
              </li>
              <li class="authorInfoContentName">
                <p>{{ storyAuthor.user_name }}&nbsp{{ storyAuthor.wb_name }}</p>
                <small>{{ storyAuthor.summary }}</small>
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
      :likeCount="article.praisenum"
      :commentNum="article.commentnum"
      class="musicFooter"></com-detail-footer>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  import comDetailHeader from '../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'musicDetail',
    components: {
      XButton,
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeMusicPage', [
        'article',
        'author',
        'storyAuthor',
        'musicCover',
        'musicUrl'
      ]),
      headerTitle: function () {
        return this.tag ? this.tag : '一个音乐'
      },
      backgroundUrl: function () {
        return 'url(' + this.musicCover + ')'
      }
    },
    created () {
      console.log(this.$route.params)
      window.scrollTo(0, 0)
      this.getMusicById(this.$route.params.id)
    },
    data: function () {
      return {
        showPlay: true
      }
    },
    methods: {
      ...mapActions('storeMusicPage', [
        'getMusicById',
        'getMusicUrlById'
      ]),
      musicPlayerControlClick: function () {
        if (this.showPlay) {
          this.showPlay = false
          document.getElementById('musicPlayer').play()
        } else {
          this.showPlay = true
          document.getElementById('musicPlayer').pause()
        }
      }
    }
  }
</script>

<style scoped>
  .musicHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .musicScroll{
    background-color: white;
    padding: 50px 20px;
  }
  .musicPlayerWrapper{
    position: relative;
    overflow: hidden;
    height: 300px;
  }
  .musicPlayerButton{
    position: absolute;
    top: 30px;
    left: 40px;
    z-index: 5;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
  }
  .musicPlayerXicon{
    fill: #ffffff;
  }
  .musicCoverWrapper{
    background: center no-repeat;
    background-size: cover;
    position: absolute;
    box-sizing: border-box;
    top: -150px;
    left: -140px;
    height: 400px;
    width: 400px;
    border: 10px solid white;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    animation: rotate 20s linear 0s infinite;
    animation-play-state: paused
  }
  .animationPlayStateRun{
    animation-play-state: running
  }

  @keyframes rotate
  {
    0%   {transform: rotate(0deg);}
    50%  {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
  }
  .musicCoverWrapper>img{
    width: 100%;
  }
  hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .musicName,
  .musicFrom{
    text-align: center;
    width: 100%;
    color: #808080;
    text-shadow: none;
    font-size: 1.2rem;
  }
  .musicScrollTitle{
    font-size: 2.8rem;
    /*font-weight: bold;*/
    margin: 20px 0;
  }
  .musicScrollAuthor{
    padding-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }
  .musicScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .musicScrollFooter{
    margin-bottom: 20px;
  }

  .editorIntroduce{
    color: #808080;
    text-shadow: none;
    font-size: 1.2rem;
    margin: 20px 0;
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
  .musicFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;
  }


</style>
