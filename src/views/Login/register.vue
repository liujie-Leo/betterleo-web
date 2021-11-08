<template>
  <div class="container">
    <Header />
    <div class="login-content">
      <div class="login-box">
        <form class="form">
          <div class="login-title fs-30">注册</div>
          <div class="form-item">
            <label class="form-item-label fs-18 email">邮箱</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont iconyoujian" />
              <input v-model="form.email" autocomplete type="text" class="form-item-ipt email-ipt">
            </div>
          </div>
          <div class="form-item">
            <label class="form-item-label fs-18 password">密码</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont iconmima" />
              <input v-model="form.password" autocomplete type="password" class="form-item-ipt password-ipt">
            </div>
          </div>
          <div class="form-item">
            <label class="form-item-label fs-18 password">确认密码</label>
            <div class="ipt-box">
              <div class="ipt-icon iconfont iconfuzhi" />
              <input v-model="form.ensurePassword" autocomplete type="password" class="form-item-ipt password-ipt">
            </div>
          </div>
          <div class="form-item">
            <label class="form-item-label fs-18 code">验证码</label>
            <div class="ipt-box ipt-box-reset">
              <div class="ipt-icon iconfont iconyanzhengma2" />
              <input v-model="form.verifyCode" autocomplete type="text" class="form-item-ipt code-ipt">
            </div>
            <div :class="[{'get-code-btn':true},{'fs-10':true},{'disabled':getCodeDisabled}]" @click="onGetCode">{{ getCodeText }}</div>
          </div>
          <div class="taggle-register-box">
            <div class="taggle-item">
              <span>想起来账号了吗？</span>
              <label class="iconfont iconzhuce" />
              <span class="go-login" @click="goToLogin">去登录</span>
            </div>
          </div>
        </form>
        <div class="login-button fs-22" @click="onRegister">
          <img v-if="!showLoading" src="../../assets/image/login.svg" class="login-img">
          <Loading v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import token from '@/utils/token'
import ApiServiceLogin from '@/api/service/api/user'
const apiServiceLogin = new ApiServiceLogin()
export default {
  data () {
    return {
      isPasswordLogin: true,
      getCodeText: '获取验证码',
      getCodeDisabled: false,
      showLoading: false,
      form: {
        email: '',
        password: '',
        ensurePassword: '',
        verifyCode: ''
      },
      msgText: {
        email: '邮箱',
        password: '密码',
        ensurePassword: '确认密码',
        verifyCode: '验证码'
      }
    }
  },
  methods: {
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
    goToLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    async onRegister () {
      this.showLoading = true
      for (const key in this.form) {
        if (!this.form[key]) {
          this.$message.warning(`请输入${this.msgText[key]}`)
          this.showLoading = false
          return
        }
      }
      apiServiceLogin.register(this.form).then(
        res => {
          this.$message.success('注册成功')
          apiServiceLogin.login({ email: this.form.email, password: this.form.password }).then(res => {
            token.setToken(res.data.token)
            this.$store.commit('SAVE_USER', res.data.user)
            setTimeout(() => {
              this.$router.push({
                path: '/'
              })
            }, 1500)
          })
          this.showLoading = false
        }
      )
      this.showLoading = false
    }

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.error
  color #FF4E5E!important
input
  padding 0
.container
  margin 0 auto
  height 100vh
  background-image url('../../assets/image/login-bg.svg')
  background-size cover
.login-content
  width: 100%;
  height: calc(100vh - 64px);
  display flex
  justify-content center
  align-items center
.login-box
    display flex
    align-items center
    position relative
    padding-bottom 30px
    background-color #fff
    border-radius 24px 24px 68px 24px
    box-shadow 0px 4px 16px rgba(0,0,0,0.2)
  .login-box::before
    content:''
    position absolute
    height 20px
    width 20px
    border-radius 50%
    background-color #fff
    box-shadow 0px 4px 8px rgba(0,0,0,0.1)
    left 14px
    top 14px
  .login-title
    text-align center
    color $main
    font-weight 600
    height 70px
    line-height 70px
  .form
    width 100%
    height 70%
    display flex
    flex-direction column
    justify-content space-evenly
  .form-item
    display flex
    padding-bottom 22px
    position relative
  .form-item-label
    height 30px
    width 15%
    text-align right
    color $main
    font-weight 600
    vertical-align middle
  .ipt-box-container
    width 70%
  .form-item-ipt
    height 30px
    border-radius 0 18px 18px 0
    border none
    outline none
  .ipt-box
    display flex
    height 30px
    justify-content center
    box-shadow 0px 2px 8px rgba(0,0,0,0.2)
    border-radius 18px
  .taggle-register-box
    height 30px
    width 100%
    color $main
    display flex
    justify-content center
  .iconyoujian,
  .iconzhuce
    color $main
  .toggle-text
    margin-left 4px
  .go-login
    cursor pointer
  .ipt-icon
    height 30px
    line-height 30px
    padding-left 10px
    color #333
    width 30px
    background-color #fff
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
    border 1px solid #fff
    font-weight 600
    // background-color $blue
    color #fff
    padding 0
    box-shadow 0px 2px 8px rgba(0,0,0,0.2)
    background-color $main-3
    cursor pointer
  .login-button
    height 50px
    width 50px
    background-color $fff
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
    transform scale(1.05)
  .login-img
    height 30px
    width 30px
  .disabled
    background-color $main-2
    color $gray-dark!important
    cursor not-allowed
  .login-box
    height 450px
    width 500px
  .email-ipt,
  .password-ipt,
  .phone-ipt
    width 240px
  .code-ipt
    width 160px
  .form-item
    display flex
    justify-content center
</style>
