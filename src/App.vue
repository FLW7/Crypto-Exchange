

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
        <exchangeInputs />
        <div class="third-input flex flex-col">
          <label for="adress-input" class="mb-2">Your Ethereum address</label>
          <div class="addres flex">
            <input
              type="text"
              id="adress-input"
              class="bg-grey rounded border border-stroke-grey h-12 px-4 w-full"
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
import exchangeInputs from "./components/exchange-inputs.vue";

export default {
  name: "app",
  components: {
    exchangeInputs,
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
