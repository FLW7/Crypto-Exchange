<template>
  <div
    @click="log"
    class="drop-btn bg-grey flex items-center h-12 cursor-pointer pr-2.5"
  >
    <span class="block h-8 border-l border-stroke-grey mr-8"></span>
    <div class="drop-btn__content flex items-center w-max cursor-pointer">
      <slot></slot>
      <img src="../assets/arrow-down.svg" class="cursor-pointer" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        currencies: {
          type: Array,
          required: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>