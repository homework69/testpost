<template>
  <div>
    <Posts :posts="posts" @delPosts="delPosts" @edit="edit" />
    <Modal 
    v-show="isModalOpen"
      :isModalOpen="isModalOpen"
      @close="isModalOpen = false"
      @addPosts="addPosts"
      :editPost="editPost"
      :currentPost="currentPost"
      @changePost="changePost"
    />

    <button class="add" @click="(isModalOpen = true), (editPost = false)">
      <img src="../assets/img/more.svg" alt="" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Posts from '../components/Postss/Posts.vue';
import Modal from '../components/Modal/Modal.vue';
import { ref, watch, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Post {
  id: string;
  title: string;
  text: string;
}
const posts = ref<Post[]>([
  { id: uuidv4(), title: 'vue', text: 'lorem' },
  { id: uuidv4(), title: 'js', text: 'lorem' },
  { id: uuidv4(), title: 'html', text: 'lorem' },
]);

const localPosts = () => {
  localStorage.posts = JSON.stringify(posts.value);
};

watch(
  posts,
  () => {
    localStorage.posts = JSON.stringify(posts.value);
  },
  { deep: true }
);

const getPosts = () => {
  let localePost = localStorage.posts;
  if (localePost) {
    posts.value = JSON.parse(localePost);
  }
};

onMounted(() => {
  getPosts();
  localPosts();
});

const delPosts = (id: string) => {
  let index = posts.value.findIndex((post) => post.id == id);
  posts.value.splice(index, 1);
};

const isModalOpen = ref<boolean>(false);
const editPost = ref<boolean>(false);
const currentPost = ref<Post>({ id: '', title: '', text: '' });

const addPosts = (post: Post) => {
  posts.value.push(post);
};
const edit = (id: string) => {
  isModalOpen.value = editPost.value = true;
  let current = posts.value.find((post) => post.id == id);
  if (current !== undefined) {
    currentPost.value = current
  }
};
const changePost = (newPost: Post) => {
  let index = posts.value.findIndex((post) => post.id == newPost.id);
  if (index !== -1) {
    posts.value[index] = newPost;
  }
};
</script>

<style scoped></style>
