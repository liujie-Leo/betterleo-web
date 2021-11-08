<template>
  <div class="container">
    <ul class="article-list">
      <li v-for="item in list" :key="item.index" class="list-item" @click.stop="goToArticle(item.id)">
        <div v-if="isDevelopArticle(item)" class="item-s">
          <div class="left-line" />
          <div class="item-section2">
            <!-- <div class="info-box">
              <div v-for="tag in item.tags" :key="tag" class="tag fs-12">{{ tag }}</div>
            </div> -->
            <h3 class="item-title">{{ item.title }}</h3>
          </div>
          <div v-if="item.coverImage" class="item-section1">
            <img class="item-img" :src="item.coverImage" alt="">
          </div>
        </div>
        <div v-else class="item-l">
          <div class="item-section1-l">
            <img class="item-img-l" :src="item.coverImage">
          </div>
          <div class="item-section2-l">
            <div class="info-box-l">
              <div v-for="tag in item.tags" :key="tag" class="tag-l fs-12">{{ tag }}</div>
            </div>
            <h3 class="title-l">{{ item.title }}</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () { return [] }
    }
  },
  data () {
    return {
      page: 1,
      timer: ''
    }
  },
  mounted () {
    var that = this
    window.onscroll = function () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // 变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        // 变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        // 滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
          // 写后台加载数据的函数
          // this.load()
          that.$emit('getMoreData')
        }
      }, 100)
    }
  },
  methods: {
    goToArticle (id) {
      const routeData = this.$router.resolve({
        name: 'article',
        query: { id }
      })
      window.open(routeData.href, '_blank')
    },
    goToPage () {
      const routeData = this.$router.resolve({
        name: 'myPage'
      })
      window.open(routeData.href, '_blank')
    },
    load () {
    },
    isDevelopArticle (item) {
      const index = item.type.indexOf('develop')
      return index !== -1
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  width 100%
.article-list
  width 100%
.list-item
  width 100%
.list-item:hover{
  box-shadow 1px 1px 4px rgba(0,0,0,0.07)
}
.item-s
  width 100%
  padding 12px 0
  background-color: $white;
  display flex
  align-items center
  border-radius 4px
  overflow hidden
  margin-bottom 12px
  cursor pointer
.iconmessage-reset
  margin-left 8px
  margin-right 3px
.iconzan
  margin-right 3px
.item-section1
  width 20%
  height 100%
  background-color: $white;
  display flex
  justify-content center
  align-items center
.item-img
  width 120px
  height 60px
  border-radius 4px
  box-shadow 0px 0px 4px rgba(0,0,0,0.2);
.info-box
  display flex
  margin-bottom 4px
.tag
  padding 0 6px
  background-color: $gray-4;
  height 16px
  line-height 16px
  color $white
  border-radius 4px
  margin-right 6px
.item-title
  color $main-5
.item-title:hover
  text-decoration underline
.item-section2
  width 82%
  height 100%
  display flex
  flex-direction column
  justify-content center
  padding-left 20px
.left-line
  width 3px
  height 32px
  background-color $main-4

.item-l
  width 100%
  height 188px
  background-color: $white;
  display flex
  border-radius 4px
  overflow hidden
  margin-bottom 12px
img{
  width 100%
  height 100%;
}
.list-item-l
  width 100%
  height 188px
  background-color: $white;
  display flex
  border-radius 4px
  overflow hidden
  margin-bottom 12px
.item-l:hover .item-section1-l
  width 47%
.item-l:hover .item-section2-l
  width 52%
.item-section1-l
  width 50%
  height 100%
  background-color: $white;
  transition 0.1s
  box-shadow 2px 2px 8px rgba(0,0,0,0.1)
.info-box-l
  display flex
  margin-bottom 4px
.tag-l
  padding 0 6px
  background-color: $gray-4;
  height 16px
  line-height 16px
  color $white
  border-radius 4px
  margin-left 6px
.title-l
  width 329px
  cursor: pointer;
.title-l:hover
  text-decoration underline
.item-section2-l
  width 45%
  height 100%
  display flex
  flex-direction column
  justify-content center
  color $main-5
  padding-left 20px

//暗黑模式
.dark
  .item-s,
  .item-l,
  .item-section1
    background-color $dark-light
  .item-title,
  .title-l
    color $main-2
  .tag-l
    background-color $main-4
    color $main-2
</style>
