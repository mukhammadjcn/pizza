<template>
  <div class="collection__list">
    <div
      class="collection__item"
      v-for="collection in products"
      :key="collection"
      :id="collection.name"
    >
      <h2 class="collection__title">{{ collection.name }}</h2>
      <div class="products__list">
        <TheProduct
          v-for="item in collection.list"
          :id="item.id"
          :key="item.id"
          :img="item.img"
          :info="item.detail"
          :label="item.label"
          :name="item.name"
          :price="item.price"
        />
      </div>
    </div>

    <div class="collection__bottom">
      <h2>Доставка пиццы в Москве</h2>
      <div
        class="collection__bottom-active"
        :class="!moreInfo ? 'collection__bottom-inactive' : ''"
      >
        <p>
          Захотелось чего-то вкусного и сытного? Желание простое и понятное,
          только в холодильнике все не то, и до магазина идти лень. Все пропало?
          Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь
          спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у
          Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из
          отборных ингредиентов; широкий ассортимент, включающий легендарные,
          фирменные и классические виды, для вегетарианцев и любителей
          экспериментировать; быстрая и бесплатная доставка пиццы в течение 30
          минут, чтобы вкусное и ароматное блюдо не успевало остыть.
        </p>
        <h4>Как сделать заказ</h4>
        <p>
          Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или
          звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве
          не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо:
          выбрать понравившийся вариант и количество порций; положить желаемое в
          «Корзину»; не уходить далеко, так как вкусная пицца на заказ с
          доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не
          забудьте оплатить заказ курьеру!
        </p>
      </div>
      <button @click="moreInfo = !moreInfo">Показать полностью</button>
    </div>
  </div>
</template>

<script>
import TheProduct from "./TheProduct.vue";
export default {
  components: { TheProduct },
  data() {
    return {
      moreInfo: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style lang="scss">
.collection__item {
  padding-bottom: 20px;
}
.collection__title {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #191919;
  margin: 28px 0;
}
.products__list {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.collection__bottom {
  max-width: 850px;
  margin: auto;
  padding: 40px 8px 60px;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #191919;
  }

  &-active {
    margin: 16px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    transition: 0.8s ease-in-out;

    h4 {
      margin: 24px 0 8px;
    }
  }

  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ff7010;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &-inactive {
    height: 251px;
    overflow: hidden;
    transition: 0.8s ease-in-out;
  }
}

@media (max-width: 1120px) {
  .products__list {
    justify-content: space-around;
  }
}

@media (max-width: 776px) {
  .products__list {
    flex-direction: column;
  }
}
</style>
