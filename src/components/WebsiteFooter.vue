<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- Left Column -->
        <div class="col-md-6">
          <h4>AI ToolBox</h4>
          <p>Design amazing digital experiences that create more happy in the world.</p>
        </div>

        <!-- Right Column -->
        <div class="col-md-6">
          <div class="social-icons">
            <a href="#" class="social-icon">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal Divider -->
    <hr />

    <!-- Copyright -->
    <div class="container text-center">
      <p>&copy; {{ currentYear }} AI ToolBox. All rights reserved.</p>
    </div>
  </footer>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
.footer {
    background-color: #D9D9D9;
    padding: 5rem 10rem 1rem 10rem;

    .text-center {
      color: #B3B3B3;
    }
}

.social-icons {
  text-align: right;
}

.social-icon {
  display: inline-block;
  margin-right: 10px;
  color: #555;
}

.social-icon:hover {
  color: #00acee;
}
</style>
