<script setup lang="ts">
import { ref } from "vue";
import {useCounterStore} from "@/stores/counter";

const isExecutor = ref(true)
const isCustomer = ref(false)

const clickExecutor = () => {
  isExecutor.value = true
  isCustomer.value = false
  useCounterStore().infoRep = 'executor'
}
const clickCustomer = () => {
  isCustomer.value = true
  isExecutor.value = false
  useCounterStore().infoRep = 'customer'
}
const openModal = () => {
  useCounterStore().modalRegExecutor = true
}
</script>

<template>
  <div class="top-header">
    <div>
      <a href="#">
        <div class="logo">АЙТИМУС<span>.РФ</span></div>
      </a>
    </div>
    <div class="representative">
      <div
          :class="isExecutor ? 'isTrueRepresentative' : ''"
          @click="clickExecutor"
      >
        Исполнителям
      </div>
      <div
          :class="isCustomer ? 'isTrueRepresentative' : ''"
          @click="clickCustomer"
      >
        Заказчикам
        </div>
    </div>
    <div class="top-btn">
      <button class="btn-orange">
        <a href="tel:+78003333084">
          <img src="../assets/images/phone.png" alt="">
          8 800 333 30 84
        </a>
      </button>
      <button @click="openModal" class="btn-green">Личный кабинет</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #787878;
  .logo {
    font-family: jost-500, sans-serif;
    font-size: 24px;
    color: #279134;
    span {
      color: #EB8000;
    }
  }
  .representative {
    font-size: 14px;
    font-family: inter-600;
    display: flex;
    align-self: center;
    div {
      cursor: pointer;
      text-transform: uppercase;
      color: #EB8000;
      border: 1px solid #EB8000;
      padding: 5px 15px;
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
      }
    }
  }
  .top-btn {
    button {
      a {
        color: #EB8000;
      }
      &:first-child {
        margin-right: 15px;
        img {
          margin-top: -3px;
          margin-right: 5px;
        }
      }
    }

  }
}
.isTrueRepresentative {
  background: #279134 !important;
  border-color: #279134 !important;
  color: #fff !important;
}
@media screen and (max-width: 460px) {
  .top-header {
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 15px;
    .logo {
      font-size: 30px;
    }
    .representative {
      margin-top: 15px;
    }
    .top-btn {
      margin-top: 15px;
      display: flex;
      button {
        display: flex;
        padding: 10px;
        a {
          color: #EB8000;
        }
        &:first-child {
          margin-right: 5px;
          img {
            margin-top: -3px;
            margin-right: 3px;
          }
        }
      }

    }
  }
}
</style>