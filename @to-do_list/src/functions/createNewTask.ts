import { AxiosError } from 'axios';
import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

export default async function createNewTask(newTask: string, tasks: ITask[]) {
  try {
    const aux = await api.post('/api/tasks', {
      description: newTask,
    })
    tasks.unshift(aux.data);
  } catch (error) {
    if (error instanceof AxiosError)
      alert(`Erro ao criar tarefa: ${error?.response?.data?.message}`)
  }
}
