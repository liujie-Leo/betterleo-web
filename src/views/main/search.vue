<template>
  <div class="search-container">
    <Header />
    <div class="list-container">
      <div class="content">
        <div v-if="isLoading&&list.length==0" class="loading-box">
          <Loading />
        </div>
        <div v-else class="search-content-box">
          <h2 class="result-title">搜索结果:</h2>
          <h3 v-if="userList.length>0" class="type-title">用户</h3>
          <div v-if="userList.length>0" class="user-box">
            <div v-for="item in userList" :key="item.id" class="user-item">
              <img :src="item.avatar" class="avatar">
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
          <h3 v-if="list.length>0" class="type-title">文章</h3>
          <ArticleListS v-if="list.length>0" :list="list" class="out-animation" @getMoreData="getMoreData" />
          <div v-if="list.length>0" class="loading-box">
            <Loading v-if="isLoading" />
            <div v-if="isArticleEnd" class="no-more-data">没有了</div>
          </div>
          <div class="no-data-box">
            <NoData v-if="list.length==0&&userList.length==0" title="没有内容 换个关键词试试" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import ApiUser from '@/api/service/api/user'
const apiArticle = new ApiArticle()
const apiUser = new ApiUser()
export default {
  data () {
    return {
      list: [],
      userList: [],
      articleParams: {
        page: 1,
        pageSize: 9,
        total: 0,
        title: ''
      },
      userParams: {
        page: 1,
        pageSize: 9,
        total: 0,
        title: ''
      },
      isArticleEnd: false,
      isLoading: true,
      searchValue: ''
    }
  },
  mounted () {
    this.articleParams.title = this.$route.query.searchValue
    this.userParams.name = this.$route.query.searchValue
    this.searchValue = this.$route.query.searchValue
    this.getData()
  },
  methods: {
    getData () {
      if (this.articleParams.title) {
        apiArticle.getArticle(this.articleParams).then(res => {
          this.articleParams.total = res.data.total
          // 分页时延迟300毫秒体验更好
          setTimeout(() => {
            if (this.articleParams.page >= res.data.total) {
              this.isArticleEnd = true
            }
            this.list = this.list.concat(res.data.list)
            this.isLoading = false
          }, 300)
        })
      }
      if (this.userParams.name) {
        apiUser.getUserList(this.userParams).then(res => {
          this.userParams.total = res.data.total
          setTimeout(() => {
            if (this.userParams.page >= res.data.total) {
              this.isEnd = true
            }
            this.userList = this.userList.concat(res.data.list)
            this.isLoading = false
          }, 300)
        })
      }
    },
    getMoreData () {
      if (!this.isArticleEnd) {
        this.isLoading = true
        this.articleParams.page = this.articleParams.page + 1
        this.getData()
      }
    }

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.search-container
  background-color: $main-bg;
.list-container
  width 1122px
  min-width 1122px
  margin 12px auto 24px
  min-height calc(100vh - 160px)
.result-title
  color $main
  margin-top 12px
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
.type-title
  margin-top 12px
  margin-bottom 6px

.user-box
  width 100%
  display: flex;
  flex-wrap wrap
.user-item
  width 120px
  height 54px
  display: flex;
  align-items center
  cursor pointer
.avatar
  height: 48px;
  width 48px
  border-radius 50%
  margin-right 6px
.name
  color $main
  font-size 18px
.name:hover
  text-decoration underline

.search-content-box
  width 65%
  display flex
  flex-direction column
.banner-box
  width 20%
  height 435px
  margin-left 24px
  margin-top 4px
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
  margin-top 12px
  width 100%
  border-radius 4px
  overflow hidden

.dark
  .search-container
    background-color $dark-deep
  .result-title
    color $main-2
</style>
