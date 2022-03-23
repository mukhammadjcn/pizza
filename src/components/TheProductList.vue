<template>
  <div class="collection__list">
    <div
      class="collection__item"
      v-for="collection in products"
      :key="collection"
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
  </div>
</template>

<script>
import TheProduct from "./TheProduct.vue";
export default {
  components: { TheProduct },
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
