<template>
  <article class="waterFallCard">
    <div class="cardTag">-&nbsp{{tag}}&nbsp-</div>
    <header>
      <h2>title</h2>
      <p>author</p>
    </header>
    <div class="cardContent">
      <!--<img src="http://image.wufazhuce.com/FuWOiw8PawWWIBCneVI9SSn8m2-S" alt="文章图片">-->
      <div class="cardContentImgWrapper">
        <img src="../../assets/logo.png" alt="文章图片">
      </div>
      <p>forward</p>
    </div>
    <footer class="cardFooter">
      <div class="cardFooterTimeBefore">timeBefore</div>
      <div class="cardFooterLike">
        <div>likeCount</div><x-icon type="ios-heart-outline" size="27"></x-icon>
      </div>
      <button><x-icon type="share" size="27"></x-icon></button>
    </footer>
  </article>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      tag: {
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
  .waterFallCard{
    padding: 10px 20px;
  }
  .cardTag{
    display: flex;
    justify-content: center;
  }
  .cardContentImgWrapper{
    width: 100%;
    height: auto;
    max-height: 800px;
    /*height: 250px;*/
    /*clip:rect(0px,60px,200px,0px);*/
  }
  .cardFooter{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .cardFooter>*{
    padding-left: 5px;
  }
  .cardFooterTimeBefore{
    flex-grow: 1;
    padding-left: 0;
  }
  .cardFooterLike{
    display: flex;
  }
</style>

