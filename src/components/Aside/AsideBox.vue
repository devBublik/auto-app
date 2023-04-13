<template>
    <div class="aside-box">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'AsideBox',
}
</script>

<style>
    .aside-box {
        background: white;
        max-width: 270px;
        width: 100%;
        padding: 20px 16px;
    }
</style>