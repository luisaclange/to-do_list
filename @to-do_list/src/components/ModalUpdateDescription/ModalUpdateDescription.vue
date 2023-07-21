<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import updateDescription from 'src/functions/updateDescription';
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

const newDescription = ref(props.task['description']);

async function handleOpenOrCloseModal() {
  isVisible.value = !isVisible.value;
}

async function handleUpdateDescription() {
  isInProcess.value = true;
  await updateDescription(newDescription.value, props.task, props.tasks);
  isInProcess.value = false;
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <a @click.prevent="handleOpenOrCloseModal">
    <img src="../../assets/pen_icon.svg" />
  </a>
  <q-dialog v-model="isVisible" :mask-closable="true" close-on-esc>
    <q-card
      class="contentModal"
      :bordered="false"
      role="dialog"
      aria-modal="true"
    >
      <q-card-section>
        <h2>Editar tarefa</h2>
      </q-card-section>

      <q-card-section>
        <form>
          <textarea v-model="newDescription"></textarea>
        </form>
      </q-card-section>

      <q-card-section>
        <div class="buttonsContainer">
          <button
            class="buttonNegative"
            @click.prevent="handleOpenOrCloseModal"
          >
            Cancelar
          </button>
          <button
            class="buttonPositive"
            @click.prevent="handleUpdateDescription"
          >
            <template v-if="!isInProcess"> Confirmar </template>
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
