<template>
  <div>
    <Nuxt />
    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace icon="home-o" to="/">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/test">
        关于配置
      </van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="/testa">
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
}
</script>

<style>

</style>
