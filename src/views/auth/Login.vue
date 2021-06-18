<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import useLogin from "../../composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>