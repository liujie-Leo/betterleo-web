<template>
  <div class="container">
    <Header page="living" />
    <div class="box">
      <div class="swiper-box">
        <Swiper :swiper-list="swiperList" />
      </div>
      <div class="list-container">
        <div class="tags-box">
          <!-- <SortTags :tags-list="tagsList" @onClickTag="onClickTag" /> -->
        </div>
        <div class="content">
          <div class="article-box">
            <ArticleListL :list="webList" />
          </div>
          <div class="banner-box" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import ApiArticle from '@/api/service/api/article'
// const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      tagsList: [
        {
          index: 0,
          name: '全部'
        }, {
          index: 1,
          name: 'Andriod'
        }, {
          index: 2,
          name: 'Apple'
        }, {
          index: 3,
          name: '平板'
        }
      ],
      webList: [],
      swiperList: [
      ]
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    onClickTag () {
    },
    initData () {
      // apiArticle.getArticle().then(res => {
      //   this.webList = res.data
      // })
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
  margin 12px auto 24px
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
  display flex
  justify-content center
.article-box
  width 65%
  display flex
  flex-direction column
  align-items center
.banner-box
  width 20%
  height 500px
  margin-left 24px
  margin-top 4px
  background-color: #fff;
  border-radius 12px
.swiper-box
  width 980px
  height 278px
  margin 18px auto 0
  display flex
  justify-content center
</style>
