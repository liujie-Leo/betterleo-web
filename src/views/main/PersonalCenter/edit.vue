<template>
  <div class="container">
    <Header page="" />
    <div class="box">
      <div class="iconfont fs-30 reset-icon iconzhuye" @click="goBack" />
      <!-- <img class="xianrenzhang" src="../../assets/image/xianrenzhang.svg"> -->
      <div class="card-0">
        <div class="base-info">
          <div class="avatar-box">
            <div class="avatar-info">
              <el-upload
                class="upload-demo"
                action="https://www.betterleo.com:3000/api/upload"
                :limit="1"
                :on-success="onUploadAvatarSuccess"
              >
                <span>编辑</span>
              </el-upload>
            </div>
            <img v-if="$store.state.user.userInfo.avatar" :src="$store.state.user.userInfo.avatar" class="avatar">
            <img v-else src="@/assets/image/avatar3.png" class="avatar">
          </div>
          <div class="info-box">
            <h2>{{ $store.state.user.userInfo.username }}</h2>
            <label class="slogan fs-14 text-main-5">{{ $store.state.user.userInfo.slogan }}</label>
          </div>
        </div>
      </div>
      <div class="card-1">
        <div class="edit-box">
          <div class="save-btn-1" @click="onSave">保存</div>
          <h2>资料</h2>
          <el-form ref="form" label-position="left" label-width="74px">
            <el-form-item label="用户名" props="username">
              <el-input v-model="form.username" style="width:312px" placeholder="..." />
            </el-form-item>
            <el-form-item label="座右铭" props="slogan">
              <el-input v-model="form.slogan" style="width:312px" placeholder="..." />
            </el-form-item>
            <el-form-item label="个人介绍" props="introduce">
              <el-input v-model="form.introduce" style="width:312px" placeholder="..." />
            </el-form-item>
            <el-form-item label="个人主页" props="homePage">
              <el-input v-model="form.homePage" style="width:312px" placeholder="..." />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="card-2">
        <h2>账号</h2>
        <el-form ref="form" label-position="left" label-width="74px">
          <el-form-item label="邮箱" props="introduce">
            <!-- <el-input v-model="form.email" style="width:312px" placeholder="..." disabled /> -->
            <span>{{ form.email }}</span>
          </el-form-item>
          <el-form-item label="手机号" props="homePage">
            <!-- <el-input v-model="form.phone" style="width:312px" placeholder="..." disabled /> -->
            <span>{{ form.phone }}</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import ApiUser from '@/api/service/api/user'
const apiUser = new ApiUser()
export default {
  data () {
    return {
      form: {
        username: '',
        phone: '',
        email: '',
        id: '',
        slogan: ''
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getData () {
      setTimeout(() => {
        this.form.username = this.$store.state.user.userInfo.username
        this.form.phone = this.$store.state.user.userInfo.phone
        this.form.email = this.$store.state.user.userInfo.email
        this.form.id = this.$store.state.user.userInfo.id
        this.form.slogan = this.$store.state.user.userInfo.slogan
      }, 100)
    },
    onSave () {
      apiUser.editUserInfo(this.form).then(res => {
        this.$message.success('保存成功')
        setTimeout(() => {
          this.$router.go(0)
        }, 200)
      })
    },
    onUploadAvatarSuccess (e) {
      apiUser.editUserInfo({ avatar: e.data.url }).then(res => {
        this.$message.success('头像修改成功')
        setTimeout(() => {
          this.$router.go(0)
        }, 1000)
      }).catch(e => {
        this.$store.commit('CLEAR_USER')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  background-color: $main-bg;
.box
  width 1122px
  min-width 1122px
  margin 24px auto 0px
  position relative
  // display flex
  padding-left 122px
  padding-bottom 24px
  min-height calc(100vh - 64px)
.card-0
  background-color #fff
  padding 0 18px
  width 674px
  height 120
  border-radius 6px
  margin-bottom 12px
.card-1
  background-color #fff
  padding 18px
  width 674px
  height 316px
  border-radius 6px
  margin-bottom 12px
.card-2
  background-color #fff
  padding  18px
  width 674px
  height 200px
  border-radius 6px
.base-info
  display flex
  height 120px
  align-items center
.info-box
  padding-left 8px
.avatar-box
  height 70px
  width 70px
  position relative
  overflow hidden
  border-radius 50%
.avatar-box:hover .avatar-info
  opacity  1
  bottom 0px
.avatar-info
  transition .5s
  height 24px
  width 100%
  position absolute
  bottom -5px
  left 0
  line-height 24px
  text-align center
  background-color rgba(0,0,0,0.4)
  font-size 12px
  color #fff
  opacity 0
  cursor pointer
.avatar
  border-radius 50%
  height: 100%;
  width 100%
  cursor pointer
.reset-icon
  position absolute
  left 78px
  top 2px
  cursor pointer
.edit-box
  height 100%
  position relative
.save-btn-1
  color #fff
  height 36px
  width 56px
  border-radius 12px
  position absolute
  right 88px
  bottom -42px
  background-color $main-3
  line-height 36px
  text-align center
  cursor pointer
  box-shadow 2px 2px 6px rgba(0,0,0,0.2)
  font-weight 600
  transition 1s
.save-btn-1:hover
  box-shadow 2px 2px 6px rgba(0,0,0,0.5)
.xianrenzhang
  height 200px
  width 200px
  position absolute
  right 160px
  top 474px
/deep/ .el-form
  padding-top 10px
  width 60%
/deep/ .el-input__inner
  border none
/deep/ .el-form-item
  border-bottom 1px solid #ccc
</style>
