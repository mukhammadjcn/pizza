<template>
  <div class="home">
    <TheHeader />
    <div class="full-menu">
      <div class="container">
        <TheNav :list="menu" />
        <TheReels :list="reels" />
        <TheLocationChecker />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "../components/TheNav.vue";
import TheReels from "../components/TheReels.vue";
import TheLocationChecker from "../components/TheLocationChecker.vue";
export default {
  name: "HomeView",
  components: { TheHeader, TheNav, TheReels, TheLocationChecker },
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Акции",
          img: require("@/assets/images/nav/Fire.svg"),
        },
        {
          id: 2,
          name: "Пицца",
          img: require("@/assets/images/nav/Pizza.svg"),
        },
        {
          id: 3,
          name: "Суши",
          img: require("@/assets/images/nav/Sushi.svg"),
        },
        {
          id: 4,
          name: "Напитки",
          img: require("@/assets/images/nav/Drink.svg"),
        },
        {
          id: 5,
          name: "Закуски",
          img: require("@/assets/images/nav/Snacks.svg"),
        },
        {
          id: 6,
          name: "Комбо",
          img: require("@/assets/images/nav/Combo.svg"),
        },
        {
          id: 7,
          name: "Десерты",
          img: require("@/assets/images/nav/Dessert.svg"),
        },
        {
          id: 8,
          name: "Соусы",
          img: require("@/assets/images/nav/Sauce.svg"),
        },
      ],
      reels: [
        {
          id: 1,
          text: "3 средние пиццыот 999 рублей",
          img: require("@/assets/images/reels/1.png"),
        },
        {
          id: 2,
          text: "Кэшбек 10% на самовывоз (доставка)",
          img: require("@/assets/images/reels/2.png"),
        },
        {
          id: 3,
          text: "3 средние пиццыот 999 рублей",
          img: require("@/assets/images/reels/1.png"),
        },
        {
          id: 4,
          text: "Кэшбек 10% на самовывоз (доставка)",
          img: require("@/assets/images/reels/2.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.full-menu {
  background: #f9f9f9;
}

#bag {
  margin-top: 1200px;
  background: green;
}
</style>
