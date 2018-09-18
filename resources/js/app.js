require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes'

import home from './components/Home.vue'
import MainApp from './components/MainApp.vue'

const app = new Vue({
    el: '#app',
    routes,
    components: {
    	home,
    	MainApp
    }
});
