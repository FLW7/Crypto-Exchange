<template>
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
        <input class="bg-grey h-12 px-4 w-full" type="number" placeholder="0" />
        <div
          class="drop-btn bg-grey flex items-center h-12 cursor-pointer pr-2.5"
        >
          <span class="block h-8 border-l border-stroke-grey mr-8"></span>
          <div class="drop-btn__content flex items-center w-max cursor-pointer">
            <img src="../assets/eth.svg" class="mr-3.5 cursor-pointer" />
            <p class="mr-7 cursor-pointer">BTC</p>
            <img src="../assets/arrow-down.svg" class="cursor-pointer" />
          </div>
        </div>
      </div>
      <!-- ИНПУТ ПОИСКА -->
      <div
        class="
          dropdown
          w-full
          absolute
          bg-grey
          rounded
          border border-stroke-grey
          hidden
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
        <div class="dropdown__list border-t border-stroke-grey">
          <ul>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img
      class="flex self-start mt-3 mx-7 cursor-pointer"
      src="../assets/swap.svg"
      alt=""
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
        <input class="bg-grey h-12 px-4 w-full" type="number" placeholder="0" />
        <div
          class="drop-btn bg-grey flex items-center h-12 cursor-pointer pr-2.5"
        >
          <span class="block h-8 border-l border-stroke-grey mr-8"></span>
          <div class="drop-btn__content flex w-max cursor-pointer">
            <img src="../assets/eth.svg" class="mr-3.5 cursor-pointer" />
            <p class="mr-7 cursor-pointer">BTC</p>
            <img src="../assets/arrow-down.svg" class="cursor-pointer" />
          </div>
        </div>
      </div>
      <!-- ИНПУТ ПОИСКА -->
      <div
        class="
          dropdown
          w-full
          absolute
          bg-grey
          rounded
          border border-stroke-grey
          hidden
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
            max-h-36
            overflow-y-scroll
          "
        >
          <ul>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
            <li>
              <img src="../assets/eth.svg" />
              <p>ETH</p>
              <span>Ethereum</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exchange-inputs",
};
</script>