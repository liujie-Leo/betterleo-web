<template>
  <div class="main">
    <section class="section-0">
      <nav class="nav" />
    </section>
    <section class="section-1">
      <div class="section-1-content">
        <el-carousel>
          <el-carousel-item>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ntGe?ver=8414&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=182&y=223&s=1833&d=687&aim=true" class="car-img">
          </el-carousel-item>
          <el-carousel-item>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ntGe?ver=8414&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=182&y=223&s=1833&d=687&aim=true" class="car-img">
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <section class="section-2">
      <div class="section-2-content">
        <div class="section-2-content-item item-margin">
          <img class="section-2-content-img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FTtq?ver=dae2&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true">
          <div>Surface Laptop Go</div>
          <p>选择轻盈的 Surface 笔记本电脑，造型时尚与卓越性能兼备，充分利用每一天。</p>
        </div>
        <div class="section-2-content-item item-margin">
          <img class="section-2-content-img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rR?ver=1daf&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true">
          <div>Microsoft 365</div>
          <p>只需一次便捷的订阅，便可使用高级 Office 应用、额外的云存储、高级安全性等功能。</p>
        </div>
        <div class="section-2-content-item item-margin">
          <img class="section-2-content-img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DkWk?ver=c436&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="">
          <div>不错过任一美妙节拍</div>
          <p>探索最新的 Surface 音频，体验舒适度极佳的设计、沉浸式的音效和全天电池续航。购买 Surface Earbuds </p>
        </div>
        <div class="section-2-content-item">
          <img class="section-2-content-img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/REHt8H?ver=8787&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="">
          <div>Xbox One S</div>
          <p>物超所值的游戏和娱乐设备，配备 4K 蓝光和视频流。</p>
        </div>
      </div>
    </section>
    <section class="section-3">
      <div class="section-3-content">
        <!-- <img class="section-3-img" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4MEu6?ver=f30c&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=198&s=2120&d=795&aim=true" alt=""> -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  methods: {
    onResize () {
      const bannerWidth = document.getElementsByClassName('el-carousel__container')[0].clientWidth
      console.log(bannerWidth)
      const bannerHeight = bannerWidth / (8 / 3)
      const bannerEl = document.getElementsByClassName('el-carousel__item')
      bannerEl[0].style.height = bannerHeight + 'px'
      const bannerEl1 = document.getElementsByClassName('el-carousel__container')
      bannerEl1[0].style.height = bannerHeight + 'px'
      const bannerEl2 = document.getElementsByClassName('el-carousel')
      bannerEl2[0].style.height = bannerHeight + 'px'
    }
  }
}
</script>
<style lang="stylus" scoped>
.main{
  background-color #fafafa
  height 2000px
}
.section-1{
  padding 0 25px
  width 100%
}
.section-1-content{
  max-width 1600px
  margin 0 auto
}
.nav{
  height 64px
  background-color #000
}
.banner-img{
  width 100%
}
.section-2{
  width 100%
  padding 0 25px
  margin-top 24px
}
.section-2-content{
  max-width 1600px
  margin 0 auto
  display flex
}
.section-2-content-img{
  margin-bottom 24px
  width 100%
}
.section-2-content-item{
  flex 1
}
.item-margin{
  margin-right 24px
}
.section-2-content-item div{
  font-size 20px
  font-weight 600
}
.section-2-content-item p{
  font-size 15px
  margin-top 12px
}
.section-3{
  width 100%
  padding 0 25px
  margin 24px auto 0
}
.section-3-content{
  width 100%
  max-width 1600px
  margin 0 auto
  height 600px
  background-size 100% 100%
  background-image url('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4MEu6?ver=f30c&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=198&s=2120&d=795&aim=true')
}
.section-3-img{
  width 100%
}
/deep/ .el-carousel__container{
  height 100%
}
@media screen and (max-width:980px){
  .section-1{
    width 100%
    padding 0
  }
  .car-img{
    width 100%
  }
  .section-2-content{
    flex-wrap wrap
    justify-content space-between
  }
  .section-2-content-item{
    width 49%
    flex none
  }
  .item-margin{
    margin 0 0 24px 0
  }
}
@media screen and (max-width:540px){
  .section-2-content-item{
    width 100%
  }
}
</style>
