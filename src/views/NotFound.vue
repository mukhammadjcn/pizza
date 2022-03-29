<template>
  <div class="not-found">
    <Vue3Lottie :animationData="lottie" :height="600" :width="600" />
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
      lottie: require("@/assets/lotties/404.json"),
    };
  },
};
</script>

<style lang="scss">
@media (max-width: 700px) {
  .not-found {
    & > div {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
