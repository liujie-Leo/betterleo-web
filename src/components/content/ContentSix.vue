<template>
  <div class="container">
    <div v-for="item in contentList" :key="item.index" class="content-item" @click="goToArticle(item.id)">
      <div class="img-box">
        <img class="item-img" :src="item.coverImage">
      </div>
      <div class="item-title fs-14">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentList: {
      type: Array,
      default: function () { return [] }
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
img[src=""],img:not([src]){
    opacity:0;
}
.container
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  flex-direction column
  justify-content space-between
  align-items flex-end
.content-item
  width 31%
  height 48%
  border-radius 4px
  cursor pointer
  overflow hidden
  background-color: $white;
.content-item:hover
  box-shadow 1px 1px 6px rgba(0,0,0,0.1)
.img-box
  height 66%
  width 100%
  overflow hidden
  border-radius 4px
  box-shadow 1px 1px 6px rgba(0,0,0,0.1)
.item-img
  height: 100%;
  width:100%
  border: none;
  border-radius 4px
.item-title
  width 100%
  height 30.2%
  padding 10px 6px 6px 6px
  font-weight 550
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  line-clamp: 2
  -webkit-box-orient: vertical

// 暗黑模式
.dark
  .content-item
    background-color $dark-light
  .item-title
    color $main-2
</style>
