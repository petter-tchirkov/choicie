<template>
  <section class="features">
    <div class="features__container container">
      <div class="features__item">
        <div class="features__content">
          <Heading
            class="features__heading"
            label="Choicie is a universal menu for all restaurants."
          />
          <p>Foreign language names are no longer a problem.</p>
          <p>
            Try new dishes when you travel or just go outside — with Choicie,
            you can order anything using automatic menu translation pictures of
            dishes. Place your order on the way to the restaurant, then just
            show the QR-code to the waiter.
          </p>
          <Button label="Get Started" />
        </div>
        <img
          :src="
            screen.width > 767
              ? './src/assets/features.png'
              : './src/assets/features-mobile.png'
          "
          alt=""
        />
      </div>
      <div class="features__item">
        <img
          :src="
            screen.width > 767
              ? './src/assets/features2.png'
              : './src/assets/features2-mobile.png'
          "
          alt=""
        />
        <div class="features__content">
          <Heading class="features__heading" label="And a new social network" />
          <p>
            For those who love food! Become an Influencer: add new restaurants
            to the city map, earn points, get followers.
          </p>
          <p>
            Keep private important ordering information in your account: mark
            the dishes you liked and didn't like, and the foods you're allergic
            to.
          </p>
          <Button label="Get Started" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./ui/Button.vue";
import Heading from "./ui/Heading.vue";
import { useScreen } from "vue-screen";

const screen = useScreen();
</script>

<style lang="scss" scoped>
.features {
  margin-bottom: 252px;

  &__item {
    display: flex;
    gap: 86px;
    margin-bottom: 140px;
  }

  &__content {
    padding-top: 36px;
  }

  &__heading {
    @include h2;
    color: var(--brand-black);
    margin-bottom: 24px;
  }

  p {
    color: var(--gray-60);

    &:first-of-type {
      margin-bottom: 36px;
    }
  }

  button {
    margin-top: 52px;
    width: 173px;
  }
}

@media (max-width: 767px) {
  .features {
    padding-block: 50px;
    margin-bottom: 0;

    &__item {
      gap: 32px;
      margin-bottom: 80px;
    }

    &__heading {
      @include h3;
      width: 90%;
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 32px;
    }

    &__item {
      flex-direction: column-reverse;

      &:last-child {
        flex-direction: column;
      }
    }
  }
}
</style>
