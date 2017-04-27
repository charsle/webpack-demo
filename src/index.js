/*
 * @Author:  
 * @Date: 2017/4/27 
 * @Last Modified by:  
 * @Last Modified time:2017/4/27 
 */
import Vue from 'vue';
import router from './routers/index';
import App from './components/admin/index';


new Vue( {
	el:'#app',
	router,
	render:h=>h(App)
} );