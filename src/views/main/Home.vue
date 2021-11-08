<template>
  <div class="container">
    <Header page="home" />
    <div :class="[{'section':true}]">
      <div v-if="isInitFinished" :class="[{'content':true}]">
        <div :class="[{'aside-left':true},{'out-animation':true}]">
          <div class="left-section-1">
            <div class="swiper-box">
              <Swiper :swiper-list="swiperList" />
            </div>
            <div class="recommend-box">
              <ContentSix :content-list="RecommendList" />
            </div>
          </div>
          <div class="left-section-4">
            <ArticleListMix :list="list" @getMoreData="getMoreData" />
            <div class="loading-box">
              <Loading v-if="isLoading" />
              <div v-if="isEnd" class="no-more-data">没有了</div>
            </div>
          </div>
        </div>
        <div class="aside-right">
          <div class="right-section-1">
            <Card>
              <div>
                <img src="https://www.betterleo.com/images/code.png">
              </div>
            </Card>
          </div>
          <div class="right-section-3">
            <Card>
              <div class="l-component l-component-self" @click="gotoLComponent">L-Component</div>
            </Card>
          </div>
          <div class="right-section-3">
            <Card>
              <div class="music music-self" @click="goToPage('music')">Music</div>
            </Card>
          </div>
          <div class="right-section-2">
            <Card>
              <div class="about about-self" @click="goToPage('about')">About</div>
            </Card>
          </div>
          <!-- <div class="right-section-2">
            <Card>
              <div class="demos demos-self" @click="goToPage('demo')">Demos</div>
            </Card>
          </div> -->
        </div>
      </div>
      <div v-else class="bone">
        <div class="bone-left">
          <div class="bone-left-section-1">
            <div class="bone-swiper" />
            <div class="bone-six">
              <div v-for="i in 6" :key="i" class="bone-six-item" />
            </div>
          </div>
          <div class="bone-left-section-2" />
        </div>
        <div class="bone-right">
          <div class="bone-right-secition-1" />
          <div class="bone-right-secition-2" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import ApiSwiper from '@/api/service/api/swiper'
const apiSwiper = new ApiSwiper()
const apiArticle = new ApiArticle()
export default {
  metaInfo: {
    title: 'BetterLeo',
    meta: [
      {
        name: 'keywords',
        content: 'betterleo,BetterLeo,betterleo博客,BetterLeo博客,betterleo文档集'
      }, {
        name: 'description',
        content: 'BetterLeo——提供记录和查找文章的网站。包括但不限于开发中新踩到的坑、新学到的知识、感兴趣的内容、数码产品的使用体验、都可以记录在这里，尽情分享、随时查阅。'
      }
    ]
  },
  data () {
    return {
      swiperList: [],
      RecommendList: [],
      BannerList: [],
      activeTab: 'develop',
      list: [],
      getMixArticleParams: {
        page: 1,
        pageSize: 5,
        total: 0
      },
      isEnd: false,
      isLoading: false,
      showInfoBox: false,
      isInitFinished: false,
      loadCount: 0
    }
  },
  watch: {
    loadCount (value) {
      if (value >= 2) {
        this.isInitFinished = true
      }
    }
  },
  mounted () {
    this.getData()
    this.getMixArticleList()
    window.addEventListener('scroll', this.scrollChange)
  },
  methods: {
    scrollChange () {
      const height = document.documentElement.scrollTop
      this.showInfoBox = height > 960
    },
    getData () {
      apiArticle.getArticle({ isRecommend: true }).then(res => {
        this.RecommendList = res.data.list
        this.loadCount++
      })
      apiSwiper.getSwiperList({ online: 1, type: 'home' }).then(res => {
        this.swiperList = res.data.list
      })
    },
    getMoreData () {
      this.getMixArticleParams.page = this.getMixArticleParams.page + 1
      this.getMixArticleList()
    },
    getMixArticleList () {
      if (!this.isEnd) {
        this.isLoading = true
        apiArticle.getArticle(this.getMixArticleParams).then(res => {
          this.getMixArticleParams.total = res.data.total
          this.loadCount++
          setTimeout(() => {
            if (this.getMixArticleParams.page >= res.data.total) {
              this.isEnd = true
            }
            this.list = this.list.concat(res.data.list)
            this.isLoading = false
          }, 300)
        })
      }
    },
    goToArticle (id) {
      const routeData = this.$router.resolve({
        name: 'article',
        query: { id }
      })
      window.open(routeData.href, '_blank')
    },
    goToPage (page) {
      const obj = {
        about: '/demos/about',
        music: '/demos/music',
        demo: '/demos'
      }
      this.$router.push({
        path: obj[page]
      })
    },
    gotoLComponent () {
      window.open('https://ui.betterleo.com', '_blank')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  background-color $main-bg
.section
  width 1122px
  min-width 1122px
  min-height calc(100vh - 124px)
  margin 0 auto 0
  padding-top 24px
.content
  width: 100%;
  display flex
  justify-content space-between
.aside-left
  width 73%

.left-section-1
  width 100%
  height 350px
  display flex
  justify-content space-between
.swiper-box
  width 28%
  height 100%
.recommend-box
  width 71%
  height 100%
.left-title
  width 100%
  height 10%
  color #999
  line-height 33px

.left-section-4
  width 100%
  margin-top 24px
  border-radius 4px
  margin-bottom 24px
.loading-box
  height 54px
  width 100%
.no-more-data
  text-align center
  line-height 54px
  color #999

.aside-right
  width 25%
  height 400px

.right-section-1
  height 350px
  width 100%

.right-section-2
  height: 82px;
  margin-top 14px
.about,
.music,
.l-component,
.demos{
  line-height 82px
  text-align center
  color #fff
  font-size 32px
  cursor pointer
}
.about:hover,
.music:hover,
.l-component:hover,
.demos:hover{
  text-decoration underline
}
.about-self{
  background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);
}
.music-self{
  background-image: linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%);
}
.demos-self{
  background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
}
.l-component-self{
  background-image: linear-gradient( 135deg, #4E81EE 10%, #4E81EE 100%);
}
.right-section-3{
  height 82px
  margin-top 24px
}

.bone
  display: flex;
  justify-content space-between
  margin-bottom 24px
.bone-left
  width 73%
.bone-left-section-1
  display: flex;
.bone-swiper
  height: 350px;
  width: 230px;
  border-radius 4px
  background-color #e7e7e7
.bone-six
  height: 350px;
  width: 582px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
.bone-six-item
  width: 180px;
  height 168px
  background-color #e7e7e7
  border-radius 4px

.bone-left-section-2
  width: 100%;
  height: 400px;
  background-color #e7e7e7
  border-radius 4px
  margin-top 24px

.bone-right
  width: 25%;
.bone-right-secition-1,
.bone-right-secition-2,
.bone-right-secition-3
  width: 100%;
  background-color #e7e7e7
  border-radius 4px
.bone-right-secition-1
  height: 240px;
.bone-right-secition-2
  height: 222px;
  margin-top 24px
.bone-right-secition-3
  height: 262px;
  margin-top 24px

// 暗黑模式
.dark
  .container
    background-color $dark-deep
  .bone-swiper,
  .bone-six-item,
  .bone-left-section-2,
  .bone-right-secition-1,
  .bone-right-secition-2,
  .bone-right-secition-3
    background-color $dark-light
</style>
