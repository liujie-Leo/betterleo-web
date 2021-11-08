<template>
  <div id="loading">
    <div class="l" />
    <div class="l l2" />
    <div class="l l3" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '~@/assets/style/vendor.styl'
#loading
  width 100%
  height 100%
  text-align center
  display flex
  justify-content center
  align-items center
#loading .l
  width 8px
  height 8px
  background-color $main-5
  border-radius 50%
  margin 0 1px
  animation loading 1s infinite ease-in-out
#loading .l2
  animation-delay -0.9s
#loading .l3
  animation-delay -0.8s
@keyframes loading {
  0%{
    transform translateY(-10px)
  }
  50%{
    transform translateY(10px)
  }
  100%{
    transform translateY(-10px)
  }
}
</style>
