<template>
  <div class="w-100">
    <div class="w-25 mx-auto mt-5">
      <div class="w-100 login-header p-5">
        <h4 class="text-center">Login Form</h4>
      </div>
      <div class="w-100 p-3">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Type your email"
            v-model="credentials.email"
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Type your password"
            v-model="credentials.password"
          >
        </div>
        <div class="form-group">
          <input type="submit" value="Login" class="btn btn-primary w-100" @click="loginUser">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "LoginComponent",
  data() {
    return {
      credentials: {}
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("retrieveToken", this.credentials).then(response => {
        this.$router.push({ name: "Dashboard" });
      });
    }
  }
};
</script>
