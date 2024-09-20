<template>
    <div class="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      handleSignUp() {
        // Logic for sign-up
        console.log('Signing up with', this.username, this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .signup {
    max-width: 300px;
    margin: auto;
  }
  form div {
    margin-bottom: 1rem;
  }
  </style>
  