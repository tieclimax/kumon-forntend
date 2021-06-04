<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">User Information</h1>

      <b-card class="mt-3" header="Form Data Result">
        <p>ชื่อ สกุล : {{ $auth.user.insname_th }}</p>
        <p>Fullname : {{ $auth.user.insname_en }}</p>
        <p>username : {{ $auth.user.username }}</p>
        <p>บทบาท : {{ $auth.user.statusname }}</p>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      user: this.$auth.user,
    };
  },
};
</script>


