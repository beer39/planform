<script setup lang="ts">
import {ref} from "vue";

const mainInfo = ref([
  {
    region: 'Балашиха',
    fullRegion: 'Железнодорожный',
    text: 'Комплек-товщик',
    price: '358 р./час.',
    direction: 'Логистика'
  },
  {
    region: 'Москва',
    fullRegion: 'г. Москва, ул. Тверская, д. 155',
    text: 'Оператор линии',
    price: '311 р./час.',
    direction: 'Производство'
  },
  {
    region: 'Балабаново',
    fullRegion: 'Адмирала Макарова, д. 50,стр.55',
    text: 'Работник торгового зала',
    price: '288 р./час.',
    direction: 'Ритейл'
  },
  {
    region: 'Балабаново',
    fullRegion: 'Адмирала Макарова, д. 50,стр.55',
    text: 'Гладильщица/к',
    price: '254 р./час.',
    direction: 'Клининг'
  },
])
</script>

<template>
  <div>
    <h2>Примеры заданий</h2>
    <div class="blocks">
      <div
          class="block"
          v-for="item in mainInfo"
      >
        <div class="geolocation">
          <div>
            <div>{{ item.region }}</div>
            <div>{{ item.fullRegion }}</div>
          </div>
          <img src="@/assets/images/geo-map.png" alt="geo" width="20" height="20">
        </div>
        <div class="name-profession">{{ item.text }}</div>
        <!--        <img-->
        <!--            :src="item.img"-->
        <!--        >-->
        <div class="price">
          <div class="price__border"></div>
          {{ item.price }}
        </div>
        <div class="direction">{{ item.direction }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.blocks {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  .block {
    background: #1EAE5A;
    border-radius: 10px;
    width: 270px;
    height: 250px;
    color: #fff;
    .geolocation {
      padding: 20px 20px 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: inter-400;
      font-size: 12px;
      line-height: 18px;
    }
    .name-profession {
      font-family: inter-500;
      font-size: 30px;
      line-height: 30px;
      padding: 20px 20px 5px 20px;
    }
    .price {
      font-family: inter-500;
      font-size: 18px;
      line-height: 21px;
      padding: 0 20px;
      &__border {
        margin: 15px 0;
        border-top: 1px solid #fff;
      }
    }
    .direction {
      margin: 15px 20px;
      font-family: inter-500;
      font-size: 18px;
      line-height: 21px;
    }
  }
}
@media screen and (max-width: 460px) {
  .blocks {
    margin-top: 15px;
    flex-direction: column;
    align-items: center;
    .block {
      margin-top: 15px;
      &:nth-child(1) {
        margin-top: 0;
      }
      .name-profession {
        font-size: 24px;
        line-height: 24px;
      }
      .price {
        font-size: 16px;
        line-height: 18px;
      }
      .direction {
        font-family: inter-500;
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
}

</style>