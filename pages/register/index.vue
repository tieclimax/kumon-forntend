<template>
  <div class="container">
    <div>
      <b-card class="mt-3">
        <div>
          <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Username"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                placeholder="Enter Username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="text"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Confirm Password"
              label-for="input-2"
            >
              <b-form-input
                id="input-3"
                v-model="form.confirmpassword"
                type="text"
                placeholder="Enter Confirm Password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Firstname tha"
              label-for="firstname_th"
              description=""
            >
              <b-form-input
                id="firstname_th"
                v-model="form.firstname_th"
                type="text"
                placeholder="Enter firstname thai"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Lastname thai"
              label-for="lastname_th"
              description=""
            >
              <b-form-input
                id="lastname_th"
                v-model="form.lastname_th"
                type="text"
                placeholder="Enter lastname thai"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmpassword: "",
        firstname_th: "",
        lastname_th: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit({ $axios }) {
      // event.preventDefault();
      console.log(JSON.stringify(this.form));
      // alert(JSON.stringify(this.form));
      // const response = await $axios.$post(
      //   "http://localhost:3001/apis/login"
      // );
      await fetch("http://localhost:3001/apis/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include",
        body: JSON.stringify({
          username: this.form.username,
          password: this.form.password,
          confirmpassword: this.form.confirmpassword,
          firstname_th: this.form.firstname_th,
          lastname_th: this.form.lastname_th,
        }),
      });
      await this.$router.push("/login");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        console.log("reset success");
        this.show = true;
      });
    },
  },
};
</script>

