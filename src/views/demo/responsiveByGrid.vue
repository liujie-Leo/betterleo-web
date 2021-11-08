<template>
  <div class="container">
    <div class="school-wrapper">
      <img src="https://www.betterleo.com/images/demoList/apple/school.jpeg">
    </div>
    <div class="content">
      <div class="item item1">
        <img src="https://www.betterleo.com/images/demoList/apple/ipad.jpeg" alt="">
      </div>
      <div class="item item2">
        <img src="https://www.betterleo.com/images/demoList/apple/watch.jpeg" alt="">
      </div>
      <div class="item item3">
        <img src="https://www.betterleo.com/images/demoList/apple/people.jpeg" alt="">
      </div>
      <div class="item item4">
        <img src="https://www.betterleo.com/images/demoList/apple/tag.jpeg" alt="">
      </div>
      <div class="item item5">
        <img src="https://www.betterleo.com/images/demoList/apple/music.jpeg" alt="">
      </div>
      <div class="item item6">
        <img src="https://www.betterleo.com/images/demoList/apple/mac.jpeg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.content{
  display:grid;
}
.item{
  // height 580px
  position relative
  overflow hidden
  border 1px solid #ccc
}
@media screen and (min-width:1074px) {
  .content{
    grid-template-columns 1fr 1fr
    grid-gap 8px
  }
}
@media screen and (max-width:1073px) and (min-width 740px){
  .content{
    grid-template-columns 1fr 1fr
    grid-gap 8px
  }
}
@media screen and (max-width:739px){

}
</style>
