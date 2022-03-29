<template>
  <ul class="menu">
    <a
      v-for="item in list"
      class="menu__item"
      :key="item.id"
      :href="'/#' + item.name"
    >
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

@media (max-width: 1280px) {
  .menu {
    gap: 16px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media (max-width: 776px) {
  .menu {
    padding: 20px 0;
    &__item {
      padding: 8px 16px;
      flex-direction: revert;
      gap: 12px;
    }
  }
}
</style>
