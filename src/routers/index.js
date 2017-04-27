/*
 * @Author:  
 * @Date: 2017/4/27 
 * @Last Modified by:  
 * @Last Modified time:2017/4/27 
 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/admin/index.vue'
Vue.use( Router );
export  default new Router({
	routers:[
		{
			path:'',
			components:Index
		}
	]
})