<template>
  <div class="w-50 mx-auto mt-5">
    <div class="card">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        <h5 class="card-title">This is Dashboard Title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link class="btn btn-primary" to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

export default {
  name: "DashboardComponent",
  methods: {}
};
</script>

