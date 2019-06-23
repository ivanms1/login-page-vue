<template>
  <div class="profile-page">
    <h1>Edit Profile</h1>
    <edit-profile-form />
    <image-gallery :images="images" />
  </div>
</template>

<script>
import axios from 'axios';

import EditProfileForm from "./EditProfileForm.vue";
import ImageGallery from "./ImageGallery.vue";

export default {
  components: {
    EditProfileForm,
    ImageGallery
  },
  data() {
    return {
      images: null
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => {
        this.loading = false;
        this.images = res.data;
      })
  }
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

