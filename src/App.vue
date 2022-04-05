<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Drawer from "./layout/Drawer.vue";
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <Header></Header>
    <Drawer></Drawer>
    <Footer></Footer>
  </div>
</template>
