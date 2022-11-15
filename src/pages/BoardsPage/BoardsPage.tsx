import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.components';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewBoardButton from './NewBoardButton/NewBoardButton';
import { userName, boards } from '../../temporalStates/temporalStates';

const BoardsPage = () => {
  const boardsList = boards.map((board) => (
    <BoardSmallCard title={board.title} description={board.description} key={board.id} />
  ));
  return (
    <Wrapper>
      <GreetingsPanel userName={userName} boards={boards} />
      <BoardsPanelWrapper>
        <NewBoardButton></NewBoardButton>
        <BoardsWrapper>{boardsList}</BoardsWrapper>
      </BoardsPanelWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
