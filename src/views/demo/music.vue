<template>
  <div class="container">
    <Header />
    <div class="music-container borderbox">
      <div class="content out-animation">
        <audio id="player" :src="musicList[musicIndex].url" />
        <div class="music-list borderbox">
          <div
            v-for="item in musicList"
            :key="item.index"
            :class="{'music-list-item':true,'borderbox':true,'pointer':true,'active-music':item.index==musicIndex}"
            @click="onClickMusicItem(item.index)"
          >
            <div class="ellipsis" style="width:100%">{{ item.name }}</div>
          </div>
        </div>
        <div class="player-buttons">
          <div class="iconfont iconshangyishou player-icon-reset" @click="onLastMusic" />
          <div v-if="playerStatus" class="iconfont iconzanting player-icon-reset" @click="onChangePlayerStatus" />
          <div v-else class="iconfont iconzanting1 player-icon-reset" @click="onChangePlayerStatus" />
          <div class="iconfont iconxiayishou player-icon-reset" @click="onNextMusic" />
        </div>
        <div class="process-box pointer">
          <div id="process" class="process" />
          <div id="drag" class="drag pointer" />
          <div class="time-box out-animation-s">{{ timeData.currentMinut }}:{{ timeData.currentSecond }} / {{ timeData.allMinut }}:{{ timeData.allSecond }}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  data () {
    return {
      playerStatus: false,
      musicList: [
        {
          index: 0,
          name: 'Someone you loved',
          url: 'https://www.betterleo.com/music/SomeoneYouLoved.mp3'
        },
        {
          index: 1,
          name: '决意',
          url: 'https://www.betterleo.com/music/jueyi.mp3'
        },
        {
          index: 2,
          name: '少年游',
          url: 'https://www.betterleo.com/music/shaonianyou.mp3'
        },
        {
          index: 3,
          name: '斯顿雪域',
          url: 'https://www.betterleo.com/music/TenThousandYearSnowMountain.mp3'
        },
        {
          index: 4,
          name: 'One Moment In Time',
          url: 'https://www.betterleo.com/music/OneMomentInTime.mp3'
        },
        {
          index: 5,
          name: 'Myth Of Gaoyao',
          url: 'https://www.betterleo.com/music/MythOfGaoyao.mp3'
        },
        {
          index: 6,
          name: 'Canon In C',
          url: 'https://www.betterleo.com/music/VariationsOnTheKanonByPachelbel.mp3'
        },
        {
          index: 7,
          name: '白桦林',
          url: 'https://www.betterleo.com/music/baihualin.mp3'
        },
        {
          index: 8,
          name: '可惜没如果 - 钢琴',
          url: 'https://www.betterleo.com/music/keximeiruguo.mp3'
        },
        {
          index: 9,
          name: '只要为你活一天 - 功夫',
          url: 'https://www.betterleo.com/music/zhiyaoweinihuoyitian.mp3'
        }
      ],
      musicIndex: 0,
      showTime: false,
      timeData: {
        allMinut: '00',
        allSecond: '00',
        currentMinut: '00',
        currentSecond: '00'
      }
    }
  },
  mounted () {
    this.onEnd()
    this.updata()
  },
  methods: {
    onChangePlayerStatus () {
      this.playerStatus ? this.pauseMusic() : this.playMusic()
    },
    playMusic () {
      this.playerStatus = true
      const player = document.getElementById('player')
      player.play()
    },
    onEnd () {
      const player = document.getElementById('player')
      player.onended = () => {
        this.onNextMusic()
      }
    },
    pauseMusic () {
      this.playerStatus = false
      const player = document.getElementById('player')
      player.pause()
    },
    onNextMusic () {
      if (this.musicIndex === this.musicList.length - 1) {
        this.musicIndex = 0
      } else {
        this.musicIndex++
      }
      this.playerStatus = true
      this.$nextTick(() => {
        this.playMusic()
      })
    },
    onLastMusic () {
      if (this.musicIndex === 0) {
        this.musicIndex = this.musicList.length - 1
      } else {
        this.musicIndex--
      }
      this.playerStatus = true
      this.$nextTick(() => {
        this.playMusic()
      })
    },
    onClickMusicItem (index) {
      this.musicIndex = index
      this.$nextTick(() => {
        this.playMusic()
      })
    },
    onPlaying (e) {
      // console.log(e)
    },
    updata () {
      this.$nextTick(() => {
        const player = document.getElementById('player')
        player.ontimeupdate = () => {
          // 获取音频的总时间和当前播放时间，单位为秒
          const currentTime = player.currentTime
          const duration = player.duration
          const process = document.getElementById('process')
          const processPercent = (currentTime / duration) * 100
          // 设置进度条长度
          process.style.width = processPercent + '%'

          const drag = document.getElementById('drag')
          drag.style.left = processPercent + '%'

          // 将音频的总时间和当前播放时间转化为 xx:xx格式
          if (typeof duration !== 'number' || typeof currentTime !== 'number') return
          const allMinut = parseInt(duration / 60)
          let allSecond = parseInt(duration % 60)
          const currentMinut = parseInt(currentTime / 60)
          let currentSecond = parseInt(currentTime % 60)
          if (allSecond < 10) allSecond = ' 0' + String(allSecond)
          if (currentSecond < 10) currentSecond = ' 0' + String(currentSecond)
          this.timeData = {
            allMinut, allSecond, currentMinut, currentSecond
          }
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.music-container{
  min-height 600px
  margin 0 auto
  width 1122px
  height calc(100vh - 128px)
  display flex
  justify-content center
  align-items center
}
.content{
  height 80%
  width 100%
  display flex
  justify-content space-evenly
  background-image: linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%);
  background-color #fff
  box-shadow -10px 10px 24px rgba(0,0,0,.2)
  align-items center
  border-radius 8px
  position relative
  padding 32px 64px
  overflow hidden
}

.music-list{
  height 90%
  width 360px
  border-radius 6px
  display flex
  flex-direction column
  align-items center
  padding 32px 0
  backdrop-filter: blur(12px)
  background-color:rgba(255,255,255,.6)
  overflow-y auto
  box-shadow -10px 10px 10px rgba(0,0,0,.1)
  border: 1px solid rgba(255,255,255,.5)
  // background-image: linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%);
}
.music-list::-webkit-scrollbar{
  display:none;
}
.music-list-item{
  padding 8px 18px
  border-radius 12px
  margin-top 6px
  color $main-3
  width 300px
  text-align center
  user-select none
}

.active-music{
  color $main-5
  background-color #f2f2f2
  font-weight 600
}
.player-buttons{
  display flex
  justify-content center
  position relative
}
.player-icon-reset{
  font-size 64px
  cursor pointer
  color $white
  transition .4s
  margin 0 16px
}
.player-icon-reset:hover{
  transform scale(1.1)
}
.process-box{
  position absolute
  bottom 0px
  left 0
  width 100%
  height 24px
}
.process-box:hover .time-box{
  display:block
}
.process{
  position absolute
  bottom 0
  left 0
  height 8px
  width 0
  background-color $white
  border-radius 0 6px 6px 0
}
.time-box{
  position absolute
  right 24px
  top -36px
  color #fff
  display none
  transition .5s
}
.drag{
  height 14px
  width 14px
  border-radius 50%
  // background-color #000
  position absolute
  top -3px
  left 0
}

.dark
  .container
    background-color $dark-deep
  .content
    box-shadow -5px 5px 40px rgba(255,255,255,.6)
</style>
