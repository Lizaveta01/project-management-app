/* STYLES */
import {
  LogInWrapper,
  LogInFrame,
  LogInCard,
  LogInTitleWrapper,
  LogInTitle,
  ChangeModalWrapper,
  ChangeModal,
  CancelWrapper,
  Cancel,
} from './LogIn.styled';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
/* ACTIONS */
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';

export const LogIn = () => {
  const dispatch = useAppDispatch();

  const { title, changeModalToSignIn, cancel } = useAppSelector((state) => {
    return {
      title: state.language.lang.loginModal.title,
      changeModalToSignIn: state.language.lang.loginModal.changeModalToSignUp,
      cancel: state.language.lang.cancel,
    };
  });
  return (
    <>
      <LogInWrapper>
        <LogInFrame>
          <LogInCard>
            <LogInTitleWrapper>
              <LogInTitle>{title}</LogInTitle>
            </LogInTitleWrapper>
            <Form />
            <ChangeModalWrapper>
              <ChangeModal onClick={() => dispatch(setStatus('registration'))}>
                {changeModalToSignIn}
              </ChangeModal>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Cancel onClick={() => dispatch(setStatus('hidden'))}>{cancel.toUpperCase()}</Cancel>
            </CancelWrapper>
          </LogInCard>
        </LogInFrame>
      </LogInWrapper>
    </>
  );
};
