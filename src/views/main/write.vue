<template>
  <div v-if="isLoginStatus" class="main">
    <Header :show-nav="false" :is-fixed="false" />
    <div class="container">
      <div class="article">
        <div class="article-head">
          <div class="head-left">
            <div class="title">
              <div>文章信息</div>
            </div>
            <div class="left-section">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标题" required prop="title">
                  <el-input v-model="form.title" style="width:580px" />
                </el-form-item>
                <el-form-item label="副标题" prop="subTitle">
                  <el-input v-model="form.subTitle" style="width:580px" />
                </el-form-item>
                <el-form-item label="类型" required prop="type">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox-button key="develop" label="develop" border>开发</el-checkbox-button>
                    <el-checkbox-button key="digit" label="digit" border>数码</el-checkbox-button>
                    <el-checkbox-button key="living" label="living" border>生活</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item v-if="showSubType" label="子类型" required prop="subType">
                  <el-radio-group v-model="form.subType">
                    <el-radio-button v-for="item in developSubType" :key="item.value" :label="item.value">{{ item.name }}</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="标签" prop="tags">
                  <el-tag
                    v-for="tag in form.tags"
                    :key="tag"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                  >
                    {{ tag }}
                  </el-tag>
                  <el-input
                    v-if="inputVisible"
                    ref="saveTagInput"
                    v-model="inputValue"
                    class="input-new-tag"
                    style="width:100px"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  />
                  <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ New Tag</el-button>
                </el-form-item>
                <el-form-item label="封面图">
                  <up-load @onUpdateChange="onUpdateChange" />
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="head-right">
            <div class="title" />
            <div class="right-section">
              <img v-if="$store.state.user.userInfo.avatar" :src="$store.state.user.userInfo.avatar" class="avatar">
              <img v-else src="@/assets/image/avatar3.png" class="avatar">
              <span class="username">{{ $store.state.user.userInfo.username }}</span>
            </div>
          </div>
        </div>
        <div class="article-box">
          <mavon-editor
            ref="md"
            v-model="form.content"
            class="md"
            code-style="atom-one-dark"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
          />
        </div>
        <div class="btn-box">
          <el-button v-if="$route.query.edit==1" type="primary" :loading="onSubmiting" @click="onEdit">保存编辑</el-button>
          <el-button v-else type="primary" :loading="onSubmiting" @click="onSubmit">提交</el-button>
        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import ApiUpload from '@/api/service/api/upload'
import ApiUser from '@/api/service/api/user'
import ApiArticle from '@/api/service/api/article'
import { developSubType } from '@/json/data'
const apiUpload = new ApiUpload()
const apiArticle = new ApiArticle()
const apiUser = new ApiUser()
export default {
  data () {
    return {
      context: ' ', // 输入的数据
      form: {
        type: [],
        tags: [],
        content: '',
        author: this.$store.state.user.userInfo.username,
        coverImage: '',
        title: '',
        subTitle: '',
        authorId: this.$store.state.user.userInfo.id,
        subType: []
      },
      inputVisible: false,
      inputValue: '',
      developSubType: developSubType.slice(1, developSubType.length - 1),
      xlsxFile: '',
      isLoginStatus: false,
      onSubmiting: false
    }
  },
  computed: {
    showSubType () {
      const index = this.form.type.indexOf('develop')
      return index !== -1
    }
  },
  mounted () {
    this.isLogin()
    if (this.$route.query.id) {
      this.getData()
    }
  },
  methods: {
    async isLogin () {
      const res = await apiUser.getUserInfo()
      if (JSON.stringify(res.data) == '{}') {
        this.$message.warning({
          message: '登陆之后才可以发表文章哦,已为您跳转到登录页面',
          duration: 2500
        })
        this.$router.push({
          path: '/login'
        })
      } else {
        this.isLoginStatus = true
      }
    },
    getData () {
      apiArticle.getArticle({ id: this.$route.query.id }).then(res => {
        this.form = res.data.list[0]
      })
    },
    handleClose (tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.form.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.onSubmiting = true
          apiArticle.createArticle(this.form).then(res => {
            setTimeout(() => {
              this.$router.push({
                path: '/success'
              })
            }, 1500)
          })
        } else {
          this.$message.warning('请填写完整的文章信息')
        }
      })
    },
    onEdit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.onSubmiting = true
          apiArticle.editArticle(this.form).then(res => {
            setTimeout(() => {
              this.$router.push({
                path: '/success'
              })
            }, 1500)
          })
        } else {
          this.$message.warning('请填写完整的文章信息')
        }
      })
    },
    resetForm () {
      for (const key in this.form) {
        const value = this.form[key]
        if (value instanceof Array) {
          this.form[key] = []
        } else {
          this.form[key] = ''
        }
      }
    },
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new window.FormData()
      formdata.append('file', $file)
      apiUpload.upload(formdata).then(res => {
        this.$refs.md.$img2Url(pos, res.data.url)
      })
    },
    $imgDel (e) {
    },
    onUpdateChange (url) {
      this.form.coverImage = url
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container
  overflow hidden;
  width:100%;
  background-color $main-bg
.article
  width 1122px
  min-width 1122px
  margin 0 auto
.article-box
  width 90%
  height 700px
  margin 12px auto
  background-color $white
  border-radius 4px
  overflow hidden
.article-head
  width 90%
  margin 24px auto 0
  display  flex
  justify-content space-between
  align-items center
.head-left
  width 75%
.head-right
  width 23.5%
.left-section
  width 100%
  border-radius 4px
  background-color #fff
  margin 0 auto
  padding 24px 24px 12px 0
.right-section
  margin-top 22px
  // background-color #fff
  height 326px
  border-radius 4px
  display flex
  align-items center
  justify-content center
.right-section img
  height 64px
  width 64px
  border-radius 50%
  margin-right 12px
.title
  width 90%
  padding-left 6px
  padding-bottom 4px
.title div
  font-size 18px
  color $main-5
  font-weight 600
.md
  height 100%
  z-index 1
/deep/ .el-checkbox
  margin-right 0
/deep/ .el-checkbox-group
  height 32px
/deep/ .el-tag
  margin-right 6px
/deep/ pre
  background-color #292B2E!important
  padding 6px!important
/deep/ code
  font-size 13px!important
.btn-box
  width 90%
  margin 0 auto 24px
  display flex
  justify-content flex-end
</style>
