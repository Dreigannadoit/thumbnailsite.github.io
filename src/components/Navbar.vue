<script>
  import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="h-1/6 w-dvw flex justify-between items-center contain-x">
        <RouterLink class="w-1/3" to="/">
            <span class="text-light font-bold text-3xl">Logo</span>
        </RouterLink>

        <nav class="w-1/3 text-light flex gap-5 justify-center items-center">
            <RouterLink class="bg-dark p-3 rounded-l-lg" to="/none">Info</RouterLink>
            <RouterLink class="bg-dark p-3"  to="/none">Library</RouterLink>
            <RouterLink class="bg-dark p-3 rounded-r-lg"  to="/none">Pricing</RouterLink>
        </nav>

        <nav class="w-1/3 flex gap-5 justify-end items-center">
            <RouterLink class="bg-dark text-light p-3 rounded-lg" to="/none">Log In</RouterLink>
            <RouterLink class="bg-light p-3 rounded-lg"  to="/none">Sign Up</RouterLink>
        </nav>
    </div>
</template>


<style>

</style>