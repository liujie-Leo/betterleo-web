<template>
  <div class="container">
    <Header page="develop" />
    <div class="list-container">
      <div class="tags-box">
        <SortTags :tags-list="tagsList" @onClickTag="onClickTag" />
      </div>
      <div class="content">
        <div v-if="loadingFinished" class="article-box out-animation">
          <ArticleListS v-if="list.length>0" :list="list" @getMoreData="getMoreData" />
          <div v-if="list.length>0" class="loading-box">
            <Loading v-if="isLoading" />
            <div v-if="isEnd" class="no-more-data">没有了</div>
          </div>
          <div class="no-data-box">
            <NoData v-if="list.length==0&&!isLoading" />
          </div>
        </div>
        <div v-if="!loadingFinished" class="bone-box">
          <div v-for="i in 4" :key="i" class="bone-item" />
        </div>
        <div class="banner-box">
          <Card>
            <div>
              <img src="https://www.betterleo.com/images/code2.png">
            </div>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import { developSubType } from '@/json/data'
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      tagsList: developSubType,
      list: [],
      params: {
        page: 1,
        pageSize: 9,
        total: 0,
        type: 'develop',
        subType: ''
      },
      isEnd: false,
      isLoading: true,
      loadingFinished: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      apiArticle.getArticle(this.params).then(res => {
        this.list = res.data.list
        this.isLoading = false
        this.loadingFinished = true
      })
    },
    getMoreDatas () {
      if (!this.isEnd) {
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
    onClickTag (value) {
      this.params.page = 1
      this.isEnd = false
      this.params.subType = value.value
      this.getData()
    },
    getMoreData () {
      this.params.page = this.params.page + 1
      this.getMoreDatas()
    }

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  background-color: $main-bg;
.list-container
  width 1122px
  min-width 1122px
  margin 12px auto 24px
  min-height calc(100vh - 160px)
.loading
  height 400px
  width 100%
  display flex
  justify-content center
  align-items center
.tags-box
  width 100%
  height 40px
  margin-bottom 4px
.content
  width 100%
  display flex
  justify-content center
.article-box
  width 60%
  display flex
  flex-direction column
  align-items center
.banner-box
  width 20%
  height 385px
  margin-left 24px
  background-color: #fff;
  border-radius 12px
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
.bone-box{
  width 60%
  height 400px
}
.bone-item{
  width 100%
  height 88px
  background-color $bone-bg
  margin-top 12px
  border-radius 8px
}

// 暗黑模式
.dark
  .container
    background-color $dark-deep
  .bone-item
    background-color $dark-light
</style>
