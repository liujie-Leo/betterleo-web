<template>
  <div class="container">
    <Header />
    <div class="login-content">
      <div class="login-box">
        <form v-if="isPasswordLogin" class="form">
          <div class="login-title fs-30">登录</div>
          <div class="form-item">
            <label class="form-item-label fs-20 email">邮箱</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont fs-14 iconyoujian" />
              <input v-model="form.email" autocomplete type="text" class="form-item-ipt email-ipt">
            </div>
          </div>
          <div class="form-item">
            <label class="form-item-label fs-20 password">密码</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont iconmima" />
              <input v-model="form.password" autocomplete type="password" class="form-item-ipt password-ipt">
            </div>
          </div>
          <div class="form-item">
            <div class="validate-box">
              <Validate />
            </div>
          </div>
          <div v-if="false" class="taggle-register-box">
            <div class="taggle-item">
              <label class="iconfont iconzhuce" />
              <span @click="goToRegister">注册</span>
            </div>
            <!-- <div class="taggle-item">
              <label class="iconfont code-icon iconyoujian" />
              <span class="toggle-text" @click="toggleLoginType">手机登录</span>
            </div> -->
          </div>
        </form>
        <form v-else class="form">
          <div class="login-title fs-30">登录</div>
          <div class="form-item">
            <label class="form-item-label fs-20 phone">手机号</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont icondenglu-copy" />
              <input v-model="form.phone" autocomplete type="text" class="form-item-ipt phone-ipt">
            </div>
          </div>
          <div class="form-item">
            <label class="form-item-label fs-20 code">验证码</label>
            <div class="ipt-box ipt-box-reset">
              <div class="ipt-icon iconfont iconyanzhengma2" />
              <input v-model="form.verifyCode" autocomplete type="text" class="form-item-ipt code-ipt">
            </div>
            <div :class="[{'get-code-btn':true},{'fs-10':true},{'disabled':getCodeDisabled}]" @click="onGetCode">{{ getCodeText }}</div>
          </div>
          <div v-if="false" class="taggle-register-box">
            <div class="taggle-item">
              <label class="iconfont iconzhuce" />
              <span @click="goToRegister">注册</span>
            </div>
            <div class="taggle-item">
              <label class="iconfont iconmima code-icon" />
              <span class="toggle-text" @click="toggleLoginType">邮箱登录</span>
            </div>
          </div>
        </form>
        <div class="login-button fs-22" @click="onLogin">
          <img v-if="!showLoading" src="../../assets/image/login.svg" class="login-img">
          <Loading v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiServiceUser from '@/api/service/api/user'
import token from '@/utils/token'
const apiServiceUser = new ApiServiceUser()
export default {
  data () {
    return {
      isLoadingEnd: false,
      isPasswordLogin: true,
      getCodeText: '获取验证码',
      getCodeDisabled: false,
      showLoading: false,
      form: {
        email: '',
        password: '',
        phone: '',
        verifyCode: ''
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoadingEnd = true
    }, 1500)
  },
  methods: {
    goToRegister () {
      this.$router.push({ path: '/register' })
    },
    getUserInfo () {
      const tokenValue = token.getToken()
      if (tokenValue) {
        apiServiceUser.getUserInfo().then(res => {
          this.$router.push({
            path: '/'
          })
        })
      }
    },
    onGetCode () {
      if (!this.getCodeDisabled) {
        this.getCodeDisabled = true
        let time = 5
        const timer = setInterval(() => {
          time--
          this.getCodeText = `${time}S`
          if (time < 0) {
            this.getCodeText = '获取验证码'
            this.getCodeDisabled = false
            window.clearInterval(timer)
          }
        }, 1000)
      }
    },
    toggleLoginType () {
      this.isPasswordLogin = !this.isPasswordLogin
    },
    async onLogin () {
      if (!this.form.email) {
        this.$message.warning('请输入邮箱')
        return
      }
      if (!this.form.password) {
        this.$message.warning('请输入密码')
        return
      }
      this.showLoading = true
      apiServiceUser.login(this.form).then(res => {
        this.$message.success({
          message: '登陆成功',
          duration: 1300
        })
        token.setToken(res.data.token)
        this.$store.commit('SAVE_USER', res.data.user)
        setTimeout(() => {
          this.$router.push({
            path: '/'
          })
          this.showLoading = false
        }, 1500)
      }).catch(e => {
        this.showLoading = false
      })
    },
    goToHomeImediately () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
input
  padding 0
.container
  margin 0 auto
  height 100vh
  background-image url('../../assets/image/login-bg.svg')
  background-size cover
  position: relative;
.login-content
  height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  justify-content center;
  align-items center
.logo-text
    color $blue
    font-weight 600
    margin-left 8px
    cursor pointer
    color $main-5
.login-box
    display flex
    align-items center
    position relative
    height 300px
    width 500px
    padding-bottom 30px
    background-color $white
    border-radius 24px 24px 54px 24px
    box-shadow 0px 0px 6px rgba(0,0,0,0.2)
  .login-title
    text-align center
    color $main
    font-weight 600
    height 50px
  .form
    width 100%
    height 70%
    display flex
    flex-direction column
    justify-content space-evenly
  .form-item
    display flex
    height 50px
  .form-item-label //
    color $main
    font-weight 600
    vertical-align middle
  .form-item-ipt
    height 30px
    border-radius 0 12px 12px 0
    border none
    outline none
  .ipt-box
    display flex
    justify-content center
    height 30px
    box-shadow 0px 2px 6px rgba(0,0,0,0.3)
    border-radius 12px
  .taggle-register-box
    height 30px
    width 100%
    color $main
    display flex
    justify-content center
  .code-icon
    margin-left 12px
  .iconyoujian,
  .iconzhuce
    color $main
  .toggle-text
    margin-left 4px
  .taggle-item
    cursor pointer
  .ipt-icon
    height 30px
    line-height 30px
    padding-left 10px
    color #333
    width 30px
    background-color $white
    border-radius 18px 0 0 18px
  .email
    margin-right 10px
  .phone
    margin-right 10px
  .password
    margin-right 10px
  .code
    margin-right 10px
  .get-code-btn
    width 70px
    height 30px
    margin-left 10px
    line-height 30px
    border-radius 16px
    text-align center
    border 1px solid $white
    font-weight 600
    background-color $white
    color $main
    padding 0
    box-shadow 0px 2px 6px rgba(0,0,0,0.2)
    cursor pointer
  .login-button
    height 50px
    width 50px
    background-color $white
    border-radius 42px
    position absolute
    right 22px
    bottom 22px
    line-height 50px
    text-align center
    color $blue
    font-weight 600
    display flex
    align-items center
    justify-content center
    cursor pointer
    box-shadow 0px 4px 8px rgba(0,0,0,0.2)
    transition .5s
  .login-button:hover
    transform scale(1.1)
  .login-img
    height 30px
    width 30px
  .disabled
    background-color $main-1
    color $gray-dark!important
    cursor not-allowed
  .form-item-label
    margin-left 64px
  .email
    margin-left 84px
  .password
    margin-left 84px
  .email-ipt,
  .password-ipt,
  .phone-ipt
    width 240px
  .code-ipt
    width 160px
  .validate-box
    width 270px
    margin-left 132px
</style>
