<template>
     <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from '@/components/portfolio/MyStock.vue'
export default {
    components:{Stock},
    computed:{
      ...mapGetters({
        stocks: 'stockPortfolio',
      })
    }
}
</script>

<style scoped>
    
</style>