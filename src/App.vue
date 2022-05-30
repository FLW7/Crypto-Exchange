

<template>
  <main @click="wrapperToggle" class="flex flex-col justify-center h-full">
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
        <h1 class="text-5xl mb-4" @click="estimatedAmount">Crypto Exchange</h1>
        <p class="text-xl">Exchange fast and easy</p>
      </div>
      <div class="inputs">
        <div class="exchangeInputs flex items-start mb-8">
          <!-- ЛЕВЫЙ ИНПУТ -->
          <div class="first-inp relative w-full">
            <!-- ИНПУТ ОБМЕНА -->
            <div
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
                placeholder="-"
                v-model="amount"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle" :estimated="estimated">
                <img />
                <p></p>
              </drop-btn>
            </div>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown :currencies="currencies" :estimated="estimated" />
          </div>
          <img
            class="flex self-start mt-3 mx-7 z-10 cursor-pointer"
            src="./assets/swap.svg"
          />
          <!-- ПРАВЫЙ ИНПУТ -->
          <div class="second-inp relative w-full">
            <!-- ИНПУТ ОБМЕНА -->
            <div
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
                v-model="estimated"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle" :estimated="estimated">
                <img />
                <p></p>
              </drop-btn>
            </div>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown :currencies="currencies" :estimated="estimated" />
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
              <p v-if="noPair" class="error-text text-red mt-2">
                This pair is disabled now
              </p>
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
      estimated: 0,
      noPair: false,
      amount: 1,
    };
  },
  components: {
    dropdown,
    dropBtn,
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.closest(".first-inp")) {
        document
          .querySelector(".first-inp .dropdown")
          .classList.remove("hidden");
        document.querySelector(".second-inp .dropdown").classList.add("hidden");
      }
      if (e.target.closest(".second-inp")) {
        document
          .querySelector(".second-inp .dropdown")
          .classList.remove("hidden");
        document.querySelector(".first-inp .dropdown").classList.add("hidden");
      }
    },
    wrapperToggle(e) {
      if (!e.target.closest(".drop-btn") && !e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach((item) => {
          item.classList.add("hidden");
        });
      }
    },
    async fetchCurrencies() {
      try {
        const response = await axios.get(
          "https://api.changenow.io/v1/currencies?active=true"
        );
        this.currencies = response.data;

        document
          .querySelector(".first-inp .drop-btn__content img")
          .setAttribute("src", this.currencies[0].image);
        document.querySelector(".first-inp .drop-btn__content p").textContent =
          this.currencies[0].ticker;
        document
          .querySelector(".second-inp .drop-btn__content img")
          .setAttribute("src", this.currencies[1].image);
        document.querySelector(".second-inp .drop-btn__content p").textContent =
          this.currencies[1].ticker;
      } catch (e) {
        console.log("error", e);
      }
    },
    async estimatedAmount() {
      const API_KEY =
        "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";
      let from = document
        .querySelector(".first-inp .drop-btn__content p")
        .textContent.toLowerCase();
      let to = document
        .querySelector(".second-inp .drop-btn__content p")
        .textContent.toLowerCase();
      let amount = this.amount;
      try {
        const response = await axios.get(
          "https://api.changenow.io/v1/exchange-amount/" +
            `${amount}` +
            "/" +
            `${from}` +
            "_" +
            `${to}` +
            "/?api_key=" +
            `${API_KEY}`
        );
        this.estimated = response.data.estimatedAmount;
        this.noPair = false;
      } catch (e) {
        console.log(e);
        this.noPair = true;
      }
    },
  },
  mounted() {
    this.fetchCurrencies();
    // this.estimatedAmount();
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
.drop-btn__content {
  img {
    margin-right: 14px;
    cursor: pointer;
  }
  p {
    margin-right: 28px;
    cursor: pointer;
    text-transform: uppercase;
  }
}
</style>
