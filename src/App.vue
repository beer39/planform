<script setup lang="ts">
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMain from "@/components/HeaderMain.vue";
import MainPossibilities from "@/components/MainPossibilities.vue";
import MainComfortable from "@/components/MainComfortable.vue";
import MainJust from "@/components/MainJust.vue";
import {computed} from "vue";
import {useCounterStore} from "@/stores/counter";
import MainTask from "@/components/MainTask.vue";
import MainPersonalArea from "@/components/MainPersonalArea.vue";
import FooterMain from "@/components/footerMain.vue";
import RegistExecutor from "@/components/modal/RegistExecutor.vue";

const checkRep = computed(() => {
  return useCounterStore().infoRep
})
</script>

<template>
  <header>
    <div class="container">
      <header-top/>
      <header-main/>
    </div>
  </header>
  <main>
    <div class="container">
      <main-possibilities/>
    </div>
    <div class="main__comfortable">
      <div class="container">
        <main-comfortable/>
      </div>
    </div>
    <div class="container">
      <div v-if="checkRep === 'executor'">
        <main-task/>
      </div>
      <div v-else>
        <main-personal-area/>
      </div>
      <main-just/>
    </div>
  </main>
  <div class="main__comfortable">
    <div class="container">
      <footer-main/>
    </div>
  </div>
  <regist-executor/>
</template>

<style scoped lang="less">

header {
  background-image: url("@/assets/images/bg-header.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.main__comfortable {
  background: #F5F9FE;
}
</style>
