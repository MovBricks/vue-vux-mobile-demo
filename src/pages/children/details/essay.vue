<template>
  <div class="essay">
    <com-detail-header :title="headerTitle" class="essayHeader"></com-detail-header>
    <section class="essayScroll">
      <article>
        <header class="essayScrollHeader">
          <h1 class="essayScrollTitle">{{article.hp_title}}</h1>
          <hr />
          <p class="essayScrollAuthor">文&nbsp/&nbsp{{author.user_name}}</p>
        </header>
        <p class="essayScrollContent" v-html="this.article.hp_content"></p>
      </article>
    </section>
    <com-detail-footer class="essayFooter"></com-detail-footer>
  </div>
</template>

<script>
  import comDetailHeader from '../../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'essayPage',
    components: {
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeReadPage', [
        'article',
        'tag',
        'author'
      ])
    },
    created () {
//      this.getEssayById(this.$route.params.id)
      this.getEssayById(2632)
    },
    data: function () {
      return {
        headerTitle: '一个阅读'
      }
    },
    methods: {
      ...mapActions('storeReadPage', [
        'getEssayById'
      ])
    }
  }
</script>

<style scoped>
  .essayHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .essayScroll{
    background-color: white;
    padding: 50px 20px;
  }
  .essayScrollHeader hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .essayScrollTitle{
    font-size: 2.8rem;
    font-weight: bold;
  }
  .essayScrollAuthor{
    padding-bottom: 20px;
    font-size: 1.3rem;
  }
  .essayScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .essayFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;

  }
</style>
