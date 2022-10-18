<template>
  <div class="htu">
    <div class="htu__container container">
      <div class="htu__form">
        <h2>Write your post</h2>
        <input type="text" placeholder="Title" v-model="state.title" />
        <textarea type="textarea" placeholder="Body" v-model="state.body" />
      </div>
      <div class="htu__buttons">
        <Button label="GET" @click="getData()" />
        <Button label="POST" @click="postData()" />
        <Button label="PUT" @click="putData()" />
        <Button label="PATCH" @click="patchData()" />
        <Button label="DELETE" @click="deleteData()" />
      </div>
      <div class="htu__items">
        <div
          class="htu__item"
          v-for="(item, index) in state.response"
          :key="index"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Button from "../ui/Button.vue";
import Toaster from "@meforma/vue-toaster";

const state = reactive({
  response: [],
  title: "",
  body: "",
  error: null,
  fetching: true,
});

const getData = async () => {
  state.response = [];
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((json) => (state.response = json));
  } catch (error) {
    console.log(error);
  }
};

const postData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: state.title,
        body: state.body,
        userId: state.response.length + 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => state.response.push(json));
  } catch (error) {
    console.log(error);
  }
};

const putData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        title: state.title,
        body: state.body,
        userId: state.response.length + 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => state.response.push(json));
  } catch (error) {
    console.log(error);
  }
};

const patchData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: state.title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => state.response.push(json));
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.htu {
  padding-top: 200px;

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;

    button {
      width: 100px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;

    h2 {
      @include h2;
    }

    input {
      height: 30px;
      width: 400px;
    }

    textarea {
      width: 400px;
      height: 205px;
    }
  }
}
</style>
