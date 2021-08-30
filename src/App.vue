<template>
  <div id="nav" class="container md:mr-60">
    <router-link to="/">me</router-link> <span class="font-bold">/ </span>
    <router-link to="/about">say hi</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Nanum Pen Script;
  font-size: x-large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2194e0;
}
</style>
