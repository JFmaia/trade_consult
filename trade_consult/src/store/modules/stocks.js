import stocks from '@/data/stocks'
export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks;
        }
    },
    actions:{
        //commits são responsaveis de chamar uma mutation!
        buyStock({commit }){
            commit()
        },
        initStocks({commit}){
            commit('setStocks',stocks)
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}