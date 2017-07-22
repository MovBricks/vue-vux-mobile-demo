<template>
  <article class="waterFallCard">
    <div class="cardTag">-&nbsp{{tag}}&nbsp-</div>
    <header>
      <h2 class="cardHeaderTitle">{{title}}</h2>
      <p class="cardHeaderAuthor">{{author}}</p>
    </header>
    <div class="cardContent">
      <div class="cardContentImgWrapper">
        <div class="cardContentImgDashed" v-if="category === '影视'"></div>
        <x-img
          v-if="category !== '音乐'"
          class="cardContentImg"
          :default-src="defaultImg"
          :src="imgSrc"
          @on-success="success"
          @on-error="error"
          :offset="400"
          container="#IdWaterFall">
        </x-img>
        <img
          :style="{backgroundImage: backgroundUrl}"
          v-if="category === '音乐'"
          class="cardMusicMask"
          src="../../assets/music-mask.png"
          alt="" />
        <div class="cardContentImgDashed" v-if="category === '影视'"></div>
      </div>
      <p class="cardContentForward">{{forward}}</p>
    </div>
    <footer class="cardFooter">
      <div class="cardFooterTimeBefore">{{timeBefore}}</div>
      <div class="cardFooterLike">
        <div class="cardFooterLikeCount">{{likeCount}}</div><x-icon class="cardFooterXicon" type="ios-heart-outline" size="25"></x-icon>
      </div>
      <button><x-icon class="cardFooterXicon" type="share" size="25"></x-icon></button>
    </footer>
  </article>
</template>

<script>
  import { XImg } from 'vux'
  import { mapActions } from 'vuex'
  import imgDefaultSrc from '../../assets/one-no-img.png'

  export default {
    props: {
      category: {
        default: ''
      },
      tag: {
        default: '未知',
        type: String
      },
      title: {
        default: '未知',
        type: String
      },
      author: {
        default: '未知',
        type: String
      },
      imgSrc: {
        default: imgDefaultSrc,
        type: String
      },
      forward: {
        default: '未知',
        type: String
      },
      timeBefore: {
        default: '未知',
        type: String
      },
      likeCount: {
        default: 0,
        type: Number
      }
    },
    data: function () {
      return {
        defaultImg: imgDefaultSrc
      }
    },
    components: {
      XImg
    },
    computed: {
      backgroundUrl: function () {
        return 'url(' + this.imgSrc + ')'
      }
    },
    methods: {
      success: function () {
        console.log('img lazy-load success')
      },
      error: function () {
        console.log('img lazy-load error')
      },
      ...mapActions('storeIndexPage', [
        'changeAsideShowFlag'
      ])
    }
  }
</script>
<style scoped>
  .waterFallCard{
    padding: 10px 20px;
  }
  .cardTag{
    color: #808080;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
  }
  .cardHeaderTitle{
    font-weight: 500;
    font-size: 2rem;
  }
  .cardHeaderAuthor{
    color: #808080;
    font-size: 1.3rem;
    padding: 5px 0;
  }
  .cardContentImgWrapper{
    margin: 10px 0;
    width: 100%;
    /*height: 400px;*/
    max-height: 900px;
    /*height: 250px;*/
    /*clip:rect(0px,60px,200px,0px);*/
    overflow: hidden;
  }
  .cardMusicMask{
    width: 100%;
    background: center no-repeat;
    background-size: contain;
    background-origin: content-box;
  }
  .cardContentImgDashed{
    margin: 10px 0;
    height: 15px;
    width: 100%;
    background: url("../../assets/moviedashed.png") center left repeat-x;
    background-size: contain;
  }
  .cardContentForward{
    color: #878787;
    font-size: 1.4rem;
  }
  .cardContentImg{
    display: block;
    width: 100%;
    max-height: 800px;
  }
  .cardContentImgMusicStyle{
    position: absolute;
  }
  .cardFooter{
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .cardFooter>*{
    padding-left: 5px;
  }
  .cardFooterXicon{
    fill: #ABABAB;
  }
  .cardFooterTimeBefore{
    flex-grow: 1;
    padding-left: 0;
    font-size: 1.4rem;
    color: #ABABAB;
  }
  .cardFooterLike{
    display: flex;
  }
  .cardFooterLikeCount{
    padding-right: 3px;
    padding-top: 2px;
    font-size: 1.4rem;
    color: #ABABAB;
  }
</style>

