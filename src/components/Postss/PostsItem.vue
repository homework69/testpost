<template>
 <div class="posts__item">
        <h2 class="posts__item-title">{{ post.title }}</h2>
        <p class="posts__item-text">{{ post.text }}</p>
         <RouterLink :to="`/post/${post.id}`">Подробнее</RouterLink>
         <div class="posts__item-btns">
            <button class="posts__item-btn edit" @click="editPost(post.id)">Редактировать</button>
            <button class="posts__item-btn del" @click="deletePost(post.id)">Удалить</button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Post {
  id: string;
  title: string;
  text: string;
}
defineProps<{ post: Post }>();
const emit = defineEmits();

const editPost = (postId: string) => {
    emit('edit', postId);
}

const deletePost = (postId: string) => {
    emit('delPosts', postId);
}
</script>

<style scoped></style>
