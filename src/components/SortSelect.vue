<template>
    <div class="sort">
        <multiselect
            v-model="$store.state.sort"
            placeholder=""
            :searchable="false"
            :allow-empty="false"
            :options="sortOption">
        </multiselect>
    </div>
    
</template>

<script>
import {sortOption} from '../models/ProductsModel';
import Multiselect from 'vue-multiselect'
import { mapMutations, mapState } from 'vuex';
import 'vue-multiselect/dist/vue-multiselect.css';
export default {
    name: 'SortSelect',
    components: {
        Multiselect
    },
    computed: {
        sortOption() {
            return sortOption;
        },
        ...mapState({
            sort: state => state.sort
        })
    },
    methods: {
        ...mapMutations({
            setSort: 'setSort'
        }),
        changeSort(e) {
            let option = e.target.value
            this.setSort(option)
        },
        
    }
}
</script>

<style lang="scss">

    .sort {
        display: flex;
        justify-content: flex-end;
        padding: 0 0 24px 0;

        .multiselect {
            max-width: 200px;

            &__option--highlight {
                background: #C618AB;
            }

            &__option--highlight::after,
            &__option--selected::after {
                display: none;
            }

        }
    }
</style>