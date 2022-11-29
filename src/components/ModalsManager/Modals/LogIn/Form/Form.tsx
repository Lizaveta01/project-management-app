import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ClockLoader } from 'react-spinners';
import EyeOpen from '../../../../../assets/img/eye-toggler.svg';
import EyeClosed from '../../../../../assets/img/eye-closed.svg';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
import { useEffect } from 'react';
/* MODELS */
import { ILogInData } from '../../../../../models/IInputData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError, TogglerWrapper } from './form.styled';
/* THUNKS */
import { loginUserThunk } from '../../../../../slices/userSlice/userSlice';
import { setInputType } from '../../../../../slices/modalsSlice/modalsSlice';

export const Form = () => {
  const dispatch = useAppDispatch();
  const {
    loginPlaceholder,
    passwordPlaceholder,
    registrationButton,
    loadingState,
    spinnerColor,
    inputType,
  } = useAppSelector((state) => {
    return {
      loginPlaceholder: state.language.lang.loginModal.loginPlaceholder,
      passwordPlaceholder: state.language.lang.loginModal.passwordPlaceholder,
      registrationButton: state.language.lang.loginModal.logInButton,
      loadingState: state.modals_state.loadingState,
      spinnerColor: state.application_theme.theme.MAIN_BACKGROUND,
      inputType: state.modals_state.inputType,
    };
  });

  const schema = yup
    .object({
      login: yup.string().required().min(3),
      password: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ILogInData>({
    resolver: yupResolver(schema),
    defaultValues: { login: '', password: '' },
  });

  useEffect(() => {
    return () => {
      dispatch(setInputType('password'));
    };
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ILogInData> = (data) => {
    dispatch(loginUserThunk(data));
  };

  return (
    <>
      <FormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input
              {...register('login')}
              placeholder={loginPlaceholder}
              type="text"
              name="login"
              id=""
            />
            <InputError>{errors.login?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('password')}
              placeholder={passwordPlaceholder}
              type={inputType}
              name="password"
              id=""
            />
            <TogglerWrapper
              onClick={() => dispatch(setInputType(inputType === 'password' ? 'text' : 'password'))}
            >
              <img src={inputType === 'password' ? EyeOpen : EyeClosed} alt="toggler" />
            </TogglerWrapper>
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          {loadingState === 'loaded' ? (
            <input
              disabled={Object.keys(errors).length > 0}
              type="submit"
              value={registrationButton}
            />
          ) : (
            <ClockLoader color={spinnerColor} />
          )}
        </form>
      </FormWrapper>
    </>
  );
};
