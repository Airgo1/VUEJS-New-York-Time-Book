<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand href="#/Home">NEW YORK TIMES</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/">Home</b-nav-item>
        <b-nav-item href="#/cart">Cart</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav {
  background-color: white;
  height: 100%;
  align-content: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.navbar {
  align-content: center;
}
IMG.Logo {
  height :150px; 
}
</style>
