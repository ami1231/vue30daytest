import Vue from 'vue';
import VueRouter from 'vue-router';
//init vue-router2.0
Vue.use(VueRouter);
import Hello from '../components/Hello.vue';
import CtoF from '../components/C2F.vue';

export default new VueRouter({
routes: [
  {
    path:'/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/c2f',
    name: 'c2f',
    component:CtoF
  },
  {
    path: '/*',
    redirect: 'hello'
  }
]
});

