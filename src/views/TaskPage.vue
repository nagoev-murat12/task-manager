<template>
   <div>
      <task-list></task-list>
      <br>
      <add-task></add-task>
      <br>
      <router-link to="/" class="home-link">На главную</router-link>
   </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import AddTask from '../components/AddTask.vue'

export default {
   components: {
      TaskList,
      AddTask,
   }
}
</script>
<style>
.home-link {
   margin-bottom: 10px;
   display: inline-block;
   background-color: #3498db;
   color: white;
   padding: 5px 10px;
   text-decoration: none;
   border-radius: 4px;
}
</style>