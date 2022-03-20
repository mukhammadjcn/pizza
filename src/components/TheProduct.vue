<template>
  <div class="product">
    <div class="product__img">
      <img :src="img" :alt="name" />
      <span class="product__label" v-show="label">{{ label }}</span>
    </div>
    <div class="product__details">
      <h2 class="product__name">{{ name }}</h2>
      <p class="product__info">
        {{ `${info.split("").splice(0, 55).join("")}...` }}
      </p>
      <div class="product__action">
        <button class="product__add" @click="addToCart">Выбрать</button>
        <span class="product__price">{{ `от ${price} ₽` }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "img", "info", "label", "id"],
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },
};
</script>

<style lang="scss">
.product {
  width: 300px;
  //   height: 480px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  overflow: hidden;

  &__details {
    padding: 20px;
  }

  &__img {
    height: 300px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__label {
    position: absolute;
    left: 0;
    top: 20px;
    padding: 8px 16px;
    background: #e23535;
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border-radius: 0 4px 4px 0;
  }

  &__name {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
  }

  &__info {
    margin: 12px 0 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__add {
    padding: 14px 32px;
    background: #ff7010;
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: white;
    cursor: pointer;
    border: none;
  }

  &__price {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #ff7010;
  }
}
</style>
