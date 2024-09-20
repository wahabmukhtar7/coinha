<template>
    <header class="app-header">
      <div class="logo">
        <!-- Replace with your logo -->
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/subscription-plans">Subscription Plans</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="user-profile">
        <!-- Placeholder for user profile actions (login/signup) -->
        <button @click="handleLogin">Login</button>
        <button @click="handleSignUp">Sign Up</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    methods: {
      handleLogin() {
        // Logic for login
        console.log('Login clicked');
      },
      handleSignUp() {
        // Logic for sign-up
        console.log('Sign Up clicked');
      }
    }
  }
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  .logo img {
    height: 40px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  nav ul li {
    display: inline;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .user-profile button {
    margin-left: 1rem;
  }
  </style>
  
  