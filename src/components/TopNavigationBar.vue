<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">AI ToolBox</router-link>
      <button
        class="navbar-toggler nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/featured">Featured</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/my-favorites"
              >My Favorites</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/community">Community</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/submit-tool">Submit Tool</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sign-in">Sign In</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "NavBar",
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.navbar {
    /* display: flex;
    flex-direction: column; */
    color: #FFFFFF;

    .container {
      width: 32%;
    }

    .navbar-brand {
      position: relative;
      bottom: 1px;
    }

    .navbar-nav {
      margin: auto;
    }
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: #838383 !important;
}
</style>
