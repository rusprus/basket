<template>
  <div class="container">
    <div class="main-head">
      <div class="small-basket">
        <div class="small-basket__img"> <img class="small-basket__img-img" src="" /> </div>
        <div class="small-basket__text">
          <div class="small-basket__title">Ваша корзина</div>
          <div class="small-basket__count"> {{ total.count }} товара</div>
          <div class="small-basket__price"> {{ total.sum }} Р</div>
        </div>
      </div>
    </div>
    <div class="breadcrumb">
      <ul class="breadcrumb-ul">
        <li class="breadcrumb-li">Главная</li>
        <li class="breadcrumb-current">Корзина</li>
      </ul>
    </div>

    <div class="basket">
      <div class="basket__wrap">
        <div class="basket__list">
          <div class="basket__title">
            <div class="basket__title-1">
              <h1>Ваша корзина</h1>
              <p class="basket__title_count">4 товара</p>
            </div>
            <div class="basket__title-2">
              <p class="basket__title_clean" @click="delAll">Очистить корзину</p>
            </div>
          </div>


          <div class="basket__item card" v-for="good in getGoodsByOrder" :key="good.id">
            <div class="card__img"><img class="card__img-img" src='/' alt=""></div>
            <div class="card__text">
              <h5>{{ good.name }}</h5>
              <p>{{ good.description }}</p>
              <p class="card__text-articul">{{ good.article }}</p>
            </div>
            <div class="card__add">
              <div class="card__button" @click="subs(good.id)">-</div>
              <div class="card__button">{{ good.count }}</div>
              <div class="card__button" @click="add(good.id)">+</div>
            </div>
            <div class="card__sum">
              <p class="card__sum-price">{{ good.price }} <span class="card__sum-span">P</span></p>
            </div>
            <div class="card__close" @click="del(good.id)">x</div>
          </div>

          <div class="basket__setting">
            <div><input class="basket__setting-input" type="checkbox" v-model="checked"></div>
            <div class="basket__setting-img"><img src="" alt=""></div>
            <div class="basket__setting-text">
              <p class="basket__setting-text-1">Установка</p>
              <p class="basket__setting-text-2">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
            </div>
          </div>
        </div>
        <div class="basket__card total-card">

          <div class="total-card__items">
            <div class="total-card__title">
              <p class="total-card_head">Итого</p>
            </div>
            <div class="total-card__item">
              <p class="total-card_position">Сумма заказа</p>
              <p class="total-card_value">{{ total.sum }} Руб</p>
            </div>
            <div class="total-card__item">
              <p class="total-card_position">Количество</p>
              <p class="total-card_value">{{ total.count }} шт.</p>
            </div>
            <div class="total-card__item">
              <p class="total-card_position">Установка</p>
              <p class="total-card_value">{{ flagInstall }}</p>
            </div>
            <div class="total-card__item total-card_border">
            </div>
            <div class="total-card__price">
              <p class="total-card_sum-title">Стоимость товара</p>
              <p class="total-card_sum">{{ total.sum }} Руб</p>
            </div>
          </div>

          <div class="total-card__actions">
            <div class="button button-primary" @click="sendOrder">Оформить заказ</div>
            <div class="button button-secondary" @click="sendOrder">Купить в 1 клик</div>
          </div>
        </div>

      </div>
    </div>

    <div class="swipe-header">
      <div class="swipe-header-h1">Просмотренные товары</div>
      <div class="swipe-header-controls">Кнопки</div>
    </div>

    <SwiperComponent />
  </div>
</template>

<script>
import SwiperComponent from './components/SwiperComponent.vue'
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    SwiperComponent
  },
  data() {
    return {
      checked: false
    }
  },
  watch: {
    checked(newVal) {
      this.setInstall(newVal)
    }
  },
  computed: {
    ...mapState(['order', 'install']),
    ...mapGetters(['getGoodsByOrder', 'total']),
    flagInstall() {
      if (this.install == true) {
        return 'Да'
      } else {
        return 'Нет'
      }
    },
  },
  methods: {
    ...mapActions(['del', 'delAll', 'setInstall', 'subs', 'add', 'sendOrder']),
  }

}
</script>

<style>


@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./assets/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}
</style>
