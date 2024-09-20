<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        // Logic for login
        console.log('Logging in with', this.username, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
  }
  form div {
    margin-bottom: 1rem;
  }
  </style>
  