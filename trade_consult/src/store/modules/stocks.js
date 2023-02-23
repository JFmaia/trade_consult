export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks;
        },
        randomizeStocks(state){
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            });
        }
    },
    actions:{
        //commits são responsaveis de chamar uma mutation!
        buyStock({commit},order){
            commit('buyStock',order);
        },
        initStocks({commit}){
            commit('setStocks')
        },
        randomizeStocks({commit}){
            commit('randomizeStocks')
        },
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}