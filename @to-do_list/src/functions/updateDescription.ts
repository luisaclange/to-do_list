import { AxiosError } from 'axios';
import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

export default async function updateDescription(newDescription: string, task: ITask, tasks: ITask[]) {
  try {
    const aux = await api.put(`/api/tasks/${task.id}`, {
      description: newDescription,
    });
    const indexTask = tasks.findIndex(item => item.id === task.id);
    if (indexTask >= 0) tasks[indexTask].description = aux.data.description;
  } catch (error) {
    if (error instanceof AxiosError)
      alert(`Erro ao atualizar a descrição da tarefa: ${error?.response?.data?.message}`)
  }
}
