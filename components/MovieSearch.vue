<script lang="ts" setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
  const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=5eec9741&s=${query.value}`)
  movies.value = Search
}
search();
</script>

<template>
<div>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
    <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
      <img :src="movie.Poster" :alt="movie.Title">
      <div>
        Movie: {{ movie.Title }}
      </div>
    </NuxtLink>
    </li>
  </ul>
  </div>
</template>

<style scoped></style>
