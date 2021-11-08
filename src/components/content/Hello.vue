<template>
  <div class="container-hello">
    <h1>Heeeello!</h1>
    <h2>im Leo</h2>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container-hello{
  height 100%
  width 100%
  perspective 2500px
  display flex
  flex-direction column
  align-items center
}
h1, h2 {
  padding: 0;
  margin: 0;
  position: relative;
  color: #f1f1f1;
  font-family 'Concert One'
}

img {
  width: 100px;
  margin-top: 60px;
}

h1 {
  font-size: 10rem;
  animation: 5s rotate ease-in-out infinite;
}

@keyframes rotate {
  0%, 100% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
}

h2 {
  font-size: 5rem;
  letter-spacing: -4px;
  animation: 2.5s thank-you ease-in-out infinite;
}

@keyframes thank-you {
  0%, 100% {
    transform: rotate3d(1, 0, 0, -10deg);
  }
  50% {
    transform: rotate3d(1, 0, 0, 10deg);
  }
}

h1::before,
h1::after {
  content: 'Heeeello!';
}

h2::before,
h2::after {
  content: 'im Leo';
}

h1::before,
h1::after,
h2::before,
h2::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

/* Fix Chrome Issue */
h1::after,
h2::after {
  z-index: -2;
}
/*  */

h1::before {
  color: #009CDE;
  animation: 5s h1-before ease-in-out infinite;
}

@keyframes h1-before {
  0%, 100% {
    transform: translate3d(10px, 5px, -10px);
  }
  50% {
    transform: translate3d(-10px, 2px, -10px);
  }
}

h1::after {
  color: #003C71;
  animation: 5s h1-after ease-in-out infinite;
}

@keyframes h1-after {
  0%, 100% {
    transform: translate3d(18px, 7px, -20px);
  }
  50% {
    transform: translate3d(-20px, 4px, -20px);
  }
}

h2::before {
  color: #009CDE;
  animation: 2.5s h2-before ease-in-out infinite;
}

@keyframes h2-before {
  0%, 100% {
    transform: translate3d(0px, 6px, -10px);
  }
  50% {
    transform: translate3d(0px, -3px, -10px);
  }
}

h2::after {
  color: #003C71;
  animation: 2.5s h2-after ease-in-out infinite;
}

@keyframes h2-after {
  0%, 100% {
    transform: translate3d(0px, 12px, -20px);
  }
  50% {
    transform: translate3d(0px, -6px, -20px);
  }
}
</style>
