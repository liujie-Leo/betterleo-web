<template>
  <div :class="[{'main':true},{'fixed':isFixed}]">
    <div class="container">
      <div class="logo-box" @click="goToPage('home')">
        <div class="iconfont iconboxhezi reset-logo-icon" />
        <label class="logo-text fs-28">BetterLeo</label>
      </div>
      <div v-if="showNav" class="nav-box">
        <div :class="[{'nav-btns':true},{'fs-18':true},{'active':page=='home'}]" @click="goToPage('home')">
          <span>首页</span>
        </div>
        <div :class="[{'nav-btns':true},{'fs-18':true},{'active':page=='develop'}]" @click="goToPage('develop')">
          <span>开发</span>
        </div>
        <div :class="[{'nav-btns':true},{'fs-18':true},{'active':page=='digit'}]" @click="goToPage('digit')">
          <span>数码</span>
        </div>
        <div v-if="false" :class="[{'nav-btns':true},{'fs-18':true},{'active':page=='living'}]" @click="goToPage('living')">
          <span>生活</span>
        </div>
      </div>
      <div class="search-box">
        <div class="search">
          <input v-model="searchValue" type="text" placeholder="search..." class="search-ipt" @keyup.enter="goToSearch">
          <span class="iconfont iconsousuo search-icon" />
        </div>
        <div v-if="$store.state.user.userInfo.username" class="user-info" @click="onClickDrawer">
          <img v-if="$store.state.user.userInfo.avatar" :src="$store.state.user.userInfo.avatar" class="avatar">
          <img v-else src="../../assets/image/avatar3.png" class="avatar">
          <span class="username">{{ $store.state.user.userInfo.username? $store.state.user.userInfo.username:'未登录' }}</span>
        </div>
        <img v-if="$store.state.status.darkModel" class="light-img pointer" src="../../assets/image/light.png" @click="onToggelModel">
        <img v-else class="dark-img pointer" src="../../assets/image/dark.png" @click="onToggelModel">
      </div>
    </div>
    <el-backtop :bottom="90" :right="20" />
    <el-drawer
      :with-header="false"
      :append-to-body="true"
      :visible.sync="drawer"
      direction="ttb"
    >
      <div class="drawer-item" @click="goToPage('myPage','hiddenDrawer','login')">
        <div class="iconfont drawer-icon iconzhuye" />
        <div class="drawer-title">我的主页</div>
      </div>
      <div class="drawer-item">
        <div class="iconfont drawer-icon icontongzhi" />
        <div class="drawer-title">通知消息</div>
      </div>
      <div class="drawer-item" @click="goToPage('write','hiddenDrawer','login')">
        <div class="iconfont drawer-icon-reset drawer-icon iconxiebaogao" />
        <div class="drawer-title">发布</div>
      </div>
      <div class="drawer-item" @click="goToPage('edit','hiddenDrawer','login')">
        <div class="iconfont drawer-icon iconsettings" />
        <div class="drawer-title">账号设置</div>
      </div>
      <div class="drawer-item" @click="loginOut">
        <div class="iconfont drawer-icon iconhaoyou" />
        <div class="drawer-title">退出登录</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import token from '@/utils/token'
