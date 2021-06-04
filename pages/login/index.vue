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

            <b-button type="submit" variant="primary">Login</b-button>
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
      },
      show: true,
    };
  },
  methods: {
    async onSubmit() {
      try {
        let response = await this.$auth.loginWith("local", { data: this.form });
        console.log(response);
        this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
        this.$router.push("/login");
      }
    },
    // async onSubmit() {

    //   await this.$auth.loginWith("local", { data: this.form });
    // },
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

