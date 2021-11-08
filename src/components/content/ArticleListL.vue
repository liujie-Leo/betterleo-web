<template>
  <div class="container">
    <ul class="article-list">
      <li v-for="item in list" :key="item.id" class="list-item" @click.stop="goToArticle(item.id)">
        <div class="item-section1">
          <img class="item-img" :src="item.coverImage" alt="">
        </div>
        <div class="item-section2">
          <div class="info-box">
            <!-- <div class="author fs-12" @click="goToPage('author')">{{ item.author }}</div> -->
            <!-- <div class="time fs-12">{{ item.createTime }}</div> -->
            <div v-for="tag in item.tags" :key="tag" class="tag fs-12">{{ tag }}</div>
          </div>
          <h3 class="title" @click="goToPage('article')">{{ item.title }}</h3>
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
          // console.log('距顶部' + scrollTop + '可视区高度' + windowHeight + '滚动条总高度' + scrollHeight)
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
img{
  width 100%
  height 100%;
}
.container
  width 100%
  margin-top 4px
.article-list
  width 100%
.list-item
  width 100%
  height 188px
  background-color: $white;
  display flex
  border-radius 4px
  overflow hidden
  margin-bottom 12px
  cursor pointer
.list-item:hover .item-section1
  width 47%
.list-item:hover .item-section2
  width 52%
.item-section1
  width 50%
  height 100%
  background-color: $white;
  transition 0.1s
  box-shadow 2px 2px 8px rgba(0,0,0,0.1)
.info-box
  display flex
  margin-bottom 4px
.author,
.time
  color $main-2
.tag
  padding 0 6px
  background-color: $gray-4;
  height 16px
  line-height 16px
  color $white
  border-radius 4px
  margin-right 6px
.title
  width 329px
.title,
.author
  cursor: pointer;
.title:hover
  text-decoration underline
.author:hover
  text-decoration underline
.item-section2
  width 45%
  height 100%
  display flex
  flex-direction column
  justify-content center
  color $main-5
  padding-left 20px

// 暗黑模式
.dark
  .list-item
    background-color $dark-light
  .title,
  .tag
    color $main-2
  .tag
    background-color $main-4
</style>
