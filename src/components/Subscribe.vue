<template>
  <section class="subscribe">
    <div class="subscribe__container container">
      <div class="subscribe__content">
        <Heading
          class="subscribe__heading"
          label="Subscribe and become a part of Choicie"
        />
        <p class="subscribe__text">
          Leave your email and get all the information about product updates,
          blog updates, exclusive updates.
        </p>
      </div>
      <form action="#" class="subscribe__form">
        <input type="text" placeholder="Yout email" />
        <Button color="secondary" label="Register to Newsletter" />
      </form>
    </div>
  </section>
</template>

<script setup>
import Heading from "./ui/Heading.vue";
import Button from "./ui/Button.vue";
</script>

<style lang="scss" scoped>
.subscribe {
  background: var(--brand-blue);
  padding-top: 72px;
  padding-bottom: 86px;

  &__container {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }

  &__content {
    max-width: 66.7%;
  }

  &__heading {
    @include h2;
    color: var(--white);
    margin-bottom: 12px;
  }

  &__text {
    @include body-l;
    max-width: 75%;
    color: var(--white);
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 370px;
    width: 100%;

    input {
      padding: 14px 60px 14px 24px;
      border: 1px solid #6053b1;
      border-radius: 100px;
      background: var(--brand-blue);
      &::placeholder {
        color: var(--white);
      }
    }
  }
}

@media (max-width: 767px) {
  .subscribe {
    &__container {
      flex-direction: column;
    }

    &__content {
      max-width: 100%;
    }

    &__heading {
      @include body-l-bold;
    }

    &__text {
      max-width: 100%;
    }

    &__form {
      gap: 16px;
    }
  }
}
</style>
