<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title" />
    <textarea
      required
      placeholder="Placeholder description"
      v-model="description"
    ></textarea>
    <!-- upload playlist image -->
    <label>Upload playlist cover image</label>
    <input type="file" />

    <!-- <div class="error">{{ error }}</div> -->
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref("");
    const description = ref("");

    const handleSubmit = () => {
      console.log(title.value, description.value);
    };

    return { title, description, handleSubmit };
  },
};
</script>

<style>
input[type="file"] {
  border: 0;
  padding: 0;
}

label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}

button {
  margin-top: 20px;
}
</style>