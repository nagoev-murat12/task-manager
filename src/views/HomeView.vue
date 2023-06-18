<template>
  <div>
    <h1>Таск-менеджер</h1>
    <button @click="goToTasksPage">Перейти</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToTasksPage() {
      this.$router.push('/task');
    },
  },
};
</script>