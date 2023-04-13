<template>
    <div class="product">
        <div class="product__img">
            <img class="product__image" :src="product.img" :alt="product.alt">
        </div>

        <div class="product__info">
            <p class="product__price">{{ product.price }} руб.</p>
            <div class="product__desc">{{ product.desc }}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss">
    .product {
        max-width: 277px;
        width: 100%;
        height: 388px;
        background: white;
        line-height: 1.3;

        &__image {
            width: 100%;
        }

        &__info {
            padding: 10px 20px 20px;
        }

        &__price {
            font-size: 20px;
            margin-bottom: 16px;
        }

        &__desc {
            font-size: 15px;
        }

    }
</style>