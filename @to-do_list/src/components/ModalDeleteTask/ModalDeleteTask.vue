<script setup lang="ts">
import deleteTask from 'src/functions/deleteTask';
import { ITask } from 'src/interfaces/ITask';
import { ref } from 'vue';
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  tasks: {
    type: Array<ITask>,
    required: true,
  },
});

const isVisible = ref(false);
const isInProcess = ref(false);

async function handleDeleteTask() {
  isInProcess.value = true;
  await deleteTask(props.task, props.tasks);
  isInProcess.value = false;
  isVisible.value = !isVisible.value;
}

function handleOpenCloseModal() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <a @click.prevent="handleOpenCloseModal">
    <img src="../../assets/trash_icon.svg" />
  </a>
  <q-dialog v-model="isVisible">
    <q-card
      class="contentModal"
      :bordered="false"
      role="dialog"
      aria-modal="true"
    >
      <q-card-section>
        <h2>Deletar tarefa?</h2>
      </q-card-section>

      <q-card-section>
        <p>Tem certeza de que deseja excluir a tarefa?</p>
      </q-card-section>

      <q-card-section>
        <div class="buttonsContainer">
          <button class="buttonNegative" @click.prevent="handleOpenCloseModal">
            Não
          </button>
          <button class="buttonPositive" @click="handleDeleteTask">
            <template v-if="!isInProcess"> Sim </template>
            <template v-else>
              <q-spinner color="white" size="1.5rem" :thickness="2" />
            </template>
          </button>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped src="./styles.css"></style>
