<script setup lang="ts">

import {computed, ref} from "vue";
import {useCounterStore} from "@/stores/counter";

const mainInfo = ref([
  {
    img: 'mobile.png',
    name: 'Выплаты исполнителям',
    text: 'Выплаты на вашу банковскую карту или счет производятся круглосуточно. Все выплаты проводятся в соответствии с официальными правилами и требованиями.',
    rep: 'executor'
  },

  {
    img: 'mobile.png',
    name: 'Выплаты исполнителям',
    text: 'Выплаты на банковскую карту или счет производятся круглосуточно. Все выплаты проводятся в соответствии с официальными правилами и требованиями.',
    rep: 'customer'
  },
  {
    img: 'doc.png',
    name: 'Документооборот',
    text: 'Удобный электронный документооборот, который поможет вам в формировании документов и электронных чеков. Теперь вам не нужно тратить время на самостоятельное заполнение данных, поскольку это происходит автоматически.',
    rep: 'multi'
  },
  {
    img: 'lamp.png',
    name: 'Удобный выбор задания',
    text: 'Вы можете выбрать понравившееся вам задание всего одним нажатием. В случае, если не нашли подходящего задания, вы всегда можете обратиться за помощью к нашей поддержке.',
    rep: 'executor'
  },
  {
    img: 'lamp.png',
    name: 'Удобное размещение задания',
    text: 'Вы лично можете размещать задания в удобном личном кабинете. В случае, если возникли сложности, вы всегда можете обратиться за помощью к нашей поддержке.',
    rep: 'customer'
  },
  {
    img: 'robot.png',
    name: 'Поддержка исполнителей',
    text: 'Круглосуточная помощь в онлайн-режиме доступна через удобный чат и контактный центр. Мы готовы поддержать вас на всех этапах использования платформы и ответить на все ваши вопросы.',
    rep: 'executor'
  },
  {
    img: 'robot.png',
    name: 'Поддержка на любом уровне',
    text: 'Круглосуточная помощь в онлайн-режиме доступна через удобный чат и контактный центр. Мы готовы поддержать вас на всех этапах использования платформы и ответить на все ваши вопросы.',
    rep: 'customer'
  },
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
    <h2>Возможности платформы</h2>

    <div class="blocks">
      <div
          v-for="item in checkRep"
          class="block"
      >
        <img
            :src="getImageUrl(item.img)"
            alt="img"
        >
        <div class="title">{{item.name}}</div>
        <p>{{item.text}}</p>
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
    width: 540px;
    height: 235px;
    background: #F5F9FE;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
    &:nth-child(2) {
      margin-top: 35px;
    }
    &:nth-child(3) {
      margin-top: 40px;
    }
    &:nth-child(4) {
      margin-top: 75px;
    }
    img {
      position: absolute;
      right: 0;
      top: -20px;
    }
    .title {
      font-family: inter-600;
      font-size: 27px;
      margin: 20px 0 0 40px;
      line-height: 56px;
    }
    p {
      font-size: 17px;
      font-family: inter-400;
      line-height: 28px;
      max-width: 460px;
      margin: 10px 0 0 40px;
    }
  }
}

@media screen and (max-width: 460px) {
  .blocks {
    padding-bottom: 40px;
    justify-content: center;
    margin-top: 25px;
    .block {
      width: 320px;
      height: auto;
      padding-bottom: 25px;
      margin-top: 0;
      &:nth-child(2) {
        margin-top: 20px;
      }
      &:nth-child(3) {
        margin-top: 20px;
      }
      &:nth-child(4) {
        margin-top: 20px;
      }
      img {
        width: 50px;
        top: -10px;
      }
      .title {
        font-family: inter-500;
        font-size: 20px;
        line-height: 20px;
        margin-right: 60px;
      }
      p {
        font-size: 17px;
        font-family: inter-400;
        line-height: 22px;
        margin: 15px 40px 0 40px;
      }
    }
  }
}
@media screen and (max-width: 340px) {
  .blocks {
    .block {
      width: 300px;
    }
  }
}

</style>