<template>
  <div
    class="
      dropdown
      w-full
      absolute
      bg-grey
      rounded
      border border-stroke-grey
      z-20
    "
  >
    <div class="dropdown__input flex items-center pl-4">
      <input
        class="search bg-grey h-12 w-full"
        type="text"
        placeholder="Search"
      />
      <img src="../assets/close.svg" class="cursor-pointer mr-4" />
    </div>
    <div
      class="
        dropdown__list
        border-t border-stroke-grey
        overflow-y-scroll
        max-h-44
      "
    >
      <li
        @click="dropClose"
        v-for="(current, index) in currencies"
        :key="index"
        class="
          overflow-hidden
          flex
          items-center
          gap-x-4
          h-12
          pl-4
          cursor-pointer
        "
      >
        <img :src="current.image" />
        <p class="uppercase">{{ current.ticker }}</p>
        <span class="whitespace-nowrap">{{ current.name }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currencies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    dropClose(e) {
      if (e.target.closest(".first-inp")) {
        this.$root.$data.dropOpen1 = false;
      }
      if (e.target.closest(".second-inp")) {
        this.$root.$data.dropOpen2 = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown__list {
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #11b3fe;
    border-radius: 8px;
  }
  li {
    p {
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
    span {
      display: block;
      cursor: pointer;
      color: #80a2b6;
    }
    &:hover {
      background-color: #eaf1f7;
    }
  }
}
</style>