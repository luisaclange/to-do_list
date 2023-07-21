import api from '../helpers/api';
import type { ITask } from '../interfaces/ITask';

async function getTasks(tasks: ITask[]) {
  try {
    const aux = await api.get('/tasks');
    aux.data
      .filter((item: ITask) => !item.deleted_at)
      .sort((itemA: ITask, itemB: ITask) =>
        new Date(itemA.created_at).getTime() - new Date(itemB.created_at).getTime()
      )
      .forEach((task: ITask) => {
        tasks.push(task);
      });
  } catch (error) {
    console.log('Erro ao buscar items: ', error)
  }
}

export default getTasks;
