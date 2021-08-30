<template>
  <div class="container md:w-8/12 md:mr-80">
    <p class="font-bold md:text-5xl">{{ msg }}</p>
    <br>
    <p class="text-xl md:text-4xl">I make websites with laravel and vueJS</p>
    <br>
    <p class="text-xl md:text-4xl">I am working on <a href="https://github.com/beaumontyun/vue-mysitio" class="text-blue-450">mysitio</a>, a home decor social media / secondhand furniture store</p>
    <br>
    <p class="text-xl md:text-4xl">I have a map-based social media prototype-app called <a href="https://gitlab.com/Tarey/project3" class="text-blue-450">mapper</a>, you can share funny icons & gifs to your friend on the map</p>
    <br>
    <p class="text-xl md:text-4xl">In my downtime, I am creating <a href="https://github.com/beaumontyun/timing" class="text-blue-450">timing</a>, a fun stopwatch app to track my daily routines</p>
    <br>
    <p class="text-xl md:text-4xl">On the side, I am a qualified solicitor in England and Wales, sometimes I speak English, Cantonese, Mandarin and Spanish together uncontrollably</p>
    <br>
    <p class="text-xl md:text-4xl">Come <a href="https://calendly.com/b-yun/say-hi-to-beaumont" class="text-blue-450">say hi</a> whenever you are free!</p>
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
