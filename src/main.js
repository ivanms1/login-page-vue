import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Profile from './components/Profile.vue';

Vue.use(VueRouter);

import {
  Button,
  Form,
  Input,
  FormItem,
  Container
} from 'element-ui';

import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(FormItem.name, FormItem);
Vue.component(Container.name, Container);

Vue.config.productionTip = false;

const routes = [
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '*', redirect: '/login' } 
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
