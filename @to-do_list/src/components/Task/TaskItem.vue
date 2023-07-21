<script setup lang="ts">
import markAsFinished from '../../functions/markAsFinished';
import type { ITask } from '../../interfaces/ITask';
import ModalDeleteTask from '../ModalDeleteTask/ModalDeleteTask.vue';
import ModalUpdateDescription from '../ModalUpdateDescription/ModalUpdateDescription.vue';
import { ref } from 'vue';

const props = defineProps({
  task: {
    type: Object as () => ITask,
    required: true,
  },
  tasks: {
    type: Array<ITask>,
    required: true,
    default: [],
  },
});

const isInProcess = ref(false);

async function handleMarkAsFinished() {
  isInProcess.value = true;
  await markAsFinished(props.task, props.tasks);
  isInProcess.value = false;
}
</script>

<template>
  <div class="container">
    <label class="custom-checkbox" @click.prevent="handleMarkAsFinished">
      <template v-if="!isInProcess">
        <input
          type="checkbox"
          :checked="props.task.done"
          :id="props.task.id?.toString()"
        />
        <span class="checkmark"></span>
      </template>
      <template v-else>
        <q-spinner color="white" size="1.5rem" :thickness="2" />
      </template>
      <span class="description">{{ props.task.description }}</span>
    </label>

    <div class="iconsContainer">
      <ModalUpdateDescription
        :task="props.task"
        :tasks="props.tasks"
      ></ModalUpdateDescription>

      <ModalDeleteTask
        :task="props.task"
        :tasks="props.tasks"
      ></ModalDeleteTask>
    </div>
  </div>
</template>

<style scoped src="./styles.css"></style>
