<script setup>
const route = useRoute()
// For testing server-side error:
// `https://httpbin.org/status/500`
// `https://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`
const { data } = useFetch(`https://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`, {
  pick: ["Plot", "Title"],
  key: `/movies/${route.params.id}`,
  onResponse({request, response}) {
    if (response._data.Error === "Incorrect IMDb ID.") {
      showError({statusCode: 404, statusMessage: "Incorrect ID. Not found"});
    }
  },
  onResponseError() {
    showError({statusCode: 500, statusMessage: "Sorry. Looks like something went wrong on our server."});
  }
});

console.log(data)

</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
