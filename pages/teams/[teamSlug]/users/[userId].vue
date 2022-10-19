<script setup>
const route = useRoute();
const message = computed(
  () =>
    `My team is ${route.params.teamSlug} and my username is ${route.params.userId}`
);
</script>

<template>
  <div>
    <h1>Team: {{ $route.params.teamSlug }}</h1>
    <h1>User: {{ $route.params.userId }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