export default {
  props: {
    page: {
      type: String,
      default: ''
    },
    userInfo: {
      type: Object,
      default: function () { return {} }
    },
    showNav: {
      type: Boolean,
      default: true
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      drawer: false,
      searchValue: ''
    }
  },
  methods: {
    async goToPage (key, event, valid) {
      if (valid && JSON.stringify(this.$store.state.user.userInfo) === '{}') {
        this.$message.warning('您还没有登录，已为您跳转到登录页面')
        this.drawer = false
        this.$router.push({
          path: '/login'
        })
        return
      }
      const path = {
        home: '/',
        digit: '/articleListDigit',
        develop: '/articleListDevelop',
        living: '/articleListLiving',
        login: '/login',
        myPage: '/PersonalCenter/myPage',
        write: '/write',
        edit: '/PersonalCenter/edit'
      }
      if (event === 'hiddenDrawer') {
        this.drawer = false
      }
      this.$router.push({
        path: path[key]
      })
    },
    onClickDrawer () {
      if (JSON.stringify(this.$store.state.user.userInfo) === '{}') {
        this.goToPage('login', 'hiddenDrawer')
        return
      }
      this.drawer = true
    },
    loginOut () {
      this.drawer = false
      this.$message.success({
        message: '退出登录成功',
        duration: 1200
      })
      setTimeout(() => {
        token.removeToken()
        this.$store.commit('CLEAR_USER')
        this.$router.replace({
          path: '/login'
        })
      }, 500)
    },
    goToSearch () {
      if (this.searchValue) {
        this.$router.push({
          path: '/search',
          query: {
            searchValue: this.searchValue
          }
        })
        if (this.$route.name === 'search') {
          this.$router.go(0)
        }
      }
    },
    onToggelModel () {
      this.$store.commit('TOGGLE_DARKMODEL')
      // console.log(this.$store.state.status.darkModel)
      // console.log(window.localStorage.darkModel)
      // console.log('----')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.main
  transition: .2s
  height 64px
  width  100%
  min-width 1122px
  box-shadow 0px 1px 8px rgba(0,0,0,0.2)
  border-radius 0 0 4px 4px
  display flex
  justify-content center
  background-color:rgba(255,255,255,.7)
  backdrop-filter: blur(12px)
.fixed
  position: sticky
  top 0
  left 0
  z-index 999
.container
  width 1122px
  height 100%
  display flex
  justify-content space-between
  align-items center
.logo-box
  height 100%
  width 180px
  display flex
  justify-content center
  align-items center
  cursor pointer
.logo-img
  height 40px
  width 40px
.reset-logo-icon
  font-size 40px
  color $main-5
.logo-text
  color $main-5
  font-weight 600
  margin-left 8px
  cursor pointer
.user-box
  height 100%
  display flex
  justify-content center
  align-items center
.login-btn
  display block
  height 32px
  width 32px
  border-radius 50%
  text-align center
  line-height 32px
  color #fff
  cursor pointer
  background-color: #ccc;
.avatar
  height 35px
  width 35px
  border-radius 50%
  cursor pointer
.username
  width 60px
  color #777
  overflow: hidden
  margin-left 4px
  white-space: nowrap
  cursor pointer
  text-overflow: ellipsis
.user-info
  display flex
  justify-content center
  align-items center
/deep/ .el-icon-caret-top
  color $blue
.nav-box
  width 300px
  height 100%
  display flex
  justify-content space-between
  align-items center
  margin-left 150px
.search-box
  width 300px
  height 100%
  display flex
  justify-content flex-end
  align-items center
  position relative
.search
  background-color: #eee;
  border-radius 40px
  float right
  margin-right 12px
.search-icon
  display inline-block
  height 35px
  width 35px
  font-weight 600
  text-align center
  line-height 35px
  border-radius 50%
  color #fff
  background-color: #ccc;
  cursor: pointer;
.search-ipt
  outline none
  background-color: transparent
  border none
  border-radius 16px
  height 30px
  transition 0.5s
  width 0px
  padding 0
.search:hover  .search-icon
  background-color: #fff;
  color $main
  box-shadow 0px 0px 2px rgba(0,0,0,0.5)
  border 1px solid $main
.search:hover  .search-ipt
  padding 0 12px
  width 150px
.nav-btns
  width 68px
  height 50%
  border-radius 4px
  line-height 32px
  text-align center
  color #666
  font-weight 600
  cursor pointer
  display flex
  justify-content center
  align-items center
.nav-btns:hover
  box-shadow 0px 1px 6px rgba(0,0,0,0.2)
.active
  box-shadow 0px 1px 6px rgba(0,0,0,0.2)
  color $main
.light-img,
.dark-img
  height 34px
  width 34px
/deep/ .el-drawer
  width 520px!important
  height 98px!important
  margin 0 auto
  border-radius  0 0 4px 4px
/deep/ .el-drawer__body
  border-radius 0 0 12px 12px
  display flex
  justify-content center
  align-items center
  height 100%
  width 100%
.drawer-item
  width 64px
  height 64px
  margin-left 12px
  margin-right 12px
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  cursor pointer
.drawer-title
  font-size 12px
  color #333
  font-weight 600
.drawer-icon
  font-size 24px
  cursor pointer
  color $main
  transition .4s
.drawer-icon-reset
  font-size 42px
/deep/ :focus
  outline 0
.iconxiebaogao
  color $main-red
.drawer-item:hover .drawer-icon
  transform scale(1.05)
/deep/ .el-icon-caret-top
  color $main
/deep/ .el-backtop
  border-radius 4px

// 暗黑模式
.dark
  .main
    transition: .2s
    background-color rgba(31,40,58,.8)
    backdrop-filter: blur(12px)
  .active
    background-color $dark-light
    box-shadow 0px 1px 6px rgba(255,255,255,0.2)
  .logo-text,
  .nav-btns
  .reset-logo-icon
    color $main-2
  .search-icon,
  .search
    background-color $dark-deep
  .search:hover  .search-icon
    background-color: $main-3;
    color $main-5
    box-shadow none
    border 1px solid $main-5
  .search-ipt
    color $main-2
  /deep/ .el-backtop
    background-color $dark-light
</style>
