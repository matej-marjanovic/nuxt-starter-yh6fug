<script setup>
const route = useRoute()
const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(`http://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`)
}, {
  pick: ["Plot", "Title"],
})
console.log(data)

</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
