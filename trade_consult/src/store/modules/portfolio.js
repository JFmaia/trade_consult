export default {
    state:{
        funds:10000,
        stocks: [],
    },
    getters:{
        //O parametro getters dentro de stockPortfolio é todos os getters que estão na minha gerencia de estado.
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id === stock.id);
                return {
                    id: stock.id,
                    name: record.name,
                    price: record.price,
                    quantity: stock.quantity,
                }
            })
        },
        funds(state){
            return state.funds;
        }
    },
    mutations:{
        buyStock(state,{stockId, quantity, stockPrice}){
            const record = state.stocks.find(element => element.id === stockId)
            if(record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity,
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state,{stockId, quantity, stockPrice}){
            const record = state.stocks.find(element => element.id === stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity;
            }else{
                state.stocks.splice(state.stocks.indexOf(record),1);
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds;
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
        }
    },
    actions:{
        sellStock({commit},order){
            commit('sellStock',order)
        }
    }
}