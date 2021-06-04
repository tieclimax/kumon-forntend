<template>
  <div class="container">
    <!-- <h1>Photos</h1> -->
    <div class="photos">
      <!-- <nuxt-link
        v-for="data in datas" :to="{ path: `/editdata/${data.id}` }" :key="data.id"
      > -->
      <b-button
        v-for="data in datas"
        :to="{ path: `/editdata/${data.id}` }"
        :key="data.id"
        >ดูรายละเอียด</b-button
      >
      <!-- </nuxt-link> -->
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const datas = await $axios.$get("https://picsum.photos/v2/list?limit=12");
    // const datas = await $axios.$get("http://localhost:3001/dash/std");
    console.log(datas);
    return { datas };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
