<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.card-container
  border-radius 4px
  height 100%
  width 100%
  overflow hidden
  background-color $white
</style>
