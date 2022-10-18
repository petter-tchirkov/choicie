<template>
  <main class="main">
    <section class="home">
      <div class="home__container container">
        <div class="home__row">
          <div class="home__content">
            <h1 class="home__heading">
              All the restaurants in the world - with one tap
            </h1>
            <p class="home__text">
              And a good friend with the same name. He understands that feeling
              of being an alien in another country, so here is Choicie, an app.
              It can make your journey, date or meeting with friends much
              better.
            </p>
            <Button
              :color="screen.width >= 767 ? 'secondary' : 'primary'"
              label="Get Started"
            />
          </div>
          <img src="@/assets/home.png" alt="" />
        </div>
        <div class="home__items items">
          <h3 class="items__heading" v-if="screen >= 768">
            We are the first of our kind! Here you can find:
          </h3>
          <h3 class="items__heading" v-else>We are the first of our kind:</h3>
          <div class="items__list">
            <div class="items__item item">
              <img
                :src="
                  screen.width >= 767
                    ? './src/assets/icons/restaurant.svg'
                    : './src/assets/icons/restaurant-mobile.svg'
                "
                alt=""
              />
              <div class="item__content">
                <h5>Restaurant Review</h5>
                <span>Get best tips from our users and Choicie</span>
              </div>
            </div>
            <div class="items__item item">
              <img
                :src="
                  screen.width >= 767
                    ? './src/assets/icons/map.svg'
                    : './src/assets/icons/map-mobile.svg'
                "
                alt=""
              />
              <div class="item__content">
                <h5>Map with Restaurant Tags</h5>
                <span>Make simple selection by your criteria</span>
              </div>
            </div>
            <div class="items__item item">
              <img
                :src="
                  screen.width >= 767
                    ? './src/assets/icons/code.svg'
                    : './src/assets/icons/code-mobile.svg'
                "
                alt=""
              />
              <div class="item__content">
                <h5>QR Code Menu</h5>
                <span>Use fast and convenient way to create orders</span>
              </div>
            </div>
            <div class="items__item item">
              <img
                :src="
                  screen.width >= 767
                    ? './src/assets/icons/bonus.svg'
                    : './src/assets/icons/bonus-mobile.svg'
                "
                alt=""
              />
              <div class="item__content">
                <h5>Bonus Points for Clients</h5>
                <span>Spend it and get free drinks and dishes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Video v-if="screen.width > 767" />
    <Features />
    <HowIUse />
    <WorldMap />
    <Subscribe />
    <Footer />
  </main>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";
import { useScreen } from "vue-screen";
import Video from "../Video.vue";
import Features from "../Features.vue";
import HowIUse from "../HowIUse.vue";
import WorldMap from "../WorldMap.vue";
import Subscribe from "../Subscribe.vue";
import Footer from "../Footer.vue";

const screen = useScreen();
</script>

<style lang="scss" scoped>
.home {
  background: var(--brand-blue);
  min-height: 100vh;
  padding-top: 163px;

  &__heading {
    @include h1;
    color: var(--white);
    margin-bottom: 85px;
  }

  &__text {
    @include body-s;
    color: var(--white);
    margin-bottom: 52px;
  }

  button {
    color: #000;
    width: 173px;
  }

  &__row {
    display: flex;
    gap: 85px;
  }

  &__content {
    padding-top: 65px;
  }

  .items {
    &__heading {
      @include body-l-bold;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: var(--white);
      margin-bottom: 34px;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 15px;
      color: var(--white);
    }
  }

  .item {
    display: flex;
    align-items: center;
    gap: 25px;

    img {
      width: 65px;
    }

    h5 {
      @include body-s-bold;
    }

    span {
      @include body-xs;
    }
  }
}

@media (max-width: 767px) {
  .home {
    background: var(--bg-yellow);
    padding-top: 120px;
    padding-bottom: 60px;
    min-height: auto;

    &__row {
      img {
        display: none;
      }
    }

    &__heading {
      @include h3;
      color: var(--brand-black);
      margin-bottom: 16px;
      width: 80%;
    }

    &__text {
      @include body-xs;
      color: var(--gray-60);
      margin-bottom: 32px;
    }

    &__content {
      padding-top: 0;

      button {
        width: 100%;
        color: var(--white);
        margin-bottom: 60px;
      }
    }

    .items {
      &__heading {
        @include body-m-semibold;
        color: var(--brand-black);
        text-shadow: none;
        margin-bottom: 30px;
      }

      &__list {
        grid-template-columns: 1fr;
      }
    }

    .item {
      color: var(--brand-black);
      margin-bottom: 24px;
    }
  }
}
</style>
