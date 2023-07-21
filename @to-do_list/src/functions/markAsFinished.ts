import { AxiosError } from 'axios';
import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

export default async function markAsFinished(task: ITask, tasks: ITask[]) {
  try {
    const aux = await api.put(`/api/tasks/markAsDone/${task.id}`);
    const indexTask = tasks.findIndex(item => item.id === task.id);
    if (indexTask >= 0) tasks[indexTask].done = aux.data.done;
  } catch (error) {
    if (error instanceof AxiosError)
      alert(`Erro ao marcar tarefa como feita: ${error?.response?.data?.message}`)
  }
}
