<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <img src="@/assets/icons/logo.svg" alt="" class="footer__logo" />
        <span>You know what you choose!</span>
      </div>
      <div class="footer__middle middle" v-if="screen.width >= 768">
        <div class="middle__column">
          <router-link to="/">Privacy Policy</router-link>
        </div>
        <div class="middle__column">
          <router-link to="/">Facebook</router-link>
          <router-link to="/">Twitter</router-link>
          <router-link to="/">Instagram</router-link>
          <router-link to="/">LinkedIn</router-link>
        </div>
      </div>
      <div class="footer__middle--mobile" v-else>
        <div class="middle__column">
          <router-link to="/">Home</router-link>
          <router-link to="/">Universal Menu</router-link>
          <router-link to="/">How do use</router-link>
          <router-link to="/">Growth Factor</router-link>
          <router-link to="/">Contact</router-link>
          <router-link to="/">Privacy Policy</router-link>
        </div>
        <div class="middle__column">
          <router-link to="/">Facebook</router-link>
          <router-link to="/">Twitter</router-link>
          <router-link to="/">Instagram</router-link>
          <router-link to="/">LinkedIn</router-link>
        </div>
      </div>
      <form class="footer__right">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Enter Text" />
        <Button label="Send" color="secondary" />
      </form>
    </div>
  </footer>
</template>

<script setup>
import Button from "./ui/Button.vue";
import { useScreen } from "vue-screen";

const screen = useScreen();
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 120px;
  padding-bottom: 164px;
  background: #1e0c51;
  position: relative;
  z-index: 2;
  overflow: hidden;

  &:after {
    content: "";
    background: url("../assets/cover-right.png");
    position: absolute;
    top: 100px;
    right: -22px;
    width: 683px;
    height: 780px;
    z-index: -1;
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    img {
      height: 44px;
    }

    span {
      @include body-xs;
      color: var(--white);
    }
  }

  .middle {
    display: flex;
    gap: 115px;

    &__column {
      display: flex;
      flex-direction: column;

      a {
        @include body-l;
        color: var(--white);
        text-decoration: none;
        margin-bottom: 24px;
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;

    input {
      background: var(--brand-blue);
      border-radius: 100px;
      border: none;
      padding-left: 24px;
      padding-block: 14px;
      margin-bottom: 16px;

      &::placeholder {
        color: var(--white);
      }
    }
  }
}

@media (max-width: 767px) {
  .footer {
    padding-top: 48px;

    &:after {
      display: none;
    }

    &__container {
      flex-direction: column;
    }

    &__left {
      margin-bottom: 36px;
    }

    &__middle--mobile {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }

    &__right {
      max-width: 100%;
    }
  }
}
</style>
