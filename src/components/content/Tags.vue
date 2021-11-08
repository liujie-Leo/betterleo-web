<template>
  <div class="main">
    <div class="title fs-18">
      {{ title }}
    </div>
    <div v-for="item in list" :key="item.index" class="row">
      <div :class="[{'tag-box':true},{'tag-box-42':item[0]['index']%2==0},{'tag-box-56':item[0]['index']%2!==0}]">
        <div class="img-box">
          <img :src="item[0]['img']">
        </div>
        <div class="text-box">
          <div class="text-title fs-16">{{ item[0]['title'] }}</div>
          <div class="text-subtitle fs-12">{{ item[0]['subTitle'] }}</div>
        </div>
      </div>
      <div :class="[{'tag-box':true},{'tag-box-56':item[1]['index']%2!==0},{'tag-box-42':item[1]['index']%2==0}]">
        <div class="img-box">
          <img :src="item[1]['img']">
        </div>
        <div class="text-box">
          <div class="text-title fs-16">{{ item[1]['title'] }}</div>
          <div class="text-subtitle fs-12">{{ item[1]['subTitle'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () { return [] }
    },
    title: {
      type: String,
      default: '标签'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.main
  height 100%
  width 100%
  display flex
  flex-wrap wrap
  flex-direction column
  justify-content space-between
.title
  height 6%
  width 100%
  font-weight 600
  color $main
.row
  height 22%
  width 100%
  display flex
  justify-content space-between
  align-items center
.tag-box
  height 90%
  border-radius 6px
  position relative
  background-color: $white;
  display flex
  cursor: pointer;
.tag-box:hover
  box-shadow 1px 1px 6px rgba(0,0,0,0.1)
  z-index 9
.tag-box::after
  content ''
  position absolute
  left 8px
  top 8px
  height 14px
  width 14px
  border-radius 50%
  background-color: $white;
  box-shadow 1px 2px 2px rgba(0,0,0,0.1)
.tag-box-42
  width 42%
.tag-box-56
  width 56%

.tag-box>.img-box
  height 100%
  display flex
  justify-content flex-end
  align-items center
.tag-box>.img-box img
  margin-right 6px
  border-radius 50%
  height 50px
  width 50px
.tag-box>.text-box
  height 100%
  display flex
  flex-direction column
  justify-content center;

.tag-box-42>.img-box
  width 22%
.tag-box-42>.text-box
  width 78%

.tag-box-56>.img-box
  width 16%
.tag-box-56>.text-box
  width 84%

.text-title,
.text-subtitle
  white-space: nowrap
  cursor pointer
  text-overflow: ellipsis
  overflow hidden
.text-title
  color #333
.text-subtitle
  color #999
</style>
