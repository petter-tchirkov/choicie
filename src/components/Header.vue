<template>
  <header
    class="header"
    :style="[
      data.showBurger === false ? {} : { background: 'var(--brand-blue)' },
    ]"
  >
    <div class="header__container container">
      <div class="header__img" @click="data.showBurger = !data.showBurger">
        <img
          class="header__burger"
          :src="
            data.showBurger !== false
              ? './src/assets/icons/burger.svg'
              : './src/assets/icons/burger-black.svg'
          "
          v-if="screen.width <= 767"
          alt=""
        />
        <img
          :src="
            screen.width >= 767 || data.showBurger
              ? './src/assets/icons/logo.svg'
              : './src/assets/icons/logo-mobile.svg'
          "
          alt=""
          class="header__logo"
          v-if="$route.name === 'Home'"
        />
        <img
          v-if="$route.name !== 'Client'"
          src="@/assets/icons/logo-mobile.svg"
          alt=""
        />
      </div>
      <nav
        class="header__nav"
        :style="[
          data.showBurger !== false ? { top: '81px' } : { top: '-1000px' },
        ]"
      >
        <ul>
          <li>
            <router-link
              class="home-nav"
              :style="{ color: navbarColors[$route.path] }"
              to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="about-nav"
              :style="{ color: navbarColors[$route.path] }"
              to="/about"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="client-nav"
              :style="{ color: navbarColors[$route.path] }"
              to="/client"
              >Client</router-link
            >
          </li>
          <li>
            <router-link
              class="how-to-nav"
              :style="{ color: navbarColors[$route.path] }"
              to="/how-to-use"
              >How to use</router-link
            >
          </li>
          <li>
            <router-link
              class="contact-nav"
              :style="{ color: navbarColors[$route.path] }"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="header__btns" v-if="screen.width >= 767">
        <Button color="third" label="Android" icon="android-white" />
        <Button color="secondary" label="IOS" icon="ios-blue" />
      </div>
      <div class="header__btns--mobile" v-else>
        <Button size="rounded" color="white" icon="android" label="" />
        <Button size="rounded" color="white" icon="ios" label="" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from "vue";
import Button from "./ui/Button.vue";
import { useScreen } from "vue-screen";

const screen = useScreen();
const data = reactive({
  showBurger: false,
});

const navbarColors = {
  "/": "#fff",
  "/client": "#555560",
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  top: 42px;
  transition: 0.3s;
  z-index: 2;

  &__img {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    ul {
      display: flex;
      gap: 50px;

      li {
        list-style-type: none;

        a {
          text-decoration: none;
          @include body-m-semibold;
          position: relative;

          &.home-nav:after {
            background: #f2cf7e;
          }

          &.client-nav:after {
            background: var(--brand-blue);
          }

          &.router-link-active:after {
            content: "";
            position: absolute;
            width: 16px;
            height: 3px;
            border-radius: 50px;
            bottom: -13px;
            left: 33%;
          }
        }
      }
    }
  }

  &__btns {
    display: flex;
    gap: 16px;

    button {
      width: 147px;

      img {
        height: 16px;
      }

      &:last-child {
        color: var(--brand-blue);
      }
    }
  }

  &__btns--mobile {
    display: flex;
    gap: 8px;
  }
}

@media (max-width: 767px) {
  .header {
    top: 0;
    padding-top: 8px;
    height: 90px;

    &__logo {
      width: 80px;
    }

    &__nav {
      position: fixed;
      top: 81px;
      left: -16px;
      width: calc(100% + 16px);
      transition: 0.3s;
      ul {
        flex-direction: column;
        gap: 0;

        li {
          text-align: center;
          border-bottom: 1px solid #4a2f9b;
          padding-block: 16px;
          background: var(--brand-blue);
        }
      }
    }
  }
}
</style>
