<template>
  <ul class="menu">
    <a href="#bag" class="menu__item" v-for="item in list" :key="item.id">
      <img :src="item.img" alt="" />
      <span>{{ item.name }}</span>
    </a>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;

  &__item {
    width: 135px;
    cursor: pointer;
    padding: 20px 40px;
    background: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #191919;

    &:first-child {
      color: #e23535;
    }
  }
}
</style>
