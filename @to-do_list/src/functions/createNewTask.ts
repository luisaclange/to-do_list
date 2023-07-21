import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

export default async function createNewTask(newTask: string, tasks: ITask[]) {
  try {
    const aux = await api.post('/api/tasks', {
      description: newTask,
    })
    tasks.unshift(aux.data);
  } catch (error) {
    console.error('Erro ao criar componente: ', error)
  }
}
