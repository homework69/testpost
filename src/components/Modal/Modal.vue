<template>
    <div class="modal" @click="closeModal">
    <div class="modal__block" @click.stop>
      <h2 class="modal__block-title">
        {{ editPost ? 'Изменить' : 'Добавить' }}
      </h2>
      <div class="modal__block-inputs">
        <label for="inp">
          <span>title</span>
          <input type="text" id="inp" v-model="title" />
        </label>
        <label for="area">
          <span>Content</span>
          <textarea id="area" v-model="text"></textarea>
        </label>
      </div>
      <div class="modal__block-btns">
        <button class="modal__block-btn del" @click="closeModal">Отмена</button>
        <button
          v-if="!editPost"
          class="modal__block-btn edit"
          @click="addPosts"
        >
          Добавить
        </button>
        <button v-else class="modal__block-btn edit" @click="changePost">
          Изменить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Post {
  id: string;
  title: string;
  text: string;
}

const postProps = defineProps<{ editPost: boolean; currentPost: Post }>();

const title = ref<string>('');
const text = ref<string>('');

const emit = defineEmits();

const closeModal = () =>  {
  emit('close');
  title.value = '';
  text.value = '';
};

const addPosts = () => {
  if (title.value !== '' && text.value !== '') {
    const post: Post = {
      id: uuidv4(),
      title: title.value,
      text: text.value,
    };
    emit('addPosts', post);
    closeModal();
  }
};
const changePost = () => {
  if (title.value !== '' && text.value !== '') {
    const post: Post = {
      id: postProps.currentPost.id,
      title: title.value,
      text: text.value,
    };
    emit('changePost', post);
    closeModal();
  }
};
</script>

<style scoped>

</style>