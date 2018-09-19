import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/Home.vue';
import Login from './components/auth/Login.vue';
// import MainApp from './components/MainApp.vue'

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [
    	{
    		path: '/',
            component: home,
            meta: {
	            requiresAuth: true
	        }
    	},
    	{
	        path: '/login',
	        component: Login
	    },
    ]
});