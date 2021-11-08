<template>
  <main :class="[{'main':true},{'blur':dialogVisible}]">
    <section class="section section-2030">
      <div class="section-2030-title flex-c flex-d-c out-animation-slowly">
        <h1>我们的运营</h1>
        <h1>已实现碳中和</h1>
        <span class="line-2030-box">
          <h2>并将于 <em class="line-2030">2030</em> 年在</h2>
          <h2>每一个产品上实现</h2>
        </span>
      </div>
      <div class="how flex-c flex-d-c">
        <ul>
          <li ref="howDesign" class="how-design">如何研发设计、</li>
          <li ref="howMade" class="how-made">如何制造、</li>
          <li ref="howTransmit" class="how-transmit">如何进行运输、</li>
          <li ref="howUse" class="how-use">如何使用、</li>
          <li ref="howReturn" class="how-return">如何回收、</li>
        </ul>
      </div>
      <div ref="logo" class="logo flex-c">
        <img src="https://www.betterleo.com/images/demoList/appleEarthDay/logo.png" class="logo-img">
        <h1>全盘布局。</h1>
      </div>
    </section>
    <section class="section section-earth">
      <div class="card-box flex">
        <section class="earth flex-sb-c">
          <div class="earth-left flex-c flex-d-c">
            <div class="earth-title">地球不能等，</div>
            <div class="earth-title">我们不会等。</div>
            <div class="future-btn pointer" @click="onClickFuture">进一步了解</div>
          </div>
          <div class="earth-right">
            <img src="https://www.betterleo.com/images/demoList/appleEarthDay/earth.png" class="earth-img">
          </div>
        </section>
        <section class="use-made flex-c flex-d-c">
          <h2>使用</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/weather.png" class="weather">
          <h2>制造</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/phone.png" class="phone">
        </section>
        <section class="use-made flex-c flex-d-c">
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/100.png" class="weather">
          <h2>再生铝金属</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/1000.png" class="phone">
          <h2>坚定</h2>
        </section>
        <section class="use-made flex-c flex-d-c">
          <h2>使用</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/weather.png" class="weather">
          <h2>制造</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/phone.png" class="phone">
        </section>
        <section class="use-made flex-c flex-d-c">
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/100.png" class="weather">
          <h2>再生铝金属</h2>
          <img src="https://www.betterleo.com/images/demoList/appleEarthDay/1000.png" class="phone">
          <h2>坚定</h2>
        </section>
      </div>
    </section>
    <section class="section do-more">
      <div class="do-more-title">
        <h2>能做的还有很多</h2>
        <h3>我们在环保方面的努力，不止于减少碳排放。</h3>
      </div>
    </section>
    <section class="section section-lisa">
      <div class="leo-box flex-c flex-d-c">
        <h2 class="leo-sentence">
          <span class="green-quote">“</span>
          我们不认为自己知道所有的答案，但是我们有实实在在的奋斗目标，也有一个遍布全球的业务网络，共同致力于与人们、与地球一起向正确的方向迈进。
          <span class="green-quote">”</span>
        </h2>
        <span class="leo">Leo</span>
        <span class="position">环境、政策与社会事务副总裁</span>
      </div>
    </section>
    <apple-dialog :visible="dialogVisible">
      <h2>我们的目标是</h2>
      <h2>在2030年实现碳中和</h2>
      <div class="content">
        <span>采用低碳设计。</span>
        <span>我们使用更多再生材料制造产品，并不断努力减少设备的能耗。</span>
      </div>
      <div class="content">
        <span>提高能源效率。</span>
        <span>我们以更高效的方式使用能源，范围涵盖零售店、办公室、数据中心，以及生产基地。</span>
      </div>
      <div class="content">
        <span>使用可再生能源。</span>
        <span>我们承诺将逐步在整个制造供应链上使用 100% 可再生电力，由太阳能、风能等可再生能源项目提供。</span>
      </div>
      <div class="content">
        <span>消除直接排放。</span>
        <span>我们在工厂和供应链推行各种创新流程，以消除温室气体的排放。</span>
      </div>
      <div class="content">
        <span>投资基于自然的解决方案。</span>
        <span>我们在人工林和生态系统恢复方面进行投资，在与各地社区和谐共处的同时消除大气中的碳足迹。</span>
      </div>
    </apple-dialog>
  </main>
