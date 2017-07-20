<template>
  <div>
    <component :is="currentViewArray[footerTabbarIndex]"></component>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft">
      <aside-user-info v-show="asideShowFlag"></aside-user-info>
    </transition>
    <footer class="footNavBar">
        <tabbar class="footNavBarTab">
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
  import { ViewBox, Tabbar, TabbarItem } from 'vux'
  import asideUserInfo from '../components/aside/asideUserInfo.vue'
  import homePage from './children/homePage.vue'
  import moviePage from './children/moviePage.vue'
  import musicPage from './children/musicPage.vue'
  import readPage from './children/readPage.vue'

  export default {
    name: 'indexPage',
    components: {
      ViewBox,
      Tabbar,
      TabbarItem,
      'aside-user-info': asideUserInfo,
      'page-home': homePage,
      'page-movie': moviePage,
      'page-music': musicPage,
      'page-read': readPage
    },
    data: function () {
      return {
        currentViewArray: [
          'page-read',
          'page-home',
          'page-movie',
          'page-music'
        ],
        footerTabbarIndex: 0
      }
    },
    computed: {
      ...mapGetters('storeIndexPage', {
        asideShowFlag: 'getAsideShowFlag'
      })
    },
    methods: {
      footerTabbarClick (index) {
        this.footerTabbarIndex = index
      }
    }
  }
</script>

<style scoped>
  .footNavBar{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .footNavBarTab{
    position: relative;
  }
  .footNavBar .weui-bar__item_on{
    fill: white;
    background-color: rgb(53,73,94);
  }

</style>
