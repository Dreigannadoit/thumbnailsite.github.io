<script>
import { thumbnailData } from '../thumbGal';

export default {
  name: 'LandingPage',
  data() {
    return {
      thumbnailData
    };
  }
};
</script>

<template>
    <!-- Hero -->
    <section class="h-full w-full relative flex justify-center items-center flex-col contain-x my-14">
        <div class="text-center">
            <h1 class="text-light font-bold text-5xl">Discover, Design, Deliver:</h1>
            <br>
            <h3 class="text-light font-light">Your Youtube Thumbnail Inspiration Hub</h3>
        </div>
        <br>
        <div>
            <img src="../assets/elements/Net.png" alt="Net Image">
        </div>
    </section>

    <!-- Thumbnail gallery -->
    <section class="min-h-full w-full relative bg-light rounded-[50px] contain-x flex flex-row py-14 my-24 gap-10">
        <div class="w-1/4 h-full bg-nuetral rounded-l-lg p-7">
            <!-- Side Bar - User chooses genre of video -->
            <nav>
                <h1 class="font-bold">Genre</h1>
                <ul>
                    <li>
                        <RouterLink to="/">Action</RouterLink></li>
                        <li><RouterLink to="/">Adventure</RouterLink></li>
                        <li><RouterLink to="/">Reaction Channel</RouterLink></li>
                        <li><RouterLink to="/">Comedy</RouterLink></li>
                        <li><RouterLink to="/">Drama</RouterLink></li>
                        <li><RouterLink to="/">Documentary</RouterLink></li>
                        <li><RouterLink to="/">Education</RouterLink></li>
                        <li><RouterLink to="/">Entertainment</RouterLink></li>
                        <li><RouterLink to="/">Gaming</RouterLink></li>
                        <li><RouterLink to="/">Health & Fitness</RouterLink></li>
                        <li><RouterLink to="/">How-to & Style</RouterLink></li>
                        <li><RouterLink to="/">Music</RouterLink></li>
                        <li><RouterLink to="/">News & Politics</RouterLink></li>
                        <li><RouterLink to="/">People & Blogs</RouterLink></li>
                        <li><RouterLink to="/">Pets & Animals</RouterLink></li>
                        <li><RouterLink to="/">Science & Technology</RouterLink></li>
                        <li><RouterLink to="/">Sports</RouterLink></li>
                        <li><RouterLink to="/">Travel & Events</RouterLink></li>
                        <li><RouterLink to="/">Vlogs</RouterLink></li>
                        <li><RouterLink to="/">ASMR</RouterLink></li>
                        <li><RouterLink to="/">Beauty & Fashion</RouterLink></li>
                        <li><RouterLink to="/">Cooking & Recipes</RouterLink></li>
                        <li><RouterLink to="/">DIY</RouterLink></li>
                        <li><RouterLink to="/">Family & Kids</RouterLink></li>
                        <li><RouterLink to="/">Horror</RouterLink></li>
                        <li><RouterLink to="/">Motivational</RouterLink></li>
                        <li><RouterLink to="/">Nature</RouterLink></li>
                        <li><RouterLink to="/">Paranormal</RouterLink></li>
                        <li><RouterLink to="/">Review</RouterLink></li>
                        <li><RouterLink to="/">Skits</RouterLink></li>
                        <li><RouterLink to="/">Unboxing</RouterLink></li>
                        <li><RouterLink to="/">Technology Reviews</RouterLink></li>
                        <li><RouterLink to="/">Travel Vlogs</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="w-3/4 h-full flex flex-row flex-wrap gap-5">
            <div
            class="w-[30%]"
            v-for="(thumbnail, index) in thumbnailData"
            :key="index"
            >
                <img 
                :src="thumbnail.thumbnail" 
                :alt="thumbnail.ogName"
                >

                <p class="text-dark text-base font-medium">Posted By {{ thumbnail.userName }}</p>
                <p class="text-nuetral text-sm font-medium">Original From {{ thumbnail.ogName }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Add your styles here */
</style>
