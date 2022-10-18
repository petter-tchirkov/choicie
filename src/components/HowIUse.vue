<template>
  <section class="use">
    <div class="use__container container">
      <Heading class="use__heading" label="How do I use Choicie?" />
      <div class="use__content">
        <div class="use__steps steps">
          <div
            class="steps__item"
            v-if="screen.width >= 768 || data.slider < 25"
          >
            <img class="steps__img" src="@/assets/icons/qr.svg" alt="" />
            <p class="steps__text">
              Scan the QR-code on the foreign language menu.
            </p>
            <img class="number" src="@/assets/icons/1.svg" alt="" />
          </div>
          <div
            class="steps__item"
            v-if="screen.width >= 768 || (data.slider > 25 && data.slider < 50)"
          >
            <img class="steps__img" src="@/assets/icons/lang.svg" alt="" />
            <p class="steps__text">
              Automatically get to the online version of menu — it will be
              translated into your native language.
            </p>
            <img class="number" src="@/assets/icons/2.svg" alt="" />
          </div>
          <div
            class="steps__item"
            v-if="screen.width >= 768 || (data.slider > 50 && data.slider < 75)"
          >
            <img class="steps__img" src="@/assets/icons/dishes.svg" alt="" />
            <p class="steps__text">
              Choose and order one or more dishes you like, then show your
              QR-code from Choicie to the waiter.
            </p>
            <img class="number" src="@/assets/icons/3.svg" alt="" />
          </div>
          <div
            class="steps__item"
            v-if="
              screen.width >= 768 || (data.slider > 75 && data.slider <= 100)
            "
          >
            <img class="steps__img" src="@/assets/icons/share.svg" alt="" />
            <p class="steps__text">
              Share your impressions, tips, and ratings to help other Choicie
              users.
            </p>
            <img class="number" src="@/assets/icons/4.svg" alt="" />
          </div>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          id="slider"
          v-model="data.slider"
          v-if="screen.width < 767"
        />
        <div class="use__pros pros">
          <div class="pros__content">
            <div class="pros__item">
              <img
                class="pros__image"
                src="@/assets/icons/barrier.svg"
                alt=""
              />
              <p class="pros__text">No language barrier</p>
            </div>
            <div class="pros__item">
              <img
                class="pros__image"
                src="@/assets/icons/conversation.svg"
                alt=""
              />
              <p class="pros__text">
                No need to search for reviews — all collected in one place
              </p>
            </div>
            <div class="pros__item">
              <img
                class="pros__image"
                src="@/assets/icons/choicie.svg"
                alt=""
              />
              <p class="pros__text">
                No need to install any translator — all you need is Choicie
              </p>
            </div>
          </div>
          <Button color="secondary" label="Get Started" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import Button from "./ui/Button.vue";
import { useScreen } from "vue-screen";
import Heading from "./ui/Heading.vue";

const screen = useScreen();
const data = reactive({
  slider: 1,
});
</script>

<style lang="scss" scoped>
.use {
  background: var(--bg-yellow);
  padding-bottom: 120px;

  &__heading {
    @include h2;
    padding-top: 120px;
    margin-bottom: 120px;
    text-align: center;
  }

  &__content {
    display: flex;
  }

  .steps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 130px;
    grid-row-gap: 60px;
    border-right: 1px solid #e6e0cd;
    padding-right: 65px;

    &__img {
      margin-bottom: 28px;
    }

    &__item {
      max-width: 270px;
      position: relative;

      .number {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    &__img {
      height: 112px;
    }

    &__text {
      @include body-s;
      color: var(--brand-black);
    }
  }

  .pros {
    padding-left: 65px;

    &__item {
      display: flex;
      gap: 24px;
      align-items: center;
      margin-bottom: 24px;
    }

    button {
      margin-top: 52px;
      width: 173px;
      color: #000;
    }
  }
}

@media (max-width: 767px) {
  .use {
    padding-bottom: 55px;

    &__heading {
      padding-top: 50px;
      margin-bottom: 48px;
    }
    &__content {
      flex-direction: column;

      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        margin-bottom: 64px;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        background: #e6e0cd;
        height: 1px;
      }

      /******** Firefox ********/
      input[type="range"]::-moz-range-track {
        background: #e6e0cd;
        height: 1px;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -25px; /* Centers thumb on the track */
        background-color: var(--white);
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
        height: 52px;
        width: 52px;
        border-radius: 50%;
      }
    }

    .steps {
      grid-template-columns: 1fr;
      padding-right: 0;

      &__item {
        max-width: 100%;
        margin-bottom: 46px;
      }
    }

    .pros {
      padding-left: 0;

      button {
        width: 100%;
        color: var(--white);
      }
    }
  }
}
</style>
