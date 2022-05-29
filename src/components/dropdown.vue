<template>
  <div
    class="
      dropdown
      w-full
      absolute
      top-0
      bg-grey
      rounded
      border border-stroke-grey
      z-20
      hidden
    "
  >
    <div class="dropdown__input flex items-center pl-4">
      <input
        class="search bg-grey h-12 w-full"
        type="text"
        placeholder="Search"
        v-model.trim="search"
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
        @click="liClick"
        v-for="(current, index) in filteredCurrencies"
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
  data() {
    return {
      search: "",
    };
  },
  props: {
    currencies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    liClick(e) {
      if (e.target.closest(".first-inp")) {
        let btn = document.querySelector(".first-inp .drop-btn__content");
        let p = btn.querySelector("p");
        p.textContent = e.target.querySelector("p").textContent.toUpperCase();
        let img = btn.querySelector("img");
        img.setAttribute(
          "src",
          e.target.querySelector("img").getAttribute("src")
        );
        document.querySelector(".first-inp .dropdown").classList.add("hidden");
      }
      if (e.target.closest(".second-inp")) {
        let btn = document.querySelector(".second-inp .drop-btn__content");
        let p = btn.querySelector("p");
        p.textContent = e.target.querySelector("p").textContent.toUpperCase();
        let img = btn.querySelector("img");
        img.setAttribute(
          "src",
          e.target.querySelector("img").getAttribute("src")
        );
        document.querySelector(".second-inp .dropdown").classList.add("hidden");
      }
    },
  },
  computed: {
    filteredCurrencies() {
      return this.currencies.filter(
        (cur) =>
          cur.ticker.toLowerCase().includes(this.search.toLowerCase()) ||
          cur.name.toLowerCase().includes(this.search.toLowerCase())
      );
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