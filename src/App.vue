<template>
  <div id="app">
    <nav>
      <nav-bar></nav-bar>
    </nav>
    <main>
      <main-container></main-container>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar";
import mainContainer from "@/components/main-container";

export default {
  name: "app",
  components: {
    "nav-bar": navBar,
    "main-container": mainContainer,
  },
};
</script>

<style lang="scss">
$topColor: #dec9e9;
$mainColor: #a06cd5;
$bottomColor: #6247aa;

body {
  min-height: 100vh;
  background: linear-gradient(-185deg, $topColor, $mainColor, $bottomColor);
}
@media screen AND (min-width: 1201px) {
  #app {
    display: flex;
  }
  nav {
    width: 25%;
  }
  main {
    width: 75%;
  }
}
</style>
