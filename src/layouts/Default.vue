<template>
  <div>
    <nav-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
.container {
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>
