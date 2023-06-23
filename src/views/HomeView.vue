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
            <div class="input-group mb-3 header-search-bar">
              <input type="text" class="form-control" v-model="searchKeyword" placeholder="" @keyup.enter="filterData" />
              <div class="input-group-append">
                <button class="btn btn-light" type="button" @click="filterData">Search</button>
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
        <!-- <div class="card">
          <img class="card-img-top" alt="Featured Image" />
          <div class="card-body">
            <h5 class="card-title">Featured Card Title</h5>
            <p class="card-text">Featured Card Description</p>
          </div>
        </div> -->
        <featured-tool></featured-tool>
      </div>

      <!-- Right Column -->
      <div class="col-md-8">
        <div class="row">
          <!-- Left Column Cards -->
          <h6>Trending Tools</h6>
          <trending-tools></trending-tools>
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
        <!-- Bootstrap card -->
        <div class="card mb-4">
          <!-- Card header with toggle button -->
          <div class="card-header" @click="toggleCardSortBy">
            <h5 class="mb-0">Sort By</h5>
          </div>

          <!-- Card body (content) with Vue conditional rendering -->
          <div class="card-body" v-if="isExpandedSortBy">
            <!-- Placeholder for checkbox filters -->
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Newest to Oldest
              </label>
            </div>
            <hr style="margin: 10px 1rem; opacity: .050;" />
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Top Rated
              </label>
            </div>
            <hr style="margin: 10px 1rem; opacity: .050;" />
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Most Favourites
              </label>
            </div>
          </div>
        </div>

        <!-- Bootstrap card -->
        <div class="card mb-4">
          <!-- Card header with toggle button -->
          <div class="card-header" @click="toggleCardPricing">
            <h5 class="mb-0">Pricing</h5>
          </div>

          <!-- Card body (content) with Vue conditional rendering -->
          <div class="card-body" v-if="isExpandedPricing">
            <!-- Placeholder for checkbox filters -->
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Free
              </label>
            </div>
            <hr style="margin: 10px 1rem; opacity: .050;" />
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Trial
              </label>
            </div>
            <hr style="margin: 10px 1rem; opacity: .050;" />
            <div class="form-group">
              <label class="checkbox">
                <input type="checkbox" /> Paid
              </label>
            </div>
          </div>
        </div>

        <!-- Bootstrap card -->
        <div class="card mb-4">
          <!-- Card header with toggle button -->
          <div class="card-header" @click="toggleCardCategory">
            <h5 class="mb-0">Categories</h5>
          </div>

          <!-- Card body (content) with Vue conditional rendering -->
          <div class="card-body" v-if="isExpandedCategory">
            <!-- Placeholder for checkbox filters -->
            <div class="category-container" v-for="category in categories" :key="category.ai_use_case_id">
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" v-model="selectedCategories" :value="category.ai_use_case_id" @change="filterData" />
                  {{ category.ai_use_case_category }}
                </label>
              </div>
              <hr style="margin: 10px 1rem; opacity: .050;" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-9 ai-tool-list-container">
        <div class="row">
          <!-- Right Column Cards -->
          <div class="col-md-4 mb-4 ai-tool-list" v-for="card in displayedCards" :key="card.tool_id">
            <div class="card">
              <div class="card-body">
                <product-like-count></product-like-count>
                <div class="upper-body" @click.prevent="handleCardClick(card.tool_id)" style="cursor: pointer;">
                  <h5 class="card-title">{{ card.tool_name }}</h5>
                </div>
                <product-rating></product-rating>
                <div class="lower-body" @click.prevent="handleCardClick(card.tool_id)" style="cursor: pointer;">
                  <p class="card-text">{{ card.tool_description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="filteredCards.length === 0 && searchKeyword">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h4>No Results Found</h4>
                  <p>Sorry, but we couldn't find any results matching your search criteria.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="btn btn-light" @click="previousPage" :disabled="currentPage === 1"
            style="border-radius: 5px 0px 0px 5px;">
              <i class="fa-solid fa-arrow-left-long"></i>&nbsp;Previous
            </button>
            <button class="btn btn-light page-numbers" v-for="page in totalPages" :key="page" @click="goToPage(page)"
              :class="{ active: currentPage === page }"
              style="border-radius: 0px;">
              {{ page }}
            </button>
            <button class="btn btn-light" @click="nextPage" :disabled="currentPage === totalPages"
            style="border-radius: 0px 5px 5px 0px;">
              Next&nbsp;<i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductRating from "@/components/ProductRating.vue";
import ProductLikeCount from "@/components/ProductLikeCount.vue";
import TrendingTools from "@/components/TrendingTools.vue";
import FeaturedTool from "@/components/FeaturedTool.vue";

export default {
  components: {
    ProductRating,
    ProductLikeCount,
    TrendingTools,
    FeaturedTool,
  },
  data() {
    return {
      cards: [],
      categories: [],
      selectedCategories: [],
      searchKeyword: "",
      isExpandedSortBy: false,
      isExpandedPricing: false,
      isExpandedCategory: false,
      currentPage: 1,
      itemsPerPage: 12,
    };
  },
  mounted() {
    this.fetchData();
    this.fetchCategories();
  },
  computed: {
    filteredCards() {
      const keyword = this.searchKeyword.toLowerCase();
      return this.cards.filter((card) => {
        const title = card.tool_name ? card.tool_name.toLowerCase() : "";
        const description = card.tool_description
          ? card.tool_description.toLowerCase()
          : "";
        const hasKeyword =
          title.includes(keyword) || description.includes(keyword);
        const hasCategory =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.every((category_filter) =>
            card.use_case_id.includes(category_filter)
          );
        return hasKeyword && hasCategory;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
    },
    displayedCards() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCards.slice(startIndex, endIndex);
    },
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/ai_tools")
        .then((response) => {
          this.cards = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    fetchCategories() {
      axios
        .get("http://localhost:3000/ai_use_case") // Replace with your server URL
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching use case", error);
        });
    },
    filterData() {
      this.currentPage = 1;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    handleCardClick(cardId) {
      this.$router.push({ name: "ToolDetails", params: { tool_id: cardId } });
    },
    toggleCardSortBy() {
      this.isExpandedSortBy = !this.isExpandedSortBy;
    },
    toggleCardPricing() {
      this.isExpandedPricing = !this.isExpandedPricing;
    },
    toggleCardCategory() {
      this.isExpandedCategory = !this.isExpandedCategory;
    },
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

    >form {
      width: -webkit-fill-available;
    }
  }

  .header-search-bar {
    .form-control {
      z-index: 0;
      padding: 12px;
      border-radius: 8px;
      background-color: transparent;
      border-color: transparent;
      color: inherit;
      border: 1px solid #adb5bd;
    }

    .btn {
      position: absolute;
      z-index: 1;
      top: 6px;
      width: 175px;
      right: 8px;
      border-radius: 8px;
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

.ai-tool-list-container {

  .pagination {
    display: flex;
    justify-content: center;

    .page-numbers {
      border-radius: none;
    }
  }

  .ai-tool-list {
    .card {
      height: 23vh;

      .card-body {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }

    .card-title {
      font-size: 1.5rem;
    }
  }
}
</style>
