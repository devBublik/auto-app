
<template>
  <div class="main">
        <div class="container">
            <div class="main__wrapper">
                <aside-el class="aside"/>
                <div class="main__content">
                    <sort-select/>
                    <products-list/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import AsideEl from './components/Aside/AsideEl.vue';
   
import SortSelect from './components/SortSelect.vue';
export default {
    name: 'App',
    components: {
       ProductsList,
        AsideEl,
        SortSelect
    },
   
}
</script>




