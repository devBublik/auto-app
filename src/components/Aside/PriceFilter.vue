<template>
    <div class="filter price-filter">
        <p class="filter__title">Цена</p>
        <VueSimpleRangeSlider
            :min="0"
            :max="10000"
            v-model="$store.state.filterPrices"
        />
        <div class="price-filter__values">
            <div class="price-filter__el"> от <span class="price-filter__price">{{ $store.state.filterPrices[0] }}</span></div>
            <div class="price-filter__el"> до <span class="price-filter__price">{{ $store.state.filterPrices[1] }}</span></div>
        </div>
    </div>
</template>

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
import { mapMutations, mapState } from "vuex";
export default {
    name: 'PriceFilter',
    components: {
        VueSimpleRangeSlider,
    },
    computed: {
        ...mapState({
            filterPrices: state => state.filterPrices
        }),
    },
}
</script>

<style lang="scss">

    .price-filter {

        &__values {
            display: flex;
            gap: 24px;
            margin-top: 8px;
        }

        &__el {
            padding: 0 8px;
            width: 47%;
            display: flex;
            gap: 24px;
        }

        &__price {
            font-family: 'Open Sans', sans-serif;
            color: #A6A6A6;
            font-size: 16px;
        }

        .simple-range-slider-popover,
        .simple-range-slider-popover-arrow {
            display: none;
        }

        .simple-range-slider .simple-range-slider-bg-bar .simple-range-slider-bar {
            background: #C618AB!important;
        }

        .simple-range-slider-handle {
            width: 13px;
            height: 13px;
            background: #C618AB;
            opacity: 1!important;
            border-radius: 50%;
        }

        .simple-range-slider .simple-range-slider-bg-bar .simple-range-slider-anchor{
            box-shadow: none;
        }
    }
    
</style>
