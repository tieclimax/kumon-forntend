<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">User Logout</h1>

      <b-card class="mt-3" header="Form Data Result"> </b-card>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$auth.logout();
  },
};
</script>


