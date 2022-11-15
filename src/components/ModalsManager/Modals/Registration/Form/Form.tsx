import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* HOOKS */
import { useAppSelector } from '../../../../../hooks/hooks';
/* MODELS */
import { IRegistrationData } from '../../../../../models/IInputData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError } from './form.styled';
export const Form = () => {
  const { namePlaceholder, loginPlaceholder, passwordPlaceholder, registrationButton } =
    useAppSelector((state) => {
      return {
        namePlaceholder: state.language.registrationModal.namePlaceholder,
        loginPlaceholder: state.language.registrationModal.loginPlaceholder,
        passwordPlaceholder: state.language.registrationModal.passwordPlaceholder,
        registrationButton: state.language.registrationModal.registrationButton,
      };
    });

  const schema = yup
    .object({
      name: yup.string().required().min(3),
      login: yup.string().required().min(3),
      password: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IRegistrationData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', login: '', password: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<IRegistrationData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <FormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input
              {...register('name')}
              placeholder={namePlaceholder}
              type="text"
              name="name"
              id=""
            />
            <InputError>{errors.name?.message}</InputError>
          </InputWrapper>
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
              type="text"
              name="password"
              id=""
            />
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          <input
            disabled={Object.keys(errors).length > 0}
            type="submit"
            value={registrationButton}
          />
        </form>
      </FormWrapper>
    </>
  );
};
