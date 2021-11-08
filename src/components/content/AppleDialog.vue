<template>
  <div v-if="visible" ref="mask" class="dialog-main apple-dialog-out-animation">
    <div class="dialog  ">
      <div class="close-btn pointer" @click="onCloseDialog">x</div>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible (newValue) {
      if (newValue) {
        document.body.appendChild(this.$el)
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowX = 'auto'
        document.body.style.overflowY = 'auto'
      }
    }
  },
  methods: {
    onCloseDialog () {
      this.$parent.dialogVisible = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.dialog-main{
  min-height 100vh
  width 100vw
  position fixed
  left 0
  top 0
  overflow hidden
}
.dialog{
  z-index 9999
  width 1020px
  height calc(100vh - 199px)
  margin 64px auto
  background-color #fff
  border-radius 24px
  box-shadow 0 0 10px rgba(0,0,0,0.1)
  overflow-y auto
  padding 157px
  position relative
}
.close-btn{
  font-size 32px
  height 36px
  width 36px
  border-radius 50%
  border 1px solid #ccc
  line-height 36px
  text-align center
  position absolute
  left 24px
  top 24px
}
.close-btn:hover{
  background-color #1d1d1f
  color $white
}
</style>
