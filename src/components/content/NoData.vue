<template>
  <div class="no-data">
    <img class="img-no-data" src="../../assets/image/noData.svg">
    <span class="title fs-14">{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '没有内容'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.no-data
  width 100%
  height 188px
  display flex
  justify-content center
  align-items center
  flex-direction column
  border-radius 4px
  background-color $white
.img-no-data
  height 108px
  width 108px
.title
 color $main-2

.dark
  .no-data
    background-color $dark-light
</style>
