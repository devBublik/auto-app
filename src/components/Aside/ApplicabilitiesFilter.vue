<template>
    <div class="applicabilities-filter">
        <div class="filter__title filter__title_margin">Применяемость</div>
            <checkbox-el 
                v-for="item in $store.getters.getApplicabilities"
                :key="item.value"
                :category="item"
                :hanle-click="setApplicability"
            />
    </div>
</template>

<script>
import CheckboxEl from '../UIComponents/CheckboxEl.vue';
import {mapState, mapActions, mapGetters} from 'vuex';
export default {
    name: 'ApplicabilitiesFilter',
    components: {
        CheckboxEl,
    },
    computed:  {
        ...mapState({
            applicabilities: state => state.applicabilities,
            avalibleApplicabilities: state => state.avalibleApplicabilities
        }),
        ...mapGetters({
            getApplicabilities: 'getApplicabilities',
        })
    },
    methods: {
       ...mapActions({
            setFilters: 'setFilters'
        }),
        setApplicability(item) {
            this.setFilters(item);
        }
    }
}

</script>
