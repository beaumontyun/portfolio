<template>
  <div class="container md:w-8/12 mb-20 md:mr-80 dark:bg-black">
    <p class="font-semibold md:text-4xl dark:text-white">blog</p>
    <br>
    <div v-if="blogs.length">
      <div v-for="blog in blogs" :key="blog.id" class="blog">
        <router-link
          :to="{ name: 'blog', params: { id: blog.id } }"
          class="text-xl md:text-4xl dark:text-white"
        >
          <h2>{{ blog.title }}</h2>
          <br>
        </router-link>
      </div>
    </div>
    <div v-else>I am loading stuff or the server is taking a snooze... plz come back after 6am GMT</div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    fetch("https://beaumont-awesome-blog.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
h2:hover {
  color: #2194e0;
}
</style>