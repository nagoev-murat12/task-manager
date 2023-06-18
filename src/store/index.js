import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
    },
    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    },
  },
  getters: {
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id);
    },
  },
  plugins: [vuexLocal.plugin]
});

export default store;
