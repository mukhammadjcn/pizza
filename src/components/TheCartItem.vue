<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src="img" alt="" />
    </div>
    <div class="cart-item__info">
      <div class="">
        <h4 class="cart-item__name">{{ name }}</h4>
        <p class="cart-item__size">Традиционное тесто, 23 см</p>
      </div>
      <div class="cart-item__action">
        <div class="cart-item__number">
          <button @click="minusItem">-</button>
          <span>{{ qty }}</span>
          <button @click="plusItem">+</button>
        </div>
        <span class="cart-item__total">{{ qty * price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "img", "price", "qty"],
  methods: {
    plusItem() {
      this.$store.dispatch("plusProduct", {
        id: this.id,
      });
    },
    minusItem() {
      this.$store.dispatch("minusProduct", {
        id: this.id,
      });
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  padding: 16px 24px 16px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  background: white;
  display: flex;
  align-items: center;
  gap: 16px;

  &__info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-grow: 1;
    justify-content: space-around;
    color: #191919;
  }
  &__img img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  &__size {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  &__number {
    height: 36px;
    width: 92px;
    padding: 8px;
    border-radius: 6px;
    background: #ffeee2;
    display: flex;
    align-items: center;
    button {
      border: none;
      outline: none;
      background: transparent;
      color: #ff7010;
      flex-basis: 30%;
      font-size: 18px;
      line-height: 20px;
      cursor: pointer;
    }
    span {
      color: #ff7010;
      flex-basis: 40%;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  &__total {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #ff7010;
  }
}

@media (max-width: 860px) {
  .cart-item {
    gap: 0;
    &__info {
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
