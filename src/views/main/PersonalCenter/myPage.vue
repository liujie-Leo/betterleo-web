<template>
  <div class="container">
    <Header page="" />
    <div class="box">
      <div class="section-1">
        <div class="card-1">
          <div class="base-info">
            <img v-if="$store.state.user.userInfo.avatar" :src="$store.state.user.userInfo.avatar" class="avatar">
            <img v-else src="@/assets/image/avatar3.png" class="avatar">
            <div class="info-box">
              <h2 class="username">{{ $store.state.user.userInfo.username }}</h2>
              <label class="slogan fs-14 text-main-5">我是一只程序狒狒</label>
            </div>
          </div>
          <div class="iconfont iconsettings fs-30 icon-bianji" @click="goToEdit" />
        </div>
        <div class="card-2">
          <SortSection :tab-list="tabList" @handleClick="handleClick">
            <div :class="[{'card-2-content':true},{'card-2-radius':activeTab!=='dynamic'}]">
              <div v-if="activeTab=='article'" class="article-box">
                <ArticleListS v-if="list.length>0" :list="list" :edit="true" @getMoreData="getMoreData" />
                <div v-if="list.length>0" class="loading-box">
                  <Loading v-if="isLoading" />
                  <div v-if="isEnd" class="no-more-data">没有了</div>
                </div>
                <NoData v-else />
              </div>
              <div v-if="activeTab=='good'" class="good-box">
                <ArticleListS v-if="list.length>0" :list="list" @getMoreData="getMoreData" />
                <div v-if="list.length>0" class="loading-box">
                  <Loading v-if="isLoading" />
                  <div v-if="isEnd" class="no-more-data">没有了</div>
                </div>
                <NoData />
              </div>
            </div>
          </SortSection>
        </div>
      </div>
      <div class="section-2" />
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      tabList: [
        {
          label: '文章',
          value: 'article'
        }, {
          label: '赞',
          value: 'good'
        }
      ],
      activeTab: 'article',
      list: [],
      params: {
        page: 1,
        pageSize: 9,
        total: 0,
        // type: '',
        subType: '',
        authorId: this.$store.state.user.userInfo.id
      },
      isEnd: false,
      isLoading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      apiArticle.getArticle(this.params).then(res => {
        this.list = res.data.list
      })
    },
    handleClick (value) {
      this.params.page = 1
      this.isEnd = false
      this.list = []
      if (value == 'article') {
        this.getData()
      }
      if (value === 'dynamic') {
        this.getData()
      }
      this.activeTab = value
    },
    goToEdit () {
      this.$router.push({
        path: '/PersonalCenter/edit'
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  background-color: $main-bg;
  overflow hidden
.box
  width 1122px
  min-width 1122px
  margin 24px auto 0px
  position relative
  display flex
  justify-content center
  min-height calc(100vh - 64px)
.username
  color $main-4
.section-1
  width 60%
.section-2
  width 16%
  height 500px
  // border 1px solid #ccc
  margin-left 24px
.card-1
  background-color #fff
  padding 0 18px
  width 100%
  border-radius 6px
  display flex
  justify-content space-between
  align-items center
.base-info
  display flex
  align-items center
.card-2
  width 100%
  border-radius 6px
  margin-top 16px
.card-1
  height 120px
  display flex
  align-items center
.info-box
  padding-left 8px
.avatar
  border-radius 50%
  height 70px
  width 70px
.card-2-content
  width 100%
  min-height 200px
  border-radius 0 8px 8px 8px
.card-2-radius
  border-radius 8px
.dynamic-box,
.article-box,
.good-box
  min-height 200px
.icon-bianji
  margin-right 18px
  cursor pointer
  transition 1s
  color $main-4
.icon-bianji:hover
  transform rotate(60deg)
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
</style>
