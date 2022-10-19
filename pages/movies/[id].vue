<script setup>
const route = useRoute()
const { data } = useFetch(`http://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`, {
  pick: ["Plot", "Title"],
  key: `/movies/${route.params.id}`,
});

console.log(data)

</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
