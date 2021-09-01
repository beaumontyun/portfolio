<template>
  <div class="home">
    <HelloWorld class="bg-transparent" msg="Hello, I am Beaumont"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  background-size: 300px 350px;
  background-repeat: no-repeat;
  background-position: right top;
  background-image: url('~@/assets/naeads.png')
}
</style>