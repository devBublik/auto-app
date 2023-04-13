<template>
    <div class="products">
        <product-item
            v-for="product in $store.getters.sortedProducts"
            :key="product.id"
            :product="product"
        />
        <div v-show="!$store.getters.sortedProducts.length">Не найдено подходящих товаров</div>
    </div>
    
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'ProductsList',
    components: {
       ProductItem,
    },
    computed: {
        ...mapState({
            products: state => state.products
        }),
        ...mapGetters({
            sortedProducts: 'sortedProducts'
        })
    }
}
</script>

<style lang="scss">
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 32px;
    }
</style>