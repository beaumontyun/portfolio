<template>
  <div class="container md:w-8/12 md:mr-80 dark:bg-black">
    <p class="font-bold md:text-5xl dark:text-white">{{ msg }}</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">I make websites with laravel and vueJS</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">I am working on <a href="https://github.com/beaumontyun/vue-mysitio" class="text-blue-450 dark:text-red-500">mysitio</a>, a home decor social media / secondhand furniture store</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">I have a map-based social media prototype-app called <a href="https://gitlab.com/Tarey/project3" class="text-blue-450 dark:text-red-500">mapper</a>, you can share funny icons & gifs to your friend on the map</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">In my downtime, I am creating <a href="https://github.com/beaumontyun/timing" class="text-blue-450 dark:text-red-500">timing</a>, a fun stopwatch app to track my daily routines</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">On the side, I am a qualified solicitor in England and Wales, sometimes I speak English, Cantonese, Mandarin and Spanish together uncontrollably</p>
    <br>
    <p class="text-xl md:text-4xl dark:text-white">Come <a href="https://calendly.com/b-yun/say-hi-to-beaumont" class="text-blue-450 dark:text-red-500">say hi</a> whenever you are free!</p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
