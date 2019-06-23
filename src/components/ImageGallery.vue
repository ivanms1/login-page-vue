<template>
  <el-container class="image-gallery">
    <img class="image" v-for="image in images" :src="image.url" :alt="image.title" :key="image.id">
  </el-container>
</template>

<script>

export default {
  props: ["images"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.image {
  width: 300px;
}
</style>