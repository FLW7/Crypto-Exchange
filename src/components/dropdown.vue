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
      <ul>
        <li @click="dropClose">
          <img src="../assets/eth.svg" />
          <p>ETH</p>
          <span>Ethereum</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 48px;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;

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