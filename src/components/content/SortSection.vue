<template>
  <div class="container">
    <div class="tabs fs-18">
      <div v-for="item in tabList" :key="item.value" :class="[{'tab':true},{'active-tab':activeTab==item.value}]" @click="onClickTab(item.value)">{{ item.label }}</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      default: function () { return [] }
    }
  },
  data () {
    return {
      activeTab: this.tabList[0].value
    }
  },
  methods: {
    onClickTab (value) {
      this.activeTab = value
      this.$emit('handleClick', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  height 100%
  width 100%
  border-radius 0 6px 6px 6px
.tabs
  width 100%
  height 35px
  display flex
.tab
  width 70px
  height 100%
  line-height 40px
  text-align center
  cursor pointer
  font-weight 600
  color #999
  // transition .7s
.title
  height 6%
  width 100%
  font-weight 600
  color $main
  margin-bottom 12px
.active-tab
  background-color $white
  border-radius 6px 6px 0 0
  color $main
</style>
