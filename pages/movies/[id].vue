<script setup>
const route = useRoute()
// For testing server-side error:
// `https://httpbin.org/status/500`
// `https://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`
const { data } = await useFetch(`https://www.omdbapi.com/?apikey=5eec9741&i=${route.params.id}`, {
  pick: ["Plot", "Title", "Poster"],
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

useHead({
  title: data.value.Title,
  meta: [
    {name: "description", content: data.value.Plot},
    {property: "og:description", content: data.value.Plot},
    {property: "og:image", content: data.value.Poster},
    {name: "twitter:card", content: `summary_large_image`}
  ]
})
</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
