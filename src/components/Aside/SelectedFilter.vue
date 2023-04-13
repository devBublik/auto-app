<template>
    <div class="selected-filters">
        <p class="filter__title filter__title_margin">Выбранные фильтры</p>
        <ul class="selected-filters__list">
            <li
                v-for="(item, ind) in $store.state.selectedFilters"
                :key="item.title +ind"
                class="selected-filters__item"
                
            >
                    <span class="selected-filters__name">{{ item.title }}</span>
                    <button
                        class="filter__close"
                        @click="click(item)"
                    />
            </li>
            <li v-if="$store.state.filterPrices[0] !== 0 || $store.state.filterPrices[1] !== 10000" class="selected-filters__item">
                <span class="selected-filters__name">{{ $store.state.filterPrices[0]}} - {{ $store.state.filterPrices[1]}} руб.</span>
                <button
                    class="filter__close"
                    @click="resetPriceFilters"
                />
            </li>
        </ul>
        <button
            class="filter__clear"
            @click="resetFilters"
        >
            Сбросить все
        </button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: 'SelectedFilters',
    computed: {
        ...mapState({
            categories: state => state.categories,
            selectedFilters: state => state.selectedFilters,
        }),
        ...mapGetters({
            getAllFilters: 'getAllFilters'
        }),

    },
    methods: {
        ...mapMutations({
            resetFilters: 'resetFilters',
            resetPriceFilters: 'resetPriceFilters'
        }),
        ...mapActions({
            deleteOneFilter: 'deleteOneFilter',
        }),
        click(item) {
            this.deleteOneFilter(item)
        }
    }
}
</script>

<style lang="scss">
    .selected-filters {
        text-align: left;

        &__list {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 18px;
        }

        &__item {
            font-size: 15px;
            padding: 4px 8px;
            background: #FFEAFD;
        }
    }
</style>