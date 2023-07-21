<script setup lang="ts">
import createNewTask from '../../functions/createNewTask';
import { ref } from 'vue';
import type { ITask } from '../../interfaces/ITask';

const props = defineProps({
  tasks: {
    type: Array<ITask>,
    default: [],
    required: true,
  },
});

const newTask = ref('');
const isInProcess = ref(false);

async function handleCreateNewTask() {
  isInProcess.value = true;
  await createNewTask(newTask.value, props.tasks);
  isInProcess.value = false;
  newTask.value = '';
}
</script>

<template>
  <form @submit.prevent="handleCreateNewTask" class="container">
    <input
      placeholder="Insira uma nova tarefa"
      id="newTask"
      v-model="newTask"
    />
    <button
      class="buttonAddNewTask"
      :type="'submit'"
      :disabled="!(newTask.length > 0)"
    >
      <template v-if="!isInProcess"> Adicionar </template>
      <template v-else
        ><q-spinner color="white" size="1.5rem" :thickness="2"
      /></template>
    </button>
  </form>
</template>

<style scoped src="./styles.css"></style>
