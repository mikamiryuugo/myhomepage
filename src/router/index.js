import Vue from 'vue'

// プラグインとしての使用
import Router from 'vue-router'
import smoothScroll from 'vue-smoothscroll'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Skill from '@/pages/SkillPage'
import Contact from '@/pages/ContactPage'

Vue.use(Router)
Vue.use(smoothScroll)

export default new Router({
  // mode: 'history', //GitHubPagesで画面が出ないためコメントアウトする
  routes: [
    {
      path: '/', // このパスにアクセスしたら
      name: 'Home',
      component: Home // このコンポーネントを呼ぶ
    },
    {
      path: '/about', // このパスにアクセスしたら
      name: 'About',
      component: About // このコンポーネントを呼ぶ
    },
    {
      path: '/skill', // このパスにアクセスしたら
      name: 'Skill',
      component: Skill // このコンポーネントを呼ぶ
    },
    {
      path: '/contact', // このパスにアクセスしたら
      name: 'Contact',
      component: Contact // このコンポーネントを呼ぶ
    }
  ]
})
