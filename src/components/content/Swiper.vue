<template>
  <div class="swiper">
    <el-carousel>
      <el-carousel-item v-for="item in swiperList" :key="item.index">
        <img :src="item.url" class="swiper-img" @click="onClickSwiper(item.articleId)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: {
      type: Array,
      default: function () { return [] }
    }
  },
  methods: {
    onClickSwiper (id) {
      if (id.length > 20) {
        const routeData = this.$router.resolve({
          name: 'article',
          query: { id }
        })
        window.open(routeData.href, '_blank')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.swiper
  height 100%
  width 100%
  border-radius 8px
  cursor pointer
  background-color $white
.swiper-img
  width 100%
  height 100%
.el-carousel
  height 100%
  border-radius 4px
/deep/ .el-carousel__indicators
  margin-bottom 12px
  width 100%
  display flex
  justify-content center
  align-items center
/deep/ .el-carousel__button
  border-radius 50%
  height 10px
  width 10px
  background-color #999
/deep/ .el-carousel__container
  height 100%!important
</style>
