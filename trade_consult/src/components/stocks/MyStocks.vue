<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </v-layout>
</template>

<script lang="ts">
import Stock from './MyStock.vue'
export default {
    components:{Stock},
    computed:{
        stocks(){
            return this.$store.getters.stocks
        }
    }
}
</script>

<style scoped>
    
</style>