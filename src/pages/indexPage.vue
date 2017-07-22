<template>
  <div>
    <component :is="currentViewArray[footerTabbarIndex]" ></component>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft">
      <aside-user-info v-show="asideShowFlag" class="animatedControl"></aside-user-info>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight">
      <aside-search v-show="asideSearchShowFlag" class="animatedControl"></aside-search>
    </transition>
    <footer class="footNavBar">
        <tabbar class="footNavBarTab">
          <tabbar-item
            :class="{footNavBarTabItemOn: footerTabbarIndex === 0}"
            @on-item-click="footerTabbarClick(0)">
            <x-icon slot="icon" type="ios-home-outline" class="footer-icon" size="27"></x-icon>
          </tabbar-item>
          <tabbar-item
            :class="{footNavBarTabItemOn: footerTabbarIndex === 1}"
            @on-item-click="footerTabbarClick(1)">
            <x-icon slot="icon" type="ios-book-outline" class="footer-icon" size="27"></x-icon>
          </tabbar-item>
          <tabbar-item
            :class="{footNavBarTabItemOn: footerTabbarIndex === 2}"
            @on-item-click="footerTabbarClick(2)">
            <x-icon slot="icon" type="ios-musical-notes" class="footer-icon" size="27"></x-icon>
          </tabbar-item>
          <tabbar-item
            :class="{footNavBarTabItemOn: footerTabbarIndex === 3}"
            @on-item-click="footerTabbarClick(3)">
            <x-icon slot="icon" type="ios-videocam-outline" class="footer-icon" size="27"></x-icon>
          </tabbar-item>
        </tabbar>
    </footer>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { ViewBox, Tabbar, TabbarItem } from 'vux'
  import asideUserInfo from '../components/aside/asideUserInfo.vue'
  import asideSearch from '../components/aside/asideSearch.vue'
  import homePage from './homePage.vue'
  import moviePage from './moviePage.vue'
  import musicPage from './musicPage.vue'
  import readPage from './readPage.vue'

  export default {
    name: 'indexPage',
    components: {
      ViewBox,
      Tabbar,
      TabbarItem,
      'aside-search': asideSearch,
      'aside-user-info': asideUserInfo,
      'page-home': homePage,
      'page-movie': moviePage,
      'page-music': musicPage,
      'page-read': readPage
    },
    data: function () {
      return {
        currentViewArray: [
          'page-home',
          'page-read',
          'page-music',
          'page-movie'
        ]
      }
    },
    computed: {
      ...mapGetters('storeIndexPage', {
        asideSearchShowFlag: 'getAsideSearchShowFlag',
        asideShowFlag: 'getAsideShowFlag',
        footerTabbarIndex: 'getFooterTabbarIndex'
      })
    },
    methods: {
      ...mapActions('storeIndexPage', {
        footerTabbarClick: 'changeFooterTabbarIndex'
      })
    }
  }
</script>

<style scoped>
  .animatedControl{
    animation-duration: .5s;
    -webkit-animation-duration: .5s;
  }
  .footNavBar{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }
  .footNavBarTab{
    position: relative;
  }
  .footNavBarTabItemOn{
    fill: white;
    background-color: rgb(53,73,94);
  }

</style>
