import styled from 'styled-components';
import { store } from '../../../../store/store';
const { LIGHT_BACKGROUND, TASK_TEXT } = store.getState().application_theme;

export const TaskCardStyled = styled.div`
  height: 155px;
  width: 300px;
  padding: 31px 33px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${LIGHT_BACKGROUND};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: ${TASK_TEXT};
  position: relative;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
`;
export const TaskCardTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
export const TaskCardDescription = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;