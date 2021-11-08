<template>
  <div class="container">
    <Header page="digit" />
    <div class="box">
      <div class="swiper-box">
        <Swiper :swiper-list="swiperList" />
      </div>
      <div class="list-container">
        <div class="tags-box">
          <SortTags :tags-list="digitSubType" @onClickTag="onClickTag" />
        </div>

        <div class="content">
          <div class="article-box out-animation">
            <ArticleListL v-if="list.length>0" :list="list" @getMoreData="getMoreData" />
            <div v-if="list.length>0" class="loading-box">
              <Loading v-if="isLoading" />
              <div v-if="isEnd" class="no-more-data">没有了</div>
            </div>
            <div class="no-data-box">
              <NoData v-if="list.length==0" />
            </div>
          </div>
          <div class="banner-box">
            <div class="banner-1">
              developing
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import { digitSubType } from '@/json/data'
import ApiSwiper from '@/api/service/api/swiper'
const apiSwiper = new ApiSwiper()
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      list: [],
      swiperList: [],
      digitSubType,
      showInfoBox: false,
      params: {
        page: 1,
        pageSize: 9,
        total: 0,
        type: 'digit',
        subType: ''
      },
      isEnd: false,
      isLoading: false
    }
  },
  mounted () {
    this.getData()
    window.addEventListener('scroll', this.scrollChange)
  },
  methods: {
    onClickTag (value) {
      this.params.page = 1
      this.isEnd = false
      this.params.subType = value.value
      this.getData()
    },
    getData () {
      apiArticle.getArticle(this.params).then(res => {
        this.list = res.data.list
      })
      apiSwiper.getSwiperList({ type: 'digit', online: 1 }).then(res => {
        this.swiperList = res.data.list
      })
    },
    getMoreData () {
      if (!this.isEnd) {
        this.params.page = this.params.page + 1
        this.isLoading = true
        apiArticle.getArticle(this.params).then(res => {
          this.params.total = res.data.total
          setTimeout(() => {
            if (this.params.page >= res.data.total) {
              this.isEnd = true
            }
            this.list = this.list.concat(res.data.list)
            this.isLoading = false
          }, 300)
        })
      }
    },
    scrollChange () {
      const height = document.documentElement.scrollTop
      if (height > 960) {
        this.showInfoBox = true
      } else {
        this.showInfoBox = false
      }
    }

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  background-color: $main-bg;
.box
  width 1122px
  min-width 1122px
  margin 0 auto
  position relative
  min-height calc(100vh - 124px)
  overflow hidden
.loading
  height 400px
  width 100%
  display flex
  justify-content center
  align-items center
.list-container
  width 100%
.tags-box
  width 100%
  height 40px
  margin-top 12px
.content
  width 100%
  // min-height calc(100vh - 500px)
  display flex
  justify-content center
.article-box
  width 65%
  display flex
  flex-direction column
  align-items center
.banner-box
  width 20%
  margin-left 24px
  margin-top 4px
  overflow hidden
  position relative
.banner-1
  width 100%
  height 188px
  line-height 188px
  text-align center
  color #eee
  border-radius 6px
  background-color: #fff;
.swiper-box
  width 980px
  height 278px
  margin 18px auto 0
  display flex
  justify-content center
.info-box
  height 300px
  width 225px
  background-color #fff
  position fixed
  top 70px
  border-radius 8px
  opacity 0
  transition 0.3s
.opacity-1
  opacity 1!important
  top 80px!important
.loading-box
  height 54px
  width 100%
.no-more-data
  text-align center
  line-height 54px
  color #999
.no-data-box
  width 100%
  border-radius 6px
  background-color #fff
  margin-top 4px

// 暗黑模式
.dark
  .container
    background-color $dark-deep
  .banner-1
    background-color $dark-light
    color $main-2
  .swiper
    background-color $dark-light
</style>
