import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

export default async function deleteTask(task: ITask, tasks: ITask[]) {
  try {
    await api.delete(`/api/tasks/${task.id}`);
    const indexTask = tasks.findIndex(item => item.id === task.id);
    if (indexTask >= 0) tasks.splice(indexTask, 1);
  } catch (error) {
    console.error('Erro ao deletar tarefa: ', error);
  }
}
