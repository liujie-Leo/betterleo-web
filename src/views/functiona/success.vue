<template>
  <div>
    <Header />
    <div class="main-success">
      <div :class="[{'main-box':true},{'animation':startAnimation}]">
        <img src="../../assets/image/success.svg" alt="">
        <!-- <img src="../../assets/image/success.png" alt=""> -->
        <div>
          <div class="title">文章提交成功</div>
          <span class="btn" @click="gotoPage('write')">再写一篇</span>
          <span class="btn" @click="gotoPage('home')">回到主页</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      startAnimation: false
    }
  },
  mounted () {
    this.startAnim()
  },
  methods: {
    gotoPage (key) {
      const pathObj = {
        home: '/',
        write: '/write'
      }
      this.$router.push({
        path: pathObj[key]
      })
    },
    startAnim () {
      setTimeout(() => {
        this.startAnimation = true
      }, 10)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.main-success
  height calc(100vh - 128px)
  width 100%
  background-color #fff
  // background-color $main-bg
  background-color #fff
  overflow hidden
  display flex
  justify-content center

.main-box
  width 540px
  height 500px
  margin-top 62px
  display flex
  justify-content space-between
  align-items center
  transition 1s
.main-box img
  height 346px
  width 346px
  margin-right 12px
.title
  font-size 30px
  color #444
  font-weight 600
.btn
  display inline-block
  margin-right 6px
  margin-top 6px
  color #888
  cursor pointer
.btn:hover
  text-decoration underline
.animation
  margin-top 24px
</style>
