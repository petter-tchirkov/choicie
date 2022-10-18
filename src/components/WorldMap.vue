<template>
  <section class="world">
    <div class="world__container container">
      <h3 class="world__subheading">
        We work with cafe and restaurant owners from
      </h3>
      <Heading
        class="world__heading"
        :label="
          screen.width > 767 ? 'All the world' : '10 countries, 5 continents'
        "
      />
      <p class="world__text">
        And there will be more!<br />
        Choicie is ready to work internationally. We work with customers in 8
        different time zones.
      </p>
      <img src="@/assets/world-map.png" alt="" />
    </div>
  </section>
</template>

<script setup>
import { useScreen } from "vue-screen";
import Heading from "./ui/Heading.vue";

const screen = useScreen();
</script>

<style lang="scss" scoped>
.world {
  padding-top: 130px;
  padding-bottom: 160px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__subheading {
    text-transform: uppercase;
    @include body-m-semibold;
    color: var(--brand-blue);
    margin-bottom: 32px;
  }

  &__heading {
    @include h2;
    margin-bottom: 32px;
  }

  &__text {
    @include body-l;
    text-align: center;
    color: var(--gray-60);
    margin-bottom: 122px;
  }
}

@media (max-width: 767px) {
  .world {
    padding-top: 45px;
    padding-bottom: 60px;

    img {
      width: 100%;
    }

    &__subheading {
      text-align: center;
      margin-bottom: 12px;
    }

    &__heading {
      @include body-l-bold;
      margin-bottom: 12px;
    }

    &__text {
      @include body-xs;
      margin-bottom: 48px;
    }
  }
}
</style>
