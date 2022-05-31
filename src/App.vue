

<template>
  <main @click="wrapperToggle" class="flex flex-col justify-center h-full">
    <div
      class="
        container
        flex flex-col
        justify-self-center
        self-center
        max-w-960
        px-4
      "
    >
      <div class="title mb-14">
        <h1 class="text-5xl mb-4" @click="minAmount">Crypto Exchange</h1>
        <p class="text-xl" @click="estimatedAmount">Exchange fast and easy</p>
      </div>
      <div class="inputs">
        <div class="exchangeInputs flex items-start mb-8 mob:block">
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
                @input="estimatedAmount"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle">
                <img />
                <p></p>
              </drop-btn>
            </div>
            <p v-if="tooSmall" class="text-red absolute">deposit too small!</p>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown :currencies="currencies" @click="minAndEstimated" />
          </div>
          <div
            class="
              mx-7
              flex
              items-center
              justify-center
              h-12
              mob:justify-end mob:mx-0
            "
          >
            <img
              @click="swap"
              class="
                flex
                z-10
                cursor-pointer
                w-13
                h-12
                mob:w-6 mob:h-6 mob:rotate-90
              "
              src="./assets/swap.svg"
            />
          </div>
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
                placeholder="-"
                v-model="estimated"
              />
              <!-- BTN -->
              <drop-btn @click="dropdownToggle">
                <img />
                <p></p>
              </drop-btn>
            </div>
            <!-- ИНПУТ ПОИСКА -->
            <dropdown :currencies="currencies" @click="minAndEstimated" />
          </div>
        </div>
        <div class="third-input flex flex-col mob:mt-12">
          <label for="adress-input" class="mb-2">Your Ethereum address</label>
          <div class="addres flex h-12 mob:flex-col mob:h-auto">
            <input
              type="text"
              id="adress-input"
              class="
                bg-grey
                rounded
                border border-stroke-grey
                px-4
                w-full
                mob:h-12
              "
            />
            <div
              class="
                exchange-btn
                ml-8
                flex flex-col
                items-center
                mob:ml-0 mob:mt-4
              "
            >
              <button
                class="
                  w-52
                  min-h-full
                  bg-blue
                  hover:bg-dark-blue
                  text-white
                  font-bold
                  rounded
                  mob:h-12 mob:w-full
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
      tooSmall: false,
      amount: "",
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
        this.tooSmall = false;
      } catch (e) {
        if (e.response.status == 404) {
          this.noPair = true;
          this.estimated = "";
          console.log(e);
        }
        if (e.response.status == 400) {
          this.tooSmall = true;
          this.estimated = "";
        }
      }
    },
    async minAmount() {
      const API_KEY =
        "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";
      let from = document
        .querySelector(".first-inp .drop-btn__content p")
        .textContent.toLowerCase();
      let to = document
        .querySelector(".second-inp .drop-btn__content p")
        .textContent.toLowerCase();
      try {
        const response = await axios.get(
          "https://api.changenow.io/v1/min-amount/" +
            `${from}` +
            "_" +
            `${to}` +
            "/?api_key=" +
            `${API_KEY}`
        );
        this.amount = response.data.minAmount;
        this.noPair = false;
        this.tooSmall = false;
      } catch (e) {
        if (e.response.status == 404) {
          this.noPair = true;
          this.estimated = 0;
        }
        if (e.response.status == 400) {
          this.tooSmall = true;
          this.estimated = 0;
        }
      }
    },
    minAndEstimated() {
      this.minAmount();
      setTimeout(this.estimatedAmount, 500);
    },
    swap() {
      let imgSrc1 = document
        .querySelector(".first-inp .drop-btn__content img")
        .getAttribute("src");
      let text1 = document.querySelector(
        ".first-inp .drop-btn__content p"
      ).textContent;
      let imgSrc2 = document
        .querySelector(".second-inp .drop-btn__content img")
        .getAttribute("src");
      let text2 = document.querySelector(
        ".second-inp .drop-btn__content p"
      ).textContent;
      let buffImgSrc, buffp;
      buffp = text2;
      buffImgSrc = imgSrc2;
      document
        .querySelector(".second-inp .drop-btn__content img")
        .setAttribute("src", imgSrc1);
      document
        .querySelector(".first-inp .drop-btn__content img")
        .setAttribute("src", buffImgSrc);
      document.querySelector(".second-inp .drop-btn__content p").textContent =
        text1;
      document.querySelector(".first-inp .drop-btn__content p").textContent =
        buffp;

      this.minAndEstimated();
    },
  },
  beforeMount() {
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
