<template>
  <div class="container md:w-8/12 mb-20 md:mr-80 dark:bg-black">
    <div v-if="blog">
      <p class="font-semibold md:text-4xl dark:text-white">{{ blog.title }}</p>
      <p>{{blog.date}}</p>
      <br>
      <p>{{blog.image}}</p>
      <p>{{blog.body}}</p>
    </div>
    <div v-else>
      <p>I am loading stuff or the server is taking a snooze... plz come back after 6am GMT</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "Blog",
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    fetch("https://beaumont-awesome-blog.herokuapp.com/blogs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.blog = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>