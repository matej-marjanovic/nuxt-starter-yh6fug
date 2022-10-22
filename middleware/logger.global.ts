export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Global logger")
    console.log(to, from)
})
