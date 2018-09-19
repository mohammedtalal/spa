require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import StoreData from './store.js';
import home from './components/Home.vue';
import MainApp from './components/MainApp.vue';


Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(StoreData);


const app = new Vue({
    el: '#app',
    routes,
    store,
    components: {
    	home,
    	MainApp
    }
});
