<script setup lang="ts">
import {ref} from "vue";

const mainInfo = ref([
  {
    name: 'Приложение',
    text: 'У нас реализовано как мобильное приложение для самозанятых, так и веб версия сайта.',
  },
  {
    name: 'Чеки',
    text: 'Чеки формируются, подписываются и отправляются автоматически, не нужен контроль.',
  },
  {
    name: 'Документы',
    text: 'Все хранится в одном удобном месте, электронная подпись и уведомления.',
  },
])

</script>

<template>
  <div>
    <h2>Личный кабинет для исполнителей</h2>
    <div class="blocks">
      <div
          class="block"
          v-for="item in mainInfo"
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
  justify-content: space-between;
  .block {
    position: relative;
    width: 360px;
    height: 150px;
    background: #F5F9FE;
    border-radius: 10px;
    .title {
      font-family: inter-500;
      font-size: 24px;
      line-height: 22px;
      margin: 25px 0 0 30px;
    }
    p {
      margin: 10px 30px 0;
      line-height: 20px;
      font-family: inter-400;
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 460px) {
  .blocks {
    flex-direction: column;
    padding-bottom: 0;
    margin-top: 0;
    align-items: center;
    .block {
      width: 300px;
      margin-top: 15px;
      height: auto;
      padding-bottom: 25px;
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