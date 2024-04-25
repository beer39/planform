<script setup lang="ts">
import {computed, ref} from "vue";
import {useCounterStore} from "@/stores/counter";

const mainInfo = ref([
  {
    img: 'main-star.png',
    name: 'Удобная регистрация',
    text: 'Регистрация в мобильном приложении или через веб-версию сайта осуществляется с помощью интуитивно понятного интерфейса',
    rep: 'multi'
  },

  {
    img: 'main-right.png',
    name: 'Проверка статуса',
    text: 'Автоматическая проверка статуса самозанятого в реальном времени',
    rep: 'multi'
  },
  {
    img: 'main-shield.png',
    name: 'Безопасно',
    text: 'Все полученные личные данные остаются строго конфиденциальными и не передаются третьим лицам',
    rep: 'multi'
  },
  {
    img: 'main-money.png',
    name: 'Никаких доплат',
    text: 'Никаких дополнительных или скрытых комиссий и платежей, все платежи открыты',
    rep: 'executor'
  },
  {
    img: 'main-money.png',
    name: 'Маленькая комиссия',
    text: 'Вы функции платформы бесплатны, комиссию только при переводе денежных средств исполнителю',
    rep: 'customer'
  }
])

const checkRep = computed(() => {
  return  mainInfo.value.filter((elem) => elem.rep === useCounterStore().infoRep || elem.rep === 'multi')
})
const getImageUrl = (name: any) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

</script>

<template>
  <div>
    <h2>С нами удобно</h2>
    <div class="blocks">
      <div
          class="block"
          v-for="item in checkRep"
      >
        <img
            :src="getImageUrl(item.img)"
            alt="img"
        >
        <div class="title">{{ item.name }}</div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.blocks {
  margin-top: 35px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .block {
    position: relative;
    width: 570px;
    height: 130px;
    background: #fff;
    border-radius: 10px;
    &:nth-child(3) {
      margin-top: 30px;
    }
    &:nth-child(4) {
      margin-top: 30px;
    }
    img {
      position: absolute;
      left: 10px;
      top: -13px;
    }
    .title {
      font-family: inter-500;
      font-size: 24px;
      line-height: 22px;
      margin: 15px 0 0 55px;
    }
    p {
      margin: 10px 20px 0;
      line-height: 20px;
      font-family: inter-400;
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 460px) {
  .blocks {
    margin-top: 0;
    justify-content: center;
    padding-bottom: 40px;
    .block {
      position: relative;
      width: 300px;
      height: auto;
      padding-bottom: 15px;
      margin-top: 20px;
      &:nth-child(3) {
        margin-top: 20px;
      }
      &:nth-child(4) {
        margin-top: 20px;
      }
      .title {
        font-size: 20px;
        line-height: 18px;
      }
      p {
        line-height: 18px;
        font-size: 14px;
      }
    }
  }
}

</style>