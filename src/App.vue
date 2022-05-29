

<template>
  <main class="flex flex-col justify-center h-full">
    <div
      class="
        container
        flex flex-col
        justify-self-center
        self-center
        max-w-960
        px-2
      "
    >
      <div class="title mb-14">
        <h1 class="text-5xl mb-4">Crypto Exchange</h1>
        <p class="text-xl">Exchange fast and easy</p>
      </div>
      <div class="inputs">
        <div class="exchangeInputs flex items-start mb-8">
          <div
            v-if="dropOpen1 || dropOpen2"
            @click="wrapperToggle"
            class="fixed insert-0 w-full h-full top-0 left-0 z-10"
          ></div>
          <!-- ЛЕВЫЙ ИНПУТ -->
          <div class="first-inp relative w-full">
            <!-- ИНПУТ ОБМЕНА -->
            <div
              v-if="!dropOpen1"
              class="
                inp-btn
                flex
                items-center
                bg-grey
                rounded
                border border-stroke-grey
              "
            >
              <input
                class="bg-grey h-12 px-4 w-full"
                type="number"
                placeholder="0"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle" />
            </div>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown
              v-if="dropOpen1"
              :dropOpen1="dropOpen1"
              :currencies="currencies"
            />
          </div>
          <img
            class="flex self-start mt-3 mx-7 cursor-pointer"
            src="./assets/swap.svg"
            alt=""
          />
          <!-- ПРАВЫЙ ИНПУТ -->
          <div class="second-inp relative w-full">
            <!-- ИНПУТ ОБМЕНА -->
            <div
              v-if="!dropOpen2"
              class="
                inp-btn
                flex
                items-center
                bg-grey
                rounded
                border border-stroke-grey
              "
            >
              <input
                class="bg-grey h-12 px-4 w-full"
                type="number"
                placeholder="0"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle" />
            </div>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown
              v-if="dropOpen2"
              :dropOpen2="dropOpen2"
              :currencies="currencies"
            />
          </div>
        </div>
        <div class="third-input flex flex-col">
          <label for="adress-input" class="mb-2">Your Ethereum address</label>
          <div class="addres flex h-12">
            <input
              type="text"
              id="adress-input"
              class="bg-grey rounded border border-stroke-grey px-4 w-full"
            />
            <div class="exchange-btn ml-8 flex flex-col items-center">
              <button
                class="
                  w-52
                  min-h-full
                  bg-blue
                  hover:bg-dark-blue
                  text-white
                  font-bold
                  rounded
                "
              >
                EXCHANGE
              </button>
              <p class="error-text text-red mt-2">This pair is disabled now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dropdown from "./components/dropdown.vue";
import dropBtn from "./components/drop-btn.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      currencies: [],
      dropOpen1: false,
      dropOpen2: false,
    };
  },
  components: {
    dropdown,
    dropBtn,
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.closest(".first-inp")) {
        this.dropOpen1 = !this.dropOpen1;
      }
      if (e.target.closest(".second-inp")) {
        this.dropOpen2 = !this.dropOpen2;
      }
    },
    wrapperToggle() {
      (this.dropOpen1 = false), (this.dropOpen2 = false);
    },
    async fetchCurrencies() {
      try {
        const response = await axios.get(
          "https://api.changenow.io/v1/currencies?active=true"
        );
        this.currencies = response.data;
      } catch (e) {
        alert("ошибка");
      }
    },
  },
  mounted() {
    this.fetchCurrencies();
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Vollkorn" !important;
  cursor: default;
}

#app {
  height: 100vh;
}

input {
  cursor: text;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #80a2b6 !important;
  }
}
</style>
