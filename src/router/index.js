import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/container/NavigationBar'
import Menu from '../components/container/Menu'
import Swipe from '../components/container/Swiper'
import Notice from '../components/container/Notice'
import Foot from '../components/container/Foot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        bar: NavigationBar,
        menu: Menu,
        carousel: Swipe,
        notice: Notice,
        foot: Foot,
      }
    }]
});

