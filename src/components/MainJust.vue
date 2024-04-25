<script setup lang="ts">
import {computed} from "vue";
import {useCounterStore} from "@/stores/counter";

const checkRep = computed(() => {
  return useCounterStore().infoRep === 'executor' ? 'Зарегистрироваться' : 'Подключиться'
})
const openModal = () => {
  useCounterStore().modalRegExecutor = true
}
</script>

<template>
  <div class="just">
    <div class="just__text">
      <h2>Все просто!</h2>
      <p>Регистрация не отнимет много времени.</p>
    </div>
    <div class="just__btn">
      <button @click="openModal" class="btn-green">{{ checkRep }}</button>
      <button @click="openModal" class="btn-orange">Задать вопрос</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.just {
  margin-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__text {
    h2 {
      padding-top: 0;
      text-align: start;
    }
    p {
      font-family: inter-400;
      font-size: 24px;
      margin-top: 15px;
    }
  }
  &__btn {
    .btn-orange {
      margin-left: 25px;
    }
  }
}
@media screen and (max-width: 460px) {
  .just {
    margin-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    &__text {
      h2 {
        padding-top: 0;
        text-align: start;
      }
      p {
        font-family: inter-400;
        font-size: 18px;
        margin-top: 10px;
      }
    }
    &__btn {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .btn-orange {
        margin-left: 25px;
      }
    }
  }
}
@media screen and (max-width: 340px) {
  .just {
    padding-right: 5px;
    padding-left: 5px;
  }
}

</style>