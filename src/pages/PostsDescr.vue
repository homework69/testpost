<template>
  <div class="postdescr" v-if="filterPost">
    <h2 class="postdescr__title">{{ filterPost!.title }}</h2>
    <h2 class="postdescr__text">{{ filterPost!.text }}</h2>
    <RouterLink to="/">назад</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
interface Post {
    id: string;
    title: string;
    text: string;
}
const allPosts = ref<Post[]>([]);
const filterPost = ref<Post | null>(null);
const router = useRoute();
const postId = ref<string>(Array.isArray(router.params.id) ? router.params.id[0] : router.params.id);




const getPosts = () => {
  let localPost = localStorage.posts;
  if (localPost) {
    allPosts.value = JSON.parse(localPost);
  }
};

const descrPost = () => {
  filterPost.value = allPosts.value.find((el: Post) => el.id === postId.value) || null;
};

onMounted(() => {
  getPosts();
  descrPost();
});

</script>

<style scoped>

</style>