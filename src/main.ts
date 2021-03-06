import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router';
import './assets/styles/reset.scss';
// import 'amfe-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import store from './store'
import Web3 from 'web3';
import Echart from 'echarts';
import {ApiServer} from '@/request';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = Echart;




new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');





