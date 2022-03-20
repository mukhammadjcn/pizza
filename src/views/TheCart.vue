<template>
  <div class="cart">
    <div class="cart__container">
      <h1 class="cart__title">Ваш заказ</h1>
      <div class="cart__list">
        <TheCartItem
          v-for="item in cart"
          :key="item"
          :name="item.name"
          :img="item.image"
          :id="item.productId"
          :price="item.price"
          :qty="item.qty"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheCartItem from "../components/TheCartItem.vue";
export default {
  components: { TheCartItem },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
};
</script>

<style lang="scss">
.cart {
  background: #f9f9f9;
  &__container {
    max-width: 860px;
    margin: auto;
    padding: 40px 0 70px;
  }

  &__title {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #191919;
    margin-bottom: 24px;
  }
}
</style>
