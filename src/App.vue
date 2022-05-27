<script setup>
</script>

<template>
  <div class="container flex flex-col justify-center max-w-960 mx-auto px-10">
    <div class="title mb-14">
      <h1 class="text-5xl mb-4">Crypto Exchange</h1>
      <p class="text-xl">Exchange fast and easy</p>
    </div>
    <div class="inputs">
      <div class="exchange-inputs flex items-center">
        <div class="first-inp rounded border border-stroke-grey w-full">
          <div class="inp-btn flex items-center bg-grey hidden">
            <!-- <input
              class="bg-grey h-12 px-4 w-full"
              type="number"
              placeholder="0"
            />
            <div
              class="
                drop-btn
                bg-grey
                flex
                items-center
                px-5
                h-12
                cursor-pointer
              "
            >
              <span class="block h-8 mr-8 border-l border-stroke-grey"></span>
              <p class="pr-7">BTC</p>
              <img src="./assets/arrow-down.svg" alt="" />
            </div>-->
          </div>
          <div class="dropdown bg-grey">
            <div class="dropdown__input flex items-center pl-4">
              <input
                class="search bg-grey h-12 w-full"
                type="text"
                placeholder="Search"
              />
              <img src="./assets/close.svg" class="cursor-pointer mr-4" />
            </div>
            <div class="dropdown__list border-t border-stroke-grey">
              <ul>
                <li>
                  <img src="./assets/eth.svg" />
                  <p>ETH</p>
                  <span>Ethereum</span>
                </li>
                <li>
                  <img src="./assets/eth.svg" />
                  <p>ETH</p>
                  <span>Ethereum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="addres-input"></div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Vollkorn" !important;
}

input {
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
    &:hover {
      background-color: #eaf1f7;
    }
  }
}
</style>
