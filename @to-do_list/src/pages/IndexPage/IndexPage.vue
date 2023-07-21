<script setup lang="ts">
import Header from '../../components/Header/HeaderTitle.vue';
import AddNewTask from '../../components/AddNewTask/AddNewTask.vue';
import Task from '../../components/Task/TaskItem.vue';
import { reactive, onMounted } from 'vue';
import getTasks from '../../functions/getTasks';
import { ITask } from '../../interfaces/ITask';
import { ref } from 'vue';

const tasks: ITask[] = reactive([]);

const isLoadingPage = ref(true);

onMounted(async () => {
  await getTasks(tasks);
  isLoadingPage.value = false;
});
</script>

<template>
  <div class="pageContainer">
    <Header></Header>

    <main>
      <div class="itemsContainer">
        <AddNewTask :tasks="tasks"></AddNewTask>

        <template v-if="!isLoadingPage">
          <Task
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            :tasks="tasks"
          ></Task>
        </template>
        <template v-else>
          <q-spinner-hourglass color="white" size="5rem" class="spinner" />
        </template>
      </div>
    </main>
  </div>
</template>

<style scoped src="./styles.css"></style>
