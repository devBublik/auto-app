<template>
    <aside class="aside">
        <aside-box>
            <price-filter/>
        </aside-box>
        <aside-box>
            <category-filter/>
        </aside-box>
        <aside-box>
            <applicabilities-filter/>
        </aside-box>
        <aside-box v-show="$store.state.selectedFilters.length || $store.state.filterPrices[0] !== 0 || $store.state.filterPrices[1] !== 10000">
            <selected-filter/>
        </aside-box>
    </aside>
    
</template>

<script>
import AsideBox from './AsideBox.vue';
import PriceFilter from './PriceFilter.vue';
import CategoryFilter from './CategoryFilter.vue';
import ApplicabilitiesFilter from './ApplicabilitiesFilter.vue';
import SelectedFilter from './SelectedFilter.vue';
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'AsideEl',
    components: {
        AsideBox,
        PriceFilter,
        CategoryFilter,
        ApplicabilitiesFilter,
        SelectedFilter
    },
    computed: {
        ...mapState({
            selectedFilters: state => state.selectedFilters,
            filterPrices: state => state.filterPrices,
        }),
        ...mapGetters({
            getAllFilters: 'getAllFilters'
        })
    }

}
</script>