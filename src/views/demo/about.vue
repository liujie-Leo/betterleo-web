<template>
  <div class="container">
    <Header />
    <div class="container-about">
      <div class="content">
        <div class="content-0">
          <div class="content-0-box">
            <Hello class="out-animation" />
          </div>
        </div>
        <div v-if="showContentOne" :class="[{'content-1':true}]">
          <div class="content-1-left">
            <h1>
              <span style="--i: 0"><i style="--i: 0">He</i></span>
              <span style="--i: 1"><i style="--i: 1">ee</i></span>
              <span style="--i: 2"><i style="--i: 2">e</i></span>
              <span style="--i: 3"><i style="--i: 3">llo!</i></span>
              </br>
              <span style="--i: 4"><i style="--i: 4">我是</i></span>
              <span style="--i: 5"><i style="--i: 5">牛炮炮</i></span>
            </h1>
            <p>一直想做一个网站用来写些东西，一是方便写，二是方便查</br>工作之余忙里偷闲来来去去折腾了不少时间，终于出了1.0版本</br>以后不管是技术上还是生活中想写的一些东西，都可以往这里塞咯</p>
          </div>
          <div class="content-1-right">
            <!-- <img src="../../assets/image/about-2.png" alt=""> -->
          </div>
        </div>
        <div v-if="showContentTow" class="content-2">
          <div class="content-2-left">
            <h1>
              <span style="--i: 0"><i style="--i: 0">能写</i></span>
              <span style="--i: 1"><i style="--i: 1">些什</i></span>
              <span style="--i: 2"><i style="--i: 2">么呢？</i></span>
              <span style="--i: 3"><i style="--i: 3">开发中</i></span>
              <span style="--i: 4"><i style="--i: 4">踩到的</i></span>
              <span style="--i: 5"><i style="--i: 5">坑</i></span>
            </h1>
            <p>坑很多</br>填坑的方法也不少</br>把填坑的方案记录下来并汇成方案集</br>忘了的时候，随查随用</p>
          </div>
          <div class="content-2-right">
            <!-- <img src="../../assets/image/about-2.png" alt=""> -->
          </div>
        </div>
        <div v-if="showContentThree" class="content-3">
          <div class="content-3-left">
            <h1>
              <span style="--i: 0"><i style="--i: 0">还有</i></span>
              <span style="--i: 1"><i style="--i: 1">很多</i></span>
              <!-- <span style="--i: 2"><i style="--i: 2">没了吗?</i></span> -->
              <span style="--i: 3"><i style="--i: 3">开发中</i></span>
              <span style="--i: 4"><i style="--i: 4">新学的</i></span>
              <span style="--i: 5"><i style="--i: 5">知识</i></span>
            </h1>
            <p>现有没学完的技术、不断迭代的新技术</br>要学的内容太多了</br>Vue3、Vite、React、TypeScript...</br>盘他们</p>
          </div>
          <div class="content-3-right">
            <!-- <img src="../../assets/image/about-2.png" alt=""> -->
          </div>
        </div>
        <div v-if="showContentFour" class="content-4">
          <div class="content-4-left">
            <h1>
              <span style="--i: 0"><i style="--i: 0">也许</i></span>
              <span style="--i: 1"><i style="--i: 1">可能</i></span>
              <span style="--i: 2"><i style="--i: 2">大概</i></span>
              <span style="--i: 3"><i style="--i: 3">有时间</i></span>
              <span style="--i: 4"><i style="--i: 4">还会写点</i></span>
              <span style="--i: 5"><i style="--i: 5">其他文章</i></span>
            </h1>
            <p>数码数码数码数码数码数码数码数码数码数码数码</p>
          </div>
          <div class="content-4-right">
            <!-- <img src="../../assets/image/about-2.png" alt=""> -->
          </div>
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
      showContentOne: false,
      showContentTow: false,
      showContentThree: false,
      showContentFour: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollChange)
  },
  beforeDestroy () {
    removeEventListener('scroll')
  },
  methods: {
    scrollChange () {
      const height = document.documentElement.scrollTop
      // console.log(innerHeight)
      // console.log(height)
      if (height > 226) {
        this.showContentOne = true
      }
      if (height > 720) {
        this.showContentTow = true
      }
      if (height > 1164) {
        this.showContentThree = true
      }
      if (height > 1700) {
        this.showContentFour = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container-about{
  min-height calc(100vh - 128px)
  width 100%
}
.content{
  width 1122px
  margin 0 auto
  height calc(100vh - 64px + 1500px + 380px)
}
.content-0{
  width:100%;
  height calc(100vh - 64px)
  display flex;
  justify-content center
  align-items center
  position relative
}
.content-0-box{
  display flex
  flex-direction column
  align-items center
}

.content-2,
.content-3,
.content-4,{
  padding 24px 64px
  width 100%
  height 500px
  // background-color #ccc
  display flex
  align-items center
}
.content-1{
  padding 24px 64px
  width 100%
  height 380px
  display flex
}
.content-1-left i{
  font-family 'Concert One'
}
h1>span {
  display inline-block
  // margin-right 8px
  letter-spacing -1px
  overflow hidden
  position relative
  top 8px
  animation .3s swift-up ease-in-out forwards
  animation-delay: calc(var(--i) * 0.1s)
}
i{
  position relative
  top 44px
  font-style normal
  animation .5s swift-up ease-in-out forwards
  animation-delay: calc(var(--i) * 0.1s)
}
p{
  width 600px
  font-size 20px
  margin-top 12px
  top .8rem
  position  relative
  opacity 0
  animation .5s fade-in ease-in-out forwards
  animation-delay .7s
  line-height 34px
}
.aaa{
  height 40px
  width 160px
}
.content-1-right img:nth-child(1){
  height 100px
  width 100px
  opacity 0
  animation .5s rotate-30 ease-in-out forwards
  animation-delay .7s
  position relative
  right -40px
}
.content-2-right img:nth-child(1){
  height 240px
  width 240px
  opacity 0
  animation .5s scale-14 ease-in-out forwards
  animation-delay .7s
  position relative
  top -160px
  left -200px
}
.content-3-right img:nth-child(1){
  height 340px
  width 340px
  opacity 0
  animation .5s rotate-30 ease-in-out forwards
  animation-delay .7s
  position relative
  top -160px
  right -40px
}
.content-4-right img:nth-child(1){
  height 240px
  width 240px
  opacity 0
  animation .5s rotate-30 ease-in-out forwards
  animation-delay .7s
  position relative
  top -160px
  left -360px
}
.content-1 h1{
  width 250px
  font-size 36px
}
.content-2 h1,
.content-3 h1,
.content-4 h1{
  width 300px
  font-size 36px
}

@keyframes swift-up {
  to{
    top:0px
  }
}

@keyframes fade-in {
  to{
    top:0rem;
    opacity 1
  }
}

@keyframes rotate-30 {
  to{
    transform rotate(45deg)
    opacity 1
    right 0
  }
}

@keyframes scale-14 {
  to{
    transform scale(1.4)
    opacity 1
  }
}

// 暗黑模式
.dark
  .container-about,
  .container
    background-color $dark-deep
  h1,
  p
    color $main-2
</style>
