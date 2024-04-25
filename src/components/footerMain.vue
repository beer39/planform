<script setup lang="ts">
import {ref} from "vue";

const mainInfo = ref([
  {
    img: '@/assets/images/footer_google.png',
    text: 'google store',
  },
  {
    img: '@/assets/images/footer_apple.png',
    text: 'apple store',
  },
  {
    img: '@/assets/images/footer_huawei.png',
    text: 'huawei store',
  },
])
</script>

<template>
  <div class="footer">
    <div class="footer__info">
      <div class="contacts">
        <div class="title">Контакты</div>
        <p class="first">Калининград, Юбилейная 10, помещение III,</p>
        <p>этаж 4, офис 412</p>
        <p>+7 800 333 30 84</p>
        <p>support@itmuse.ru</p>
      </div>
      <div class="apps">
        <div class="title">Приложение для заказчиков</div>
        <div class="footer__store" >
          <img src="@/assets/images/footer_google.png" alt="google store">
          <img class="img__margin" src="@/assets/images/footer_apple.png" alt="apple store">
          <img class="img__margin" src="@/assets/images/footer_huawei.png" alt="huawei store">
        </div>
      </div>
    </div>
    <div class="copyright">© 2024 АЙТИМУС</div>
  </div>
</template>

<style scoped lang="less">
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  .copyright {
    text-align: center;
    font-size: 16px;
    font-family: inter-400;
    line-height: 22px;
    margin-top: 30px;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-family: inter-500;
    font-size: 18px;
    line-height: 22px;
  }
  .contacts {
    p {
      font-family: inter-400;
      font-size: 15px;
      line-height: 22px;
    }
    .first {
      margin: 15px 0 0 0;
    }
  }
  &__store {
    display: flex;
    img {
      margin-top: 10px;
      cursor: pointer;
    }
    .img__margin {
      margin-left: 15px;
    }
  }
}
@media screen and (max-width: 460px) {
  .footer__info {
    flex-direction: column;
  }
  .apps {
    margin-top: 15px;
  }
  .footer__store {
    flex-wrap: wrap;
    .img__margin {
      margin-left: 5px;
      &:nth-child(3) {
        margin-left: 0;
      }
    }
  }
}

@media screen and (max-width: 340px) {
  .footer {
    padding-right: 5px;
    padding-left: 5px;
  }
}

</style>