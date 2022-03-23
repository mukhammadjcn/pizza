<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import { useToast } from "vue-toastification";

export default {
  components: { TheHeader, TheFooter },
  setup() {
    const toast = useToast();
    return { toast };
  },

  methods: {
    myMethod() {
      this.toast.success("I'm an info toast!");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

// Global codes
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration-line: none;
  font-family: "Inter", sans-serif; //Popins
  scroll-behavior: smooth;
}

.container {
  max-width: 1290px;
  margin: auto;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
