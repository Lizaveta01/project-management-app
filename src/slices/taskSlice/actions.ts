import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateCardData } from '../../models/IInputData';
import { createNewTask } from '../../service/tasks/createTask';
import { getColumnTasks } from '../../service/tasks/getColumnTasks';

export const ALL_TASKS_FETCHING = 'ALL_TASKS_FETCHING';

type Params = {
  idBoard: string;
  idColumn: string;
};

type Params2 = {
  idBoard: ICreateCardData;
  idColumn: string;
};
export const fetchAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async ({ idBoard, idColumn }: Params) => {
    // eslint-disable-next-line no-console
    console.log(idBoard, idColumn);
    return getColumnTasks(idBoard, idColumn);
  }
);
export const fetchNewTasks = createAsyncThunk(
  'tasks/createTask',
  async ({ idBoard, idColumn }: Params2) => {
    return createNewTask(idBoard, idColumn);
  }
);