import { AxiosError } from 'axios';
import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

async function getTasks(tasks: ITask[]) {
  try {
    const aux = await api.get('/tasks');
    aux.data
      .filter((item: ITask) => !item.deleted_at)
      .forEach((task: ITask) => {
        tasks.push(task);
      });
  } catch (error) {
    if (error instanceof AxiosError)
      alert(`Erro ao buscar tarefas: ${error?.response?.data?.message}`)
  }
}

export default getTasks;
