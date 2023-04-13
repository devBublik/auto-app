<template>
    <div class="category-filter">
        <div class="filter__title filter__title_margin">Категории</div>
            <checkbox-el 
                v-for="category in  $store.getters.getCategories"
                :key="category.value"
                :category="category"
                :hanle-click="setCategory"
            />
    </div>
</template>

<script>
import CheckboxEl from '../UIComponents/CheckboxEl.vue';
import {mapState, mapActions, mapGetters} from 'vuex';
export default {
    name: 'CategoryFilter',
    components: {
        CheckboxEl
    },  
    data() {
        return {
        }
    },
    
    computed: {
        ...mapState({
            categories: state => state.categories,
            avalibleCategories: state => state.avalibleCategories,
        }),
        ...mapGetters({
            getCategories: 'getCategories',
            getFilteredByApplicabilities: 'getFilteredByApplicabilities',
        })
    },
    methods: {
        ...mapActions({
            setFilters: 'setFilters',
        }),
        setCategory(category) {
            this.setFilters(category);
        },
    }
}
</script>

<style lang="scss">
    
</style>