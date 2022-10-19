<script lang="ts" setup>
const query = ref("");
const movies = ref([]);
async function search() {
  const {Search} = await $fetch(`http://www.omdbapi.com/?apikey=5eec9741&s=${query.value}`)
  movies.value = Search
}
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <div v-for="movie in movies" :key="movie.imdbID">
    Movie: {{ movie.Title }}
  </div>
</template>

<style scoped></style>
