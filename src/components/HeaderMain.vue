<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";
import {computed, ref, watch} from "vue";

const headerInfo = ref([
  {
    img: 'geo.png',
    name: 'Рядом с домом',
    text: 'Выбирайте лучшие предложения рядом с вашим домом',
    rep: 'executor'
  },
  {
    img: 'search.png',
    name: 'Поиск',
    text: 'Удобный поиск  кандидатов',
    rep: 'customer'
  },
  {
    img: 'time.png',
    name: 'Гибкий график',
    text: 'Выбирайте задания под свой график',
    rep: 'executor'
  },
  {
    img: 'settings.png',
    name: 'Управление',
    text: 'Вы сами управляете всеми уровнями',
    rep: 'customer'
  },
  {
    img: 'gear.png',
    name: 'Автоматизация',
    text: 'Автоматизация выплат и документооборота',
    rep: 'multi'
  },
  {
    img: 'shield.png',
    name: 'Надежность',
    text: 'Выполняйте задания от проверенных заказчиков',
    rep: 'executor'
  },
  {
    img: 'shield.png',
    name: 'Контроль',
    text: 'Проверка статуса самозанятого',
    rep: 'customer'
  }
])
const titleInfo = ref('')
const textInfo = ref('')
const btnInfo = ref('')

const checkRep = computed(() => {
  if (useCounterStore().infoRep === 'customer') {
    titleInfo.value = 'Платформа для работы с самозанятыми'
    textInfo.value = 'Поиск исполнителей, документооборот, расчет'
    btnInfo.value = 'Подключиться'
  } else {
    titleInfo.value = 'Платформа для самозанятых'
    textInfo.value = 'Найдите задания для самозанятых с легкостью!'
    btnInfo.value = 'Зарегистрироваться'
  }
  return  headerInfo.value.filter((elem) => elem.rep === useCounterStore().infoRep || elem.rep === 'multi')
})
const getImageUrl = (name: any) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
const openModal = () => {
  useCounterStore().modalRegExecutor = true
}

</script>

<template>
  <div class="header">
    <div class="header__title">
      <h1>{{ titleInfo }}</h1>
      <h3>{{ textInfo }}</h3>
      <button @click="openModal" class="btn-green">{{ btnInfo }}</button>
    </div>
    <div class="blocks" >
      <div
          v-for="item in checkRep"
          class="block"
      >
        <div
            class="block__header"
        >
        <img
            :src="getImageUrl(item.img)"
            :alt="item.name"
        >
          <div class="title">{{item.name}}</div>
        </div>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: jost-500;
  }
  h1 {
    margin-top: 200px;
    font-size: 56px;
  }
  h3 {
    font-size: 24px;
    margin-top: 35px;
  }
  button {
    margin-top: 35px;
  }
  .blocks {
    margin-top: 120px;
    padding-bottom: 90px;
    display: flex;
    justify-content: space-evenly;
    .block {
      background: #fff;
      border: 1px solid #279134;
      border-radius: 12px;
      width: 240px;
      height: 127px;
      &__header {
        display: flex;
        align-items: center;
        .title {
          font-size: 18px;
          font-family: inter-500;
          margin-top: 20px;
        }
      }
      img {
        margin: 20px 10px 0 30px;
        width: 17px;
        height: 17px;
        border: 1px solid #279134;
        padding: 4px;
        border-radius: 5px;
      }
      p {
        font-size: 14px;
        font-family: inter-400;
        margin: 10px 30px 0 30px;
        line-height: 16px;
      }
    }
  }
}
@media screen and (max-width: 460px) {
  .header {
    h1 {
      margin-top: 80px;
      font-size: 42px;
    }
    h3 {
      font-size: 20px;
      margin-top: 25px;
    }
    button {
      margin-top: 25px;
    }
    .blocks {
      flex-direction: column;
      margin-top: 40px;
      padding-bottom: 25px;
      align-items: center;
      .block {
        width: 300px;
        height: auto;
        padding-bottom: 20px;
        margin-bottom: 15px;
        &__header {
          .title {
            font-size: 18px;
            font-family: inter-500;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 340px) {
  .header {
    padding: 0 5px;
  }
}

</style>