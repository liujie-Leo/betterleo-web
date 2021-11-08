<template>
  <div class="main">
    <ul class="article-list">
      <li v-for="item in list" :key="item.index" class="list-item" @click.stop="goToArticle(item.id)">
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
    },
    edit: {
      type: Boolean,
      default: false
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
      var routeData = null
      if (this.edit) {
        routeData = this.$router.resolve({
          name: 'write',
          query: { id, edit: 1 }
        })
      } else {
        routeData = this.$router.resolve({
          name: 'article',
          query: { id }
        })
      }
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.main
  width 100%
.article-list
  width 100%
.list-item
  width 100%
  padding 12px 0
  background-color: $white;
  display flex
  align-items center
  border-radius 4px
  overflow hidden
  margin-bottom 12px
.list-item:hover{
  box-shadow 1px 1px 4px rgba(0,0,0,0.07)
}
.list-item
  cursor pointer
.message-box
  width 100%
  height 30px
  display flex
  align-items center
.iconmessage-reset
  margin-left 8px
  margin-right 3px
.message-box div
  font-size 13px
  color #aaa
.iconzan
  margin-right 3px
.item-section1
  width 24%
  height 100%
  background-color: $white;
  display flex
  justify-content center
  align-items center
.item-img
  width 120px
  height 60px
  border-radius 4px
.info-box
  display flex
  margin-bottom 4px
.author,
.time
  color #999
.time
  margin-left 6px
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
.author:hover
  text-decoration underline
.item-section2
  width 76%
  height 100%
  display flex
  flex-direction column
  justify-content center
  color #333
  padding-left 20px
.left-line
  width 3px
  height 32px
  background-color $main-4

// 暗黑模式
.dark
  .list-item,
  .item-section1
    background-color $dark-light
  .item-title
    color $main-2
  .tag
    background-color $main-2
    color $main-4
</style>
