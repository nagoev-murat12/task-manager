<template>
  <div>
    <span>{{ task.title }}</span>
    <button @click="deleteTask(task.id)">Удалить</button>
    <button @click="editTask">Редактировать</button>

    <div v-if="showEditModal">
      <div class="modal">
        <h2>Edit Task</h2>
        <form @submit.prevent="saveTask">
          <input v-model="editedTask.title" type="text" placeholder="Task title" />
          <button type="submit">Сохранить</button>
        </form>
      </div>
      <div class="modal-overlay" @click="cancelEdit"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      showEditModal: false,
      editedTask: { ...this.task },
    };
  },
  methods: {
    deleteTask(taskId) {
      this.$emit('delete', taskId);
    },
    editTask() {
      this.showEditModal = true;
    },
    saveTask() {
      this.$emit('update', this.editedTask);
      this.showEditModal = false;
    },
    cancelEdit() {
      this.showEditModal = false;
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 9999;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
</style>
