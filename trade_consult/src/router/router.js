import Vue from 'vue';
import Router from 'vue-router';

//Componentes
import Home from '../components/MyHome'
import Portfolio from '../components/portfolio/MyPortfolio'
import Stocks from '../components/stocks/MyStocks'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/stocks',
            component: Stocks
        }
    ]
})