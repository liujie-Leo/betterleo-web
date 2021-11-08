<template>
  <div>
    <ul class="tags">
      <li
        v-for="item in tagsList"
        :key="item.index"
        :class="[{'tag':true},{'fs-12':true},{'active':active==item.index} ]"
        @click="onClickTag(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tagsList: {
      type: Array,
      default: function () { return [] }
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickTag (item) {
      this.active = item.index
      this.$emit('onClickTag', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.tags
  height 40px
  width 100%
  display flex
  align-items center
  justify-content center
  // padding-left 80px
.tag
  height 26px
  background-color: $gray-2;
  padding 0px 12px
  border-radius 4px
  font-weight 600
  color $main-5
  margin 0 4px
  cursor: pointer
  line-height 26px
.active
  background-color: $main;
  color $white

.dark
  .tag
    background-color $dark-light
    color $main-2
  .active
    background-color $main-4
    color $main-2
</style>
