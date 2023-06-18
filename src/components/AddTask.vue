<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" type="text" placeholder="Task title" />
    <button type="submit">Добавить задачу</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    submitForm() {
      const task = {
        id: Date.now(),
        title: this.title,
      };
      this.$store.dispatch('addTask', task);
      this.title = '';
    },
  },
};
</script>
