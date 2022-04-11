<template>
  <div class="ordered">
    <Vue3Lottie :animationData="lotti" :height="300" :width="300" />
    <h2 class="ordered__title">Заказ №{{ orderNumber }} принят</h2>
    <p class="ordered__info">
      Спасибо за заказ! <br />
      Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку
      ниже
    </p>
    <a :href="orderLink" target="_blank">
      <button class="verification__btn" @click="generateTrackNumber">
        Отследить заказ
      </button>
    </a>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      lotti: require("@/assets/lotties/deliver.json"),
      orderNumber: "",
      orderLink: "",
    };
  },
  methods: {
    generateTrackNumber() {
      const order = localStorage.getItem("orderNumber");
      if (order) {
        this.orderNumber = order;
      } else {
        const number = "310" + Math.floor(Math.random() * 202);
        this.orderNumber = number;
        this.orderLink = `https://t.17track.net/en#nums=${number}`;
        localStorage.setItem("orderNumber", number);
      }
    },
  },
  mounted() {
    this.generateTrackNumber();
  },
};
</script>

<style lang="scss">
.ordered {
  width: 380px;
  margin: auto;
  text-align: center;
  padding: 24px 0 96px;

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #191919;
  }

  &__info {
    padding: 16px 0 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
  }
}
</style>
