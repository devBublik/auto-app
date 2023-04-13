<template>
    <div
        class="filter__checkbox"
        :class="{'filter__checkbox_checked': category.isChecked}"
    >
        <input
            class="filter__input"
            type="checkbox"
            :value="category.value"
            v-model="category.isChecked"
            :id="category.value"
            @click="hanleClick(category)"
           
        >
        <label class="filter__label" :for="category.value"> {{ category.title }} </label>
    </div>
</template>

<script>
export default {
    name: 'CheckboxEl',
    props: {
        category: {
            type: Object,
            default: () => {}
        },
        hanleClick: {
            type: Function,
            default: () => {}
        },
    }

}
</script>