<template>
 <main class="main">
    <section class="posts">
      <div class="container">
        <div class="posts__list">
          <PostsItem  
          v-for="post in posts" 
          :key="post.id"
          :post="post"
           @delPosts="$emit('delPosts', post.id)"
          @edit="$emit('edit', post.id)"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import PostsItem from './PostsItem.vue'
defineProps(['posts'])
</script>

<style scoped>

</style>