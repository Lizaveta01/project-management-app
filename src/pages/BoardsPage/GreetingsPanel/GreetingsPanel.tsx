import {
  GreetingImageBlock,
  GreetingMainText,
  GreetingsPanelStyled,
  GreetingSubText,
  GreetingTextBlock,
} from './GreetingsPanel.components';
import imageHand from '../../../assets/img/boards_page/greetings_hand.png';

import { store } from '../../../store/store';
import { IBoard } from '../../../models/IBoard';
const l = store.getState().language;

const GreetingsPanel = ({ userName, boards }: { userName: string; boards: IBoard[] }) => {
  return (
    <GreetingsPanelStyled>
      <GreetingTextBlock>
        <GreetingMainText>
          {l.Hello} <span>{userName}!</span>
        </GreetingMainText>
        <GreetingSubText>
          {l['You have']} {getBoardsWord(boards.length)} {l['To do']}.
          {!!boards.length && l['Keep up the good work!']}
        </GreetingSubText>
      </GreetingTextBlock>
      <GreetingImageBlock>
        <img src={imageHand} alt="writing hand" />
      </GreetingImageBlock>
    </GreetingsPanelStyled>
  );
};

export default GreetingsPanel;

function getBoardsWord(number: number) {
  switch (number) {
    case 0:
      return l['Boards (0)'];
    case number === 1 || (number % 10 === 1 && number % 100 !== 11) ? number : true:
      return number + l['Boards (1)'];
    case (number > 1 && number < 5) ||
    (number % 10 > 1 && number % 10 < 5 && (number % 100 < 11 || number % 100 > 20))
      ? number
      : true:
      return number + l['Boards (2-4)'];
    default:
      return number + l['Boards (5+)'];
  }
}
