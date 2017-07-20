<template>
  <footer class="footerNavBar">
    <ul class="footerNavBarIcons">
      <li class="footerNavBarIcon"><x-icon class="footerNavBarXicon" type="ios-heart-outline" size="25"></x-icon></li>
      <li class="footerNavBarIcon"><x-icon class="footerNavBarXicon" type="ios-bookmarks-outline" size="25"></x-icon></li>
      <li class="footerNavBarIcon"><x-icon class="footerNavBarXicon" type="ios-chatbubble-outline" size="25"></x-icon></li>
    </ul>
    <div class="footerNavBarLike">
      <p>{{likeCount}}</p><p>喜欢</p>
    </div>
    <a class="footerNavBarCommit">
      <p>{{commentNum}}</p><p>评论</p>
    </a>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      likeCount: {
        default: 0,
        type: Number
      },
      commentNum: {
        default: 0,
        type: Number
      }
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions('storeIndexPage', [
        'changeAsideShowFlag'
      ])
    }
  }
</script>
<style scoped>
  .footerNavBar{
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 20px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.5);
    height: 48px;
    font-size: 1.2rem;
    color: #ABABAB;
  }
  .footerNavBar>*{
    display: flex;
  }
  .footerNavBarIcons{
    flex: 1;
  }
  .footerNavBarIcon{
    margin-right: 24px;
    display: flex;
    align-items: center;
  }
  .footerNavBarXicon{
    fill: #ABABAB;
  }
  /*.footerNavBarCommit,*/
  .footerNavBarLike{
    padding-right: 10px;
  }
</style>

