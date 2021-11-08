<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="title-1 font30 text-center font-bold color-333">Demos</div>
      <div class="demo-wrapper width100p flex-between  flex-wrap mt-20">
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('responsiveByGrid')">
          <img src="https://www.betterleo.com/images/music.png" alt="">
          <div class="demo-item-title">Grid响应式布局</div>
        </div>
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('music')">
          <img src="https://www.betterleo.com/images/music.png" alt="">
          <div class="demo-item-title">Music</div>
        </div>
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('about')">
          <img src="https://www.betterleo.com/images/about-demo.png" alt="">
          <div class="demo-item-title">About</div>
        </div>
        <div class="demo-item color-fff pointer heightXXL " @click="toPage('earthDay')">
          <img src="https://www.betterleo.com/images/earthday.png" alt="">
          <div class="demo-item-title">Apple EarthDay (simulate）</div>
        </div>
        <div class="demo-item color-fff pointer heightXXL" @click="toPage('earthDay')">
          <img src="https://www.betterleo.com/images/earthday.png" alt="">
          <div class="demo-item-title">Apple EarthDay (simulate）</div>
        </div>
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('responsive1')">
          <img src="https://www.betterleo.com/images/music.png" alt="">
          <div class="demo-item-title">响应式布局</div>
        </div>
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('music')">
          <img src="https://www.betterleo.com/images/music.png" alt="">
          <div class="demo-item-title">Music</div>
        </div>
        <div class="demo-item color-fff  pointer heightXL" @click="toPage('about')">
          <img src="https://www.betterleo.com/images/about-demo.png" alt="">
          <div class="demo-item-title">About</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  methods: {
    toPage (type) {
      const obj = {
        music: 'music',
        about: 'about',
        earthDay: 'earthDay',
        responsiveByGrid: 'responsiveByGrid'
      }
      this.$router.push({ name: obj[type] })
    }
  }
}
</script>
<style lang="stylus" scoped>
.content{
  width 1122px
  margin 0 auto
  min-height calc(100vh - 128px)
  overflow hidden
  padding-top 64px
  .title-1{

  }
  .demo-item{
    background-image: #Fff;
    border-radius 8px
    font-size 18px
    box-shadow 2px 2px 8px rgba(0,0,0,.2)
    overflow hidden
    position relative
    margin-bottom 14px
  }
  .heightXL{
    height 212px
  }
  .heightXXL{
    height 358px
  }
  .reponsive{
    height 200px}
  .demo-item-title{
    position absolute
    bottom 0
    left 0
    width 100%
    padding 54px 12px 12px
    text-align  right
    background-image: linear-gradient( 0deg, rgba(0,0,0,.8) 10%, rgba(0,0,0,0) 100%);
    font-weight 600
    letter-spacing 1px
  }
}
</style>
