<template>
  <div class="reels" id="checkLocation">
    <div class="reel" v-for="item in list" :key="item.id">
      <img :src="item.img" alt="" />
      <p class="reel__info">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss">
.reels {
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .reel {
    // height: 320px;
    position: relative;
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
    }

    &__info {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: white;
    }
  }
}

@media (max-width: 1280px) {
  .reels {
    gap: 20px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .reel {
      width: 280px;
      height: 320px;
      flex-shrink: 0;
    }
  }
}
</style>
