<template>
  <div class="load_container" v-if="loading || loadingNum > 0">
    <div class="load_overlay"></div>
    <div class="load_image">
      <!-- <img src="../assets/loading.gif" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    loadingNum: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.load_container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;

  .load_overlay {
    position: fixed;
    background: white;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 100;
  }
  .load_image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      z-index: 999;
      width: 100px;
    }
  }
}
</style>
