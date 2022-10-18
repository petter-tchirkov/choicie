<template>
  <main class="main">
    <section class="client">
      <div class="client__container container">
        <div class="client__content">
          <Heading
            class="client__heading"
            label="Choicie: more clients, easier communication"
          />
          <p class="client__text">
            Choicie is very familiar with the feeling of being an alien in
            another country (he is actually an alien). So Choicie decided to
            help people with the same problem to get rid of it and also improve
            cafes and restaurants.
          </p>
          <router-link class="client__cta" to="/"
            >Watch Choicie in action — 2 min</router-link
          >
        </div>
        <img src="@/assets/client.png" alt="" />
        <div class="client__review review">
          <div class="review__text">
            “We edited the menu after using this app. Now our sales are 30%
            higher“
          </div>
          <div class="review__reviewer reviewer">
            <img src="@/assets/icons/like.svg" alt="" class="review__img" />
            <div class="reviewer__text">
              <p class="reviewer__name">Anastasia Glorman,</p>
              <span> co-fouder @syngenta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Hero />
  </main>
</template>

<script setup>
import Heading from "../ui/Heading.vue";
import Hero from "../Hero.vue";
</script>

<style lang="scss" scoped>
.client {
  background: #f4f0ff;
  min-height: 100vh;

  &__container {
    display: flex;
    padding-top: 212px;
    gap: 200px;
    position: relative;
  }

  &__content {
    padding-top: 65px;
  }

  &__heading {
    @include h1;
    margin-bottom: 24px;
  }

  &__text {
    @include body-s;
    color: var(--gray-60);
    margin-bottom: 52px;
  }

  &__cta {
    text-decoration: none;
    @include body-m-bold;
    color: var(--brand-blue);
  }

  .review {
    position: absolute;
    background: var(--white);
    box-shadow: 0px 30px 60px rgba(21, 10, 51, 0.09);
    border-radius: 8px;
    max-width: 320px;
    padding: 32px;
    padding-right: 40px;
    right: 249px;
    bottom: -67px;

    &__text {
      @include body-s;
      font-style: italic;
      margin-bottom: 16px;
    }

    .reviewer {
      display: flex;
      gap: 16px;

      &__name {
        @include body-m-bold;
      }

      span {
        @include body-s;
      }
    }
  }
}

@media (max-width: 767px) {
  .client {
    min-height: auto;
    padding-bottom: 146px;

    &__container {
      flex-direction: column;
      padding-top: 120px;
      gap: 84px;
    }

    &__content {
      padding-top: 0;
    }

    &__heading {
      @include h4;
    }

    &__text {
      margin-bottom: 32px;
    }

    .review {
      right: 7%;
    }
  }
}
</style>
