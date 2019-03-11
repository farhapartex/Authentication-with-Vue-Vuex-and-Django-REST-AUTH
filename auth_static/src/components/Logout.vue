<template>
  <div></div>
</template>

<script>
export default {
  name: "LogoutComponent",
  mounted() {
    this.$store.dispatch("destroyToken").then(response => {
      this.$router.push({ name: "Login" });
    });
  }
};
</script>
