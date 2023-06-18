<template>
  <div>
    <TaskView v-for="task in tasks" :key="task.id" :task="task" @delete="deleteTask" @update="updateTask" />
  </div>
</template>

<script>
import TaskView from "../components/TaskView.vue"
export default {
   components: {
TaskView
   },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
    },
    updateTask(updatedTask) {
      this.$store.dispatch('updateTask', updatedTask);
    },
  },
};
</script>
