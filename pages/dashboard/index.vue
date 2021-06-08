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

      <b-card class="mt-3" header="รายชื่อผู้ดูแลทั้งหมด">
        <li v-for="userData in userDatas" :key="userData.id">
          {{ userData.username }}
          {{ userData.insname_en }}
          {{ userData.insname_th }}
        </li>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  loading: false,
  data() {
    return {
      userDatas: "",
      user: this.$auth.user,
      search: "",
    };
  },

  async mounted() {
    const response = await fetch(`${process.env.BASE_URL}/getalluser`);

    const content = await response.json();
    this.userDatas = content.data;
    // this.users = content;
  },

  methods: {
    // async fetch() {
    //   this.stddatas = await fetch("http://localhost:3001/apis/getalluser")
    //     .then((res) => {
    //       console.log(res);
    //       res.json();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },

  // mounted() {
  //   axios
  //     .get("http://localhost:3001/apis/getalluser")
  //     .then((res) => {
  //       console.log(res.data);
  //       this.stddatas = res.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>


