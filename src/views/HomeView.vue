<!-- eslint-disable prettier/prettier -->
<template>
  <!-- Header Section -->
  <div class="container-fluid bg-grey" id="header-section">
    <section>
      <div class="row">
        <div class="col-lg-8 offset-lg-2 section-contents">
          <h1 class="mb-3">AI ToolBox</h1>
          <p class="lead">Phasellus scelerisque elementum lorem, id hendrerit dolor dictum nec.</p>

          <!-- Search Bar -->
          <form>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>

  <!-- Featured and Trending Tools section -->
  <div class="container-fluid mt-4" id="featured-trending-section">
    <div class="row">
      <!-- Left Column -->
      <div class="col-md-4">
        <!-- Featured Card -->
        <h6>Featured Tool</h6>
        <div class="card">
          <img class="card-img-top" alt="Featured Image" />
          <div class="card-body">
            <h5 class="card-title">Featured Card Title</h5>
            <p class="card-text">Featured Card Description</p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-8">
        <div class="row">
          <!-- Left Column Cards -->
          <h6>Trending Tools</h6>
          <div class="col-md-4 mb-4 ml-4" v-for="card in cards" :key="card.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr style="margin: auto 10rem; opacity: .1;" />

  <!-- AI Tools filter and cards -->
  <div class="container-fluid mt-4" id="filter-and-tools-section">
    <div class="row">
      <!-- Left Column -->
      <div class="col-md-3">
        <!-- Expandable Checkbox Filters -->
        <div class="card mb-4">
          <div class="card-header">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#filterCollapse"
              aria-expanded="true"
              aria-controls="filterCollapse"
            >
              Sort By
            </button>
          </div>
          <div id="filterCollapse" class="collapse show">
            <div class="card-body">
              <!-- Placeholder for checkbox filters -->
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 1
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 2
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 3
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#filterCollapse"
              aria-expanded="true"
              aria-controls="filterCollapse"
            >
              Pricing
            </button>
          </div>
          <div id="filterCollapse" class="collapse show">
            <div class="card-body">
              <!-- Placeholder for checkbox filters -->
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 1
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 2
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 3
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#filterCollapse"
              aria-expanded="true"
              aria-controls="filterCollapse"
            >
              Categories
            </button>
          </div>
          <div id="filterCollapse" class="collapse show">
            <div class="card-body">
              <!-- Placeholder for checkbox filters -->
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 1
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 2
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" /> Filter 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-9">
        <div class="row">
          <!-- Right Column Cards -->
          <div class="col-md-4 mb-4" v-for="item in data" :key="item.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ item.tool_name }}</h5>
                <p class="card-text">{{ item.tool_description }}</p>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <ToolsPagination :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange" />
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    <h1>AI Tools</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.tool_name }}</li>
    </ul>
  </div> -->
</template>

<script>
import axios from "axios";
import ToolsPagination from "@/components/ToolsPagination.vue";

export default {
  components: {
    ToolsPagination,
  },
  data() {
    return {
      data: [],
      cards: [
        { id: 1, title: "Card 1", description: "Card 1 Description" },
        { id: 2, title: "Card 2", description: "Card 2 Description" },
        { id: 3, title: "Card 3", description: "Card 3 Description" },
        { id: 4, title: "Card 4", description: "Card 4 Description" },
        { id: 5, title: "Card 5", description: "Card 5 Description" },
        { id: 6, title: "Card 6", description: "Card 6 Description" },
        // Add more cards as needed
      ],
      currentPage: 1,
      totalPages: 10,
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      // Perform any necessary data fetching or updates based on the new page
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/ai_tools")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
#header-section {
  padding: 4rem auto 4rem auto;
  .row {
    padding: 6rem;
  }
  .section-contents {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    > form {
      width: -webkit-fill-available;
    }
  }
}
.bg-grey {
  background-color: #D9D9D9;
}

#featured-trending-section,
#filter-and-tools-section {
  padding: 2rem;
}
</style>