</template>
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      dialogVisible: false
    }
  },
  watch: {
    scrollTop (newValue) {
      if (newValue >= 84) {
        this.$refs.howDesign.style.opacity = 1
      } else {
        this.$refs.howDesign.style.opacity = 0
      }
      if (newValue >= 168) {
        this.$refs.howMade.style.opacity = 1
      } else {
        this.$refs.howMade.style.opacity = 0
      }
      if (newValue >= 252) {
        this.$refs.howTransmit.style.opacity = 1
      } else {
        this.$refs.howTransmit.style.opacity = 0
      }
      if (newValue >= 336) {
        this.$refs.howUse.style.opacity = 1
      } else {
        this.$refs.howUse.style.opacity = 0
      }
      if (newValue >= 392) {
        this.$refs.howReturn.style.opacity = 1
      } else {
        this.$refs.howReturn.style.opacity = 0
      }
      if (newValue >= 564) {
        this.$refs.logo.style.opacity = 1
      } else {
        this.$refs.logo.style.opacity = 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onSrollChange)
  },
  methods: {
    onSrollChange () {
      const height = document.documentElement.scrollTop
      this.scrollTop = height
      // console.log(height)
    },
    onClickFuture () {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
em{
  font-style normal
}
.blur{
  filter blur(30px)
}
.main{
  width 100%
  min-width 440px
  transition .5s
  background-color #F5F5F7
}
.section{
  width 100%
}
// width >= 980px
h1{
  line-height 110px
  font-size 96px
}
h2{
  font-size 64px
  line-height 78px
  letter-spacing 2px
}

.section-2030{
    width 100%
}
.section-2030-title{
  height calc(100vh - 188px)
  width 980px
  margin 0 auto
}
.line-2030-box{
  margin-top 24px
}
.line-2030{
  position relative
}
.line-2030::before{
  content ''
  background-image url('https://www.betterleo.com/images/demoList/appleEarthDay/2030.png')
  position absolute
  bottom -4px
  left 0
  height 16px
  width 154px
  background-size 154px 16px
}

.how{
  width 980px
  margin 0 auto
  li{
    font-size 64px
    margin-bottom 26px
    font-weight 600
    text-align center
    opacity 0
    transition .2s
  }
}
.logo{
  width 980px
  margin 48px auto 0
  opacity 0
  transition .6s
}
.logo-img{
  width 63px
  height 76px
  margin-right 36px
}

.section-earth{
  width 100%
  margin-top 67px
}
.card-box{
  max-width 1140px
  margin 0 auto
  flex-wrap wrap
  justify-content space-between
}
.card-box > section{
  margin-bottom 32px
}
.weather{
  width 178px
  margin-top 24px
  margin-bottom 12px
  height 65px
}
.phone{
  width 168px
  height 65px
  margin-top 24px
}
.earth{
  width 1140px
  height 740px
  background-color #1d1d1f
  border-radius 20px
  padding-right 64px
}
.earth-img{
  width 454px
  height 460px
}
.earth-title{
  color $white
  font-size 64px
  font-weight 600
}
.earth-left{
  width 57%
}
.future-btn{
  color $white
  height 42px
  width 120px
  border-radius 30px
  font-size 17px
  border 2px solid $white
  text-align center
  line-height 40px
  transition .5s
  margin-top 24px
}
.future-btn:hover{
  color #1d1d1f
  background-color $white
}
.content{
  font-size 24px
  color #86868b
  margin-top 24px
}
.content>span:nth-child(1){
  color #1d1d1f
}
.use-made{
  width 48%
  height 740px
  background-color $white
  border-radius 32px
}
.do-more-title{
  text-align center
  margin 120px auto 120px
}
.leo-box{
  height 100%
  width 100%
}
.section-lisa{
  height 862px
  background-color #1D1D1F
}
.leo-sentence{
  color $white
  font-size 40px
  width 790px
  line-height 52px
  text-align center
}
.leo{
  color $white
  margin-top 48px
  font-size 24px
}
.position{
  color #86868B
  font-size 22px
}
.green-quote{
  color :#62D568
  font-weight 600
}
@media screen and (min-width:1180px) {

}
@media screen and (min-width:1030px) and (max-width:1180px) {
  .card-box{
    max-width 980px
  }

}
@media screen and (min-width:900px) and (max-width:1029px) {
  .card-box{
    max-width 880px
  }
  .earth-title{
    font-size 44px
  }
  .earth-img{
    width:354px
    height:360px
  }
  h1{
    font-size 72px
  }
  h2{
    font-size 52px
  }
  .section-2030-title{
    width 880px
  }
}
@media screen and (max-width:900px) {
  .card-box{
    max-width 390px
  }
  .earth-title{
    font-size 32px
  }
  h1{
    font-size 42px
    line-height 56px
  }
  h2{
    font-size 22px
    line-height 36px
  }
  .section-2030-title{
    width 390px
  }
  .how{
    width 390px
  }
  .how li {
    font-size 22px
  }
  .earth{
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 0
    height 520px
    width 390px
  }
  .earth-left{
    width auto
  }
  .earth-img{
    height 240px
    width 240px
  }
  .use-made{
    width 100%
    height 520px
  }
}
</style>
