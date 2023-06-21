<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <button class="like-button" @click="incrementCount">
        <i class="fa fa-thumbs-up"></i><span>&nbsp;{{ likeCount }}</span>
    </button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      likeCount: 0,
    };
  },
  methods: {
    incrementCount() {
      this.likeCount++;
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.like-button {
    float: right;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.like-button i {
    color: gray;
    margin-right: 5px;
}
</style>
