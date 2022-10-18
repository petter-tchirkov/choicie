<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__text">500+ RESTAURANTS TRUST CHOICIE</div>
      <ul class="hero__list">
        <li class="hero__item" v-for="item in restaurants">
          <img
            :src="`./src/assets/icons/hero${item.id}.png`"
            :alt="item.name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const restaurants = [
  { id: 1, name: "Cadbury" },
  { id: 2, name: "Krispy Kreme" },
  { id: 3, name: "Just Eat" },
  { id: 4, name: "TGI Fridays" },
  { id: 5, name: "Syngenta" },
];
</script>

<style lang="scss" scoped>
.hero {
  background: var(--brand-blue);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 42px;
    padding-bottom: 38px;
  }

  &__text {
    @include body-xs-medium;
    color: var(--white);
  }

  &__list {
    display: flex;
    gap: 50px;
  }

  &__item {
    list-style-type: none;
  }
}

@media (max-width: 767px) {
  .hero {
    &__container {
      flex-direction: column;
    }

    &__text {
      margin-bottom: 48px;
    }

    &__list {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      flex-basis: 33%;

      &:last-child {
        flex-basis: 100%;
        text-align: center;
      }
    }
  }
}
</style>
