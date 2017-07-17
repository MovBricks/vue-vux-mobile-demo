<template>
  <div class="pageIndex">
    <!--<component-->
      <!--:is="currentViewArray[footerTabbarIndex]"-->
      <!--@asideUserInfoClick="asideShow()"-->
    <!--&gt;</component>-->
    <component
      :is="currentViewArray[footerTabbarIndex]"
    ></component>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft">
      <!--<aside-user-info @asideUserInfoBackClick="asideHide()" v-show="asideShowFlag"></aside-user-info>-->
      <aside-user-info v-show="asideShowFlag"></aside-user-info>
    </transition>
    <footer class="footNavBar">
      <tabbar>
        <tabbar-item @on-item-click="footerTabbarClick(0)">
          <x-icon slot="icon" type="ios-home-outline" class="footer-icon" size="27"></x-icon>
        </tabbar-item>
        <tabbar-item @on-item-click="footerTabbarClick(1)">
          <x-icon slot="icon" type="ios-book-outline" class="footer-icon" size="27"></x-icon>
        </tabbar-item>
        <tabbar-item @on-item-click="footerTabbarClick(2)">
          <x-icon slot="icon" type="ios-musical-notes" class="footer-icon" size="27"></x-icon>
        </tabbar-item>
        <tabbar-item @on-item-click="footerTabbarClick(3)">
          <x-icon slot="icon" type="ios-videocam-outline" class="footer-icon" size="27"></x-icon>
        </tabbar-item>
      </tabbar>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Tabbar, TabbarItem } from 'vux'
  import asideUserInfo from '../components/aside/asideUserInfo.vue'
  import homePage from './children/homePage.vue'
  import moviePage from './children/moviePage.vue'
  import musicPage from './children/musicPage.vue'
  import readpage from './children/readPage.vue'

  export default {
    name: 'indexPage',
    components: {
      Tabbar,
      TabbarItem,
      'aside-user-info': asideUserInfo,
      'page-home': homePage,
      'page-movie': moviePage,
      'page-music': musicPage,
      'page-read': readpage
    },
    data: function () {
      return {
        currentViewArray: [
          'page-home',
          'page-movie',
          'page-music',
          'page-read'
        ],
        footerTabbarIndex: 0
      }
    },
    computed: {
      ...mapGetters({
        asideShowFlag: 'getAsideShowFlag'
      })
    },
    methods: {
//      asideShow () {
//        this.asideShowFlag = true
//      },
//      asideHide () {
//        this.asideShowFlag = false
//      },
      footerTabbarClick (index) {
        this.footerTabbarIndex = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .footNavBar .weui-bar__item_on{
    fill: white;
    background-color: rgb(53,73,94);
  }
</style>
