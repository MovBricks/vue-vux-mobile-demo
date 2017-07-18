<template>
  <div class="asideUserInfo">
    <header class="asideUserInfoHeader">
      <button class="asideUserInfoHeaderBack" v-on:click="changeAsideShowFlag(false)">
        <x-icon type="ios-arrow-left" size="35" style="fill:#000"></x-icon>
      </button>
    </header>
    <group title="设置">
      <cell title="夜间模式">
        <x-icon slot="icon" type="ios-moon-outline" class="footer-icon" size="27"></x-icon>
        <check-icon :value.sync="isNightModel"></check-icon>
        <!--<x-switch title=""></x-switch>-->
      </cell>
      <cell title="其他设置" :is-link="true">
        <x-icon slot="icon" type="ios-gear-outline" class="footer-icon" size="27"></x-icon>
      </cell>
      <cell title="用户反馈" :is-link="true">
        <x-icon slot="icon" type="ios-compose-outline" class="footer-icon" size="27"></x-icon>
      </cell>
    </group>
  </div>
</template>

<script>
  import { CheckIcon, XSwitch, Group, Cell } from 'vux'
  import { mapActions } from 'vuex'

  export default {
    components: {
      CheckIcon,
      XSwitch,
      Group,
      Cell
    },
    data: function () {
      return {
        isNightModel: false
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

  .asideUserInfo{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 501;
    background-color: white;
  }
  .asideUserInfoHeader{
    background-color: rgba(255,255,255,0);
  }
  .asideUserInfoHeaderBack{
    background-color: rgba(255,255,255,0);
  }
</style>

