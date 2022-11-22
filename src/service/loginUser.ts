/* MODELS */
import { ILogInData } from '../models/IInputData';
import { IAuthorizedUser } from '../models/IUser';
/* STORE */
import { store } from '../store/store';
import { setWarningMessage } from '../slices/modalsSlice/modalsSlice';
import { setStatus } from '../slices/modalsSlice/modalsSlice';
import { authorizationSwitch } from '../slices/userSlice/userSlice';
/* UTILS */
import { setValueToCookie } from '../utils/cookie/setValueToCookie';
import { updateStateAndLocalData } from '../utils/updateData';

export const loginUser = async (data: ILogInData) => {
  const { dispatch } = store;
  const responce = await fetch('https://kanban-lizaveta01.koyeb.app/auth/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content: IAuthorizedUser = await responce.json();

  if (responce.status !== 200) {
    dispatch(setWarningMessage(`Error ${content.statusCode}: ${content.message}`));
    setTimeout(() => {
      dispatch(setWarningMessage(''));
    }, 5000);
  } else {
    setValueToCookie(content.token);
    updateStateAndLocalData(data);
  }
};
