<template>
  <div class="main">
    <div class="container">
      <div class="contact-box">
        <el-popover
          placement="top"
          width="140"
          trigger="hover"
        >
          <img src="https://www.betterleo.com/images/wechat.png">
          <div slot="reference" class="iconfont iconweixin reset-weixin pointer" />
        </el-popover>
      </div>
      <div class="menu">
        <ul class="menu-list fs-14">
          <a class="copy-code" target="_blank" href="https://beian.miit.gov.cn/">湘ICP备2021003368号-1</a>
          <li>Develop By Leo</li>
          <li>
            <img :class="[{'author-img':true},{'avatar-animation':isShowAvatarAnimation}]" src="https://www.betterleo.com/images/author.png" @click="showAnimation('avatar')">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowAnimation: false,
      isShowTTAnimation: false,
      isShowAvatarAnimation: false
    }
  },
  methods: {
    showAnimation (type) {
      const obj = {
        wx: 'isShowAnimation',
        tt: 'isShowTTAnimation',
        avatar: 'isShowAvatarAnimation'
      }
      this[obj[type]] = true
      setTimeout(() => {
        this[obj[type]] = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.main
  height 64px
  width  100%
  min-width 1122px
  background-color $white
  box-shadow 1px 0px 8px rgba(0,0,0,0.2)
  border-radius 4px 4px 0px 0px
  display flex
  justify-content center
  position: sticky
  top 0
  left 0
  z-index 999
.container
  width 1122px
  height 100%
  display flex
  justify-content space-between
.logo-box
  height 100%
  width 20%
  display flex
  justify-content center
  align-items center
  cursor pointer
.logo-img
  height 40px
  width 40px
.logo-text
  color $blue
  font-weight 600
  margin-left 8px
  cursor pointer
  background-image:-webkit-linear-gradient(right,$main-2,$main-5);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
.contact-box
  height 64px
  width 12%
  display flex
  align-items center
.contact-box img
  height 28px
  width 28px
  cursor pointer
  margin-right 16px
.menu
  height 100%
  width 68%
  display flex
  justify-content flex-end
.menu-list
  width 350px
  height 100%
  display flex
  align-items center
  justify-content flex-end
  margin 0
  padding 0
  list-style none
.menu-list li
  color $main-2
.author-img{
  border-radius 50%
  height 32px
  width 32px
  margin-left 12px
  cursor pointer
}
.reset-weixin
  font-size 28px

.copy-code{
  text-decoration:none;
  margin-right:30px;
  color:#A4B0BE;
}

.wx-animation{
  animation: jello-horizontal 0.9s both;
}
.tt-animation{
  animation: jello-horizontal 0.9s both;
}
.avatar-animation{
  animation: jello-horizontal 0.9s both;
}
/deep/ .el-popover__reference-wrapper img:focus
  outline none

// 暗黑模式
.dark
  .main
    background-color $dark-light
  .reset-weixin
    color $main-2
</style>
