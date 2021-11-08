<template>
  <div id="app" :class="[{'dark':$store.state.status.darkModel}]">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<script>
import ApiServiceUser from '@/api/service/api/user'
import { getLocalStorage } from '@/utils/localStorage'
const apiServiceUser = new ApiServiceUser()
export default {
  name: 'App',
  mounted () {
    this.getUserInfo()
    this.getDarkModel()
  },
  methods: {
    getUserInfo () {
      apiServiceUser.getUserInfo().then(res => {
        this.userInfo = res.data
        this.$store.commit('SAVE_USER', res.data)
      }).catch(e => {
        this.$store.commit('CLEAR_USER')
      })
    },
    getDarkModel () {
      const darkModel = getLocalStorage('darkModel') === 'true'
      this.$store.commit('SET_DARKMODEL', darkModel)
    },
    test () {
      // console.log('12s3')
    }
  }
}
</script>

<style lang="stylus">
body
  padding 0px
  margin 0px
button
  padding 0
  outline none
img
  max-width 100%
  max-height 100%
*{
  box-sizing border-box
  font-family Helvetica
}
</style>
