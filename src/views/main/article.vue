<template>
  <div class="main-article">
    <Header />
    <div class="container-article">
      <div class="article">
        <div class="article-box">
          <div class="article-box-l out-animation">
            <img class="cover-img" :src="articleDetail.coverImage" alt="">
            <div class="title">{{ articleDetail.title }}</div>
            <!-- preview-background="#fff" -->
            <mavon-editor
              class="md"
              :value="articleDetail.content"
              :subfield="false"
              default-open="preview"
              :toolbars-flag="false"
              :editable="false"
              :scroll-style="false"
              :box-shadow="false"
              :ishljs="true"
              :external-link="externalLink"
              code-style="atom-one-dark"
            />
          </div>
          <div class="article-box-r">
            <div class="menu">
              <div v-for="item in titleArray" :key="item.id">
                <div :class="['menu-title',{'menu-active':item.title.isActive},'ellipsis']" @click="onClickMenu(item.title)">{{ item.title.content }}</div>
                <div class="menu-sub-title-box">
                  <div v-for="subItem in item.subTitle" :key="subItem.id" :class="['menu-subtitle','ellipsis',{'menu-active':subItem.isActive}]" @click="onClickMenu(subItem)">{{ subItem.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import { deepClone } from '@/utils/tools'
const apiArticle = new ApiArticle()
export default {
  metaInfo: {
    title: 'BetterLeo',
    meta: [
      {
        name: 'keywords',
        content: 'betterleo,BetterLeo,betterleo博客,BetterLeo博客,betterleo文档集'
      }, {
        name: 'description',
        content: 'BetterLeo是一个用来提供记录和查找博客的网站'
      }
    ]
  },
  data () {
    return {
      articleDetail: {
        content: ''
      },
      externalLink: {
        markdown_css: function () {
          // 这是你的markdown css文件路径
          return 'https://www.betterleo.com/cdn/markdown/markdown/github-markdown.min.css'
        },
        hljs_js: function () {
          // 这是你的hljs文件路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/highlight.min.js'
        },
        hljs_css: function (css) {
          // 这是你的代码高亮配色文件路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/styles/' + css + '.min.css'
        },
        hljs_lang: function (lang) {
          // 这是你的代码高亮语言解析路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/languages/' + lang + '.min.js'
        },
        katex_css: function () {
          // 这是你的katex配色方案路径路径
          return 'https://www.betterleo.com/cdn/markdown/katex/katex.min.css'
        },
        katex_js: function () {
          // 这是你的katex.js路径
          return 'https://www.betterleo.com/cdn/markdown/katex/katex.min.js'
        }
      },
      titleArray: [],
      imgLoaded: 0,
      imgCount: 0
    }
  },
  watch: {
    imgLoaded (value) {
    // 图片加载完毕后，开始计算文章标题高度
      if (value >= this.imgCount) {
        this.initOffsetTop()
      }
    }
  },
  mounted () {
    this.initData()
    window.addEventListener('scroll', this.scrollChange)
    this.createLink()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => {})
  },
  methods: {
    initData () {
      apiArticle.getArticle({ id: this.$route.query.id }).then(res => {
        this.articleDetail = res.data.list[0]
        document.title = `${this.articleDetail.title}`
        this.$nextTick(() => {
          this.initParagraph()
        })
      })
    },
    scrollChange () {
      const height = document.documentElement.scrollTop
      this.setActiveTitle(height)
    },
    createLink () {
      var head = document.getElementsByTagName('head')[0]
      var linkTag = document.createElement('link')
      linkTag.href = 'https://www.betterleo.com/cdn/markdown/highlightjs/styles/atom-one-dark.min.css'
      linkTag.setAttribute('rel', 'stylesheet')
      linkTag.setAttribute('id', 'md-code-style')
      linkTag.setAttribute('type', 'text/css')
      head.appendChild(linkTag)
    },
    setActiveTitle (height) {
      // if (height + 84 > this.titleArray[0].title.offsetTop) {
      //   this.resetTitleArrayActive()
      //   this.titleArray[0].title.isActive = true
      // } else {
      //   this.titleArray[0].title.isActive = false
      // }
      // if (height + 84 > this.titleArray[1].title.offsetTop) {
      //   this.resetTitleArrayActive()
      //   this.titleArray[1].title.isActive = true
      // } else {
      //   this.titleArray[1].title.isActive = false
      // }
    },
    // 初始化目录
    initParagraph () {
      const titleArray = []
      const firstLevelElement = []
      // 获取h3标签下的一级标题所有DOM
      Array.from(document.querySelectorAll('h3'), element => {
        firstLevelElement.push(element.childNodes[0])
      })
      firstLevelElement.splice(0, firstLevelElement.length / 2)
      firstLevelElement.forEach(element => {
        const id = element.getAttribute && element.getAttribute('id')
        if (id) {
          const aElement = document.getElementById(id)
          titleArray.push({
            title: {
              content: aElement.parentNode.textContent,
              offsetTop: null,
              id,
              isActive: false
            },
            subTitle: []
          })
        }
      })

      const secondLevelElement = []
      // 获取h4标签下所有的二级标题DOM
      Array.from(document.querySelectorAll('h4'), element => {
        secondLevelElement.push(element.childNodes[0])
      })
      secondLevelElement.splice(0, secondLevelElement.length / 2)
      secondLevelElement.forEach(element => {
        const id = element.getAttribute && element.getAttribute('id')
        if (id) {
          const aElement = document.getElementById(id)
          // 暂时只支持十个段落
          for (let i = 1; i < 10; i++) {
            if (id[0] == i) {
              titleArray[i - 1].subTitle.push({
                content: aElement.parentNode.textContent,
                id,
                isActive: false
              })
            }
          }
        }
      })
      this.titleArray = titleArray
      this.copyTitleArray = deepClone(titleArray)
      this.isLoadAllImags()
    },
    // 当文章所有图片都加载完毕后再计算top距离
    isLoadAllImags () {
      // 判断markdown内的所有图片是否加载完毕
      const markdown = document.getElementsByClassName('markdown-body')
      let imgs = markdown[0].getElementsByTagName('img')
      imgs = [...imgs]
      imgs.splice(0, imgs.length / 2)
      this.imgCount = this.articleDetail.coverImage ? imgs.length + 1 : imgs.length
      if (this.imgCount === 0) {
        this.initOffsetTop()
        return
      }
      var that = this
      imgs.forEach(item => {
        item.onload = function () {
          that.imgLoaded++
        }
      })

      // 判断文章封面图片是否加载完毕
      const coverImage = document.getElementsByClassName('cover-img')
      coverImage[0].onload = function () {
        that.imgLoaded++
      }
    },
    // 初始化标题和副标题距离根节点顶部的距离
    initOffsetTop () {
      this.titleArray.forEach(item => {
        const titleElement = document.getElementById(item.title.id)
        item.title.offsetTop = this.getElementTop(titleElement)
        item.subTitle.forEach(subItem => {
          const subtitleElement = document.getElementById(subItem.id)
          subItem.offsetTop = this.getElementTop(subtitleElement)
        })
      })
    },
    onClickMenu (item) {
      this.resetTitleArrayActive()
      item.isActive = true
      window.scrollTo({
        top: item.offsetTop - 84,
        behavior: 'smooth'
      })
    },
    // 重置titleArray里的isActive属性
    resetTitleArrayActive () {
      this.titleArray.forEach(item => {
        item.title.isActive = false
        item.subTitle.forEach(subItem => {
          subItem.isActive = false
        })
      })
    },
    // 获取任意元素距离根元素顶部的距离
    getElementTop (element) {
      var actualTop = element.offsetTop
      var current = element.offsetParent
      while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
      }
      return actualTop
    },
    // 获取任意元素距离根元素左侧的距离
    getElementLeft (element) {
      var actualLeft = element.offsetLeft
      var current = element.offsetParent
      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      return actualLeft
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/vendor.styl'
.container-article
  overflow hidden;
  width:100%;
  background-color $main-bg
.article
  width 1122px
  min-width 1122px
  margin 0 auto
.article-box
  width 100%
  box-sizing border-box
  padding 24px 0
  min-height 100vh
  overflow hidden
  display flex
  justify-content center
.cover-img
  box-shadow 1px 1px 6px rgba(0,0,0,0.1)
  border-radius 4px
  width 100%
.article-box-l
  width 70%
  background-color $white
  border-radius 4px
  overflow hidden
.article-box-r
  width 16%
  height 500px
  margin-left 12px
.menu
  position fixed
  top 200px
  width 300px
.menu-title
  color #655e5e
  font-size 14px
  font-weight 600
  margin-bottom 8px
  position relative
  cursor pointer
  width 200px
  padding-left 30px
  box-sizing border-box
.menu-title:hover
  color $black
.menu-title:hover::before
  background-color $black
.menu-title::before
  content ''
  position absolute
  left 8px
  top 8px
  height 4px
  width 16px
  background-color #655e5e
  border-radius 2px
  cursor pointer
.menu-active
  color $black!important
.menu-active.menu-title::before
  background-color $black
.menu-active.menu-subtitle::before
  background-color $black
.menu-subtitle
  color #655e5e
  font-size 14px
  margin-bottom 8px
  cursor pointer
  position relative
  box-sizing border-box
  padding-left 30px
  width 200px
.menu-subtitle:hover
  color $black
.menu-subtitle:hover::before
  background-color $black
.menu-subtitle::before
  content ''
  position absolute
  left 12px
  top 8px
  height 4px
  width 12px
  background-color #ccc
  border-radius 2px
  cursor pointer
.title
  font-size 32px
  font-weight 600
  padding 24px 24px 0 24px
  position relative
/deep/ pre
  border-radius 8px!important
  background-color #2A2D34!important
  padding 6px!important
.md
  z-index 1
  background-color #fff
  border none
/deep/ code
  font-size 13px!important
/deep/ .v-show-content
  background-color $white!important
// 暗黑模式
.dark
  .main-article,
  .container-article
    background-color $dark-deep
  .menu-title,
  .menu-subtitle
    color $main-2
  .menu-subtitle::before
    background-color #655e5e
  .menu-active
    color $white!important
  .menu-active.menu-title::before
    background-color $white
  .menu-active.menu-subtitle::before
    background-color $white
  .menu-title:hover
    color $white
  .menu-subtitle:hover
    color $white
  .menu-subtitle:hover::before
    background-color $white
  .menu-title:hover::before
    background-color $white
  .menu-title:hover::before
    color $white
</style>
