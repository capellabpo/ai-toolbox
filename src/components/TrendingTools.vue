<!-- eslint-disable prettier/prettier -->
<template>
  <div class="carousel">
    <div
      class="card-carousel"
      ref="carousel"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mousemove="handleDrag"
      @touchmove="handleDrag"
      @mouseup="endDrag"
      @touchend="endDrag"
    >
      <div
        class="card-carousel-inner"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div class="card-row">
          <div
            v-for="(card) in visibleCards1"
            :key="card.id"
            class="card"
          >
            <!-- Card Content -->
            <div class="card-body">
              <tool-star-rating></tool-star-rating>
              <h5 class="card-title">{{ card.title }}</h5>
              <tool-rank-count-display></tool-rank-count-display>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <div class="card-row mt-4">
          <div
            v-for="(card) in visibleCards2"
            :key="card.id"
            class="card"
          >
            <!-- Card Content -->
            <div class="card-body">
              <tool-star-rating></tool-star-rating>
              <h5 class="card-title">{{ card.title }}</h5>
              <tool-rank-count-display></tool-rank-count-display>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/no-dupe-keys -->
<script>
import ToolRankCountDisplay from "./ToolRankCountDisplay.vue";
import ToolStarRating from "./ToolStarRating.vue";

export default {
  components: {
    ToolRankCountDisplay,
    ToolStarRating,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Card 1",
          description: "This is the description for card 1",
        },
        {
          id: 2,
          title: "Card 2",
          description: "This is the description for card 2",
        },
        {
          id: 3,
          title: "Card 3",
          description: "This is the description for card 3",
        },
        {
          id: 4,
          title: "Card 4",
          description: "This is the description for card 4",
        },
        {
          id: 5,
          title: "Card 5",
          description: "This is the description for card 5",
        },
        {
          id: 6,
          title: "Card 6",
          description: "This is the description for card 6",
        },
        {
          id: 7,
          title: "Card 7",
          description: "This is the description for card 7",
        },
        {
          id: 8,
          title: "Card 8",
          description: "This is the description for card 8",
        },
        {
          id: 9,
          title: "Card 9",
          description: "This is the description for card 9",
        },
        {
          id: 10,
          title: "Card 10",
          description: "This is the description for card 10",
        }
        // Add more cards as needed
      ],
      visibleCards1: [],
      visibleCards2: [],
      numCards1: 5, // Specify the number of cards to display for the upper set
      numCards2: 5, // Specify the number of cards to display for the lower set
      translateX: 0,
      startDragX: 0,
      isDragging: false,
    };
  },
  computed: {
    // Compute the visible cards for the upper set based on the specified number of cards
    visibleCards1() {
      return this.cards.slice(0, this.numCards1);
    },
    // Compute the visible cards for the lower set based on the specified number of cards
    visibleCards2() {
      return this.cards.slice(this.numCards1, this.numCards1 + this.numCards2);
    },
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startDragX = event.pageX || event.touches[0].pageX;
    },
    handleDrag(event) {
      if (this.isDragging) {
        const currentX = event.pageX || event.touches[0].pageX;
        this.translateX += currentX - this.startDragX;
        this.startDragX = currentX;
      }
    },
    endDrag() {
      this.isDragging = false;
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
}

.card-carousel-inner {
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
}

.card-row {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  height: 30vh;
  flex: 0 0 300px;
  /* Adjust this value based on your card width */
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.card-title {
  font-size: 1.5rem;
}
</style>
