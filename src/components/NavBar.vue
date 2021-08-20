<template>
<div>
  <b-navbar toggleable="sm" type="light" class="navbar" >
    <b-navbar-brand>
      <img src="@/assets/img/NewYorkTimes.svg" alt="NEW YORK TIMES">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#/cart">
          <b-icon icon="cart4" font-scale="2"></b-icon>
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
}
</script>

<style>
.navbar {
  align-content: center;
  vertical-align: center;
  background: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

}
</style>
