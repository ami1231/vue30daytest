// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.use(Vuex);
import App from './App.vue';
import Hello from './components/Hello.vue';
import CtoF from './components/C2F.vue';
import learnComponent from './page/learnComponent.vue';

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++;
    }
  }
});

const router = new VueRouter({
  mode:'history',
  base:__dirname,
    routes: [
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
      {
        path: '/c2f',
        name: 'c2f',
        component: CtoF
      },
      {
        path:'/learnComponent',
        name:'learnComponent',
        component:learnComponent
      },
      { path: '/*', redirect: '/hello' }
    ]
  }
);

new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});