<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";
import {computed, ref} from "vue";

const body = document.querySelector('body');
const disableScroll = () => {
  if (body) {
    body.style.overflow = 'hidden';
  }
}
const enableScroll = () => {
  if (body) {
    body.style.overflow = 'auto';
  }
}

const thankWindow = ref(false)
const checkRep = computed(() => {
  useCounterStore().modalRegExecutor ? disableScroll() : enableScroll()
  return useCounterStore().modalRegExecutor
})

const nameInfo = ref('')
const phoneInfo = ref('')

const closeModal = () => {
  thankWindow.value = false
  checkDataName.value = false
  checkDataPhone.value = false
  useCounterStore().modalRegExecutor = false
}
const checkDataName = ref(false)
const checkDataPhone = ref(false)
const sendData = () => {
  checkDataName.value = false
  checkDataPhone.value = false
  if (nameInfo.value.length < 1) {
    checkDataName.value = true
    return
  }
  if (phoneInfo.value.length < 1) {
    checkDataPhone.value = true
    return
  }
  thankWindow.value = true
  setTimeout(() => {
    closeModal()
    nameInfo.value = ''
    phoneInfo.value = ''
  }, 1600)
}
</script>

<template>
  <div
      v-if="checkRep"
      class="modal__bg"
  >
    <div
        v-if="!thankWindow"
        class="modal"
    >
      <button
          class="closeModal"
          @click="closeModal"
      >
        &times;
      </button>
      <h3>Заполните данные</h3>
      <form>
        <label for="name">Имя:</label>
        <input
            v-model="nameInfo"
            type="text"
            id="name"
            name="name"
            placeholder="Введите имя"
            required
            :style="checkDataName ? 'border: 1px solid red' : ''"
        >

        <label for="phone">Телефон:</label>
        <input
            v-model="phoneInfo"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Введите номер телефона"
            required
            :style="checkDataPhone ? 'border: 1px solid red' : ''"
        >

        <input @click="sendData" class="btn-green" type="submit" value="Отправить">
      </form>
    </div>
    <div
        v-if="thankWindow"
        class="modal"
    >
      <div class="modal__thank">Спасибо за отклик! В ближайшее время с Вами свяжется оператор!</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.modal__bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12, 12, 12, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.modal {
  max-width: 360px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  &__thank {
    font-family: inter-500;
    font-size: 18px;
  }
  .closeModal {
    font-family: inter-400;
    line-height: 24px;
    padding: 0 6px;
    border-radius: 30px;
    font-size: 18px;
    border: none;
    background: transparent;
    position: absolute;
    top: 2px;
    right: 2px;
    &:hover {
      background: rgba(139, 139, 139, 0.6);
    }
  }
  h3 {
    font-family: inter-500;
    font-size: 24px;
    margin-bottom: 15px;
  }
  form {
    font-family: inter-400;
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
  }
  input[type="submit"] {
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: inter-400;
    padding: 10px;
    margin-top: 10px;
  }
}
.modal input[type="text"],
.modal input[type="tel"] {
  padding: 10px 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid black;
}
@media screen and (max-width: 460px) {
  .modal {
    min-width: 260px;
    max-width: 280px;
    padding: 30px 15px;
    .closeModal {
      font-family: inter-400;
      line-height: 28px;
      padding: 2px 8px;
      font-size: 24px;
      top: 2px;
      right: 2px;
    }
  }
}
</style>