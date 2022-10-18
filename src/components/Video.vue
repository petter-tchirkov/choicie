<template>
  <section class="video">
    <div class="video__container container">
      <Heading label="Learn more about Choicie in 1 minute" />
      <iframe
        src="https://www.youtube.com/embed/JxS5E-kZc2s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import Heading from "./ui/Heading.vue";
</script>

<style lang="scss" scoped>
.video {
  padding-top: 70px;

  h2 {
    @include h2;
    text-align: center;
    margin-bottom: 75px;
  }

  iframe {
    width: 100%;
    height: 712px;
    margin-bottom: 70px;
  }
}
</style>
