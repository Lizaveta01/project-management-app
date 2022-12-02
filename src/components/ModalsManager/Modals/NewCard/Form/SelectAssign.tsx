import Select from 'react-select';
import { useAppSelector } from '../../../../../hooks/hooks';
import makeAnimated from 'react-select/animated';
import { ITask } from '../../../../../models/ITask';
import { IRegistredUser } from '../../../../../models/IInputData';
const animatedComponents = makeAnimated();

export const SelectAssign = ({
  task,
  users,
  handleSetAssignArray,
}: {
  task: ITask;
  users: IRegistredUser[];
  handleSetAssignArray: (value: string[]) => void;
}) => {
  const {
    selectBg,
    selectFocus,
    selectBorder,
    selectTxtColor,
    selectFocusActive,
    placeholder,
    userId,
    selectTxtColor1,
  } = useAppSelector((state) => {
    return {
      selectBg: state.application_theme.theme.LIGHT_BACKGROUND,
      selectBorder: state.application_theme.theme.INPUT_BORDER_COLOR_LIGHT,
      selectFocus: state.application_theme.theme.MODAL_BG,
      selectTxtColor: state.application_theme.theme.TEXT_COLOR_DARK,
      selectTxtColor1: state.application_theme.theme.TEXT_COLOR,
      selectFocusActive: state.application_theme.theme.TEXT_COLOR_DARK,
      placeholder: state.language.lang.createCard.select,
      userId: state.user.id,
    };
  });
  const optionsAssign = !!users
    ? users.map((user) => {
        const value = user._id;
        const label = `${user.name} (${user.login})`;
        const isDisabled = user._id === userId;
        return { value, label, isDisabled };
      })
    : [];
  return (
    <Select
      closeMenuOnSelect={false}
      styles={{
        option: (baseStyles) => ({
          ...baseStyles,
          color: selectTxtColor,
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          height: 'auto',
          width: '100%',
          maxWidth: 353,
        }),
        menuList: (base) => ({
          ...base,
          height: 'auto',

          '::-webkit-scrollbar': {
            width: '4px',
            height: '0px',
          },
          '::-webkit-scrollbar-track': {
            background: '#555',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#f1f1f1',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#888',
          },
        }),
      }}
      components={animatedComponents}
      defaultValue={task?.users.map((user) => {
        if (users?.find((elUser) => elUser._id === user))
          return { value: user, label: users?.find((elUser) => elUser._id === user)?.name };
        else return;
      })}
      isMulti
      placeholder={placeholder}
      options={optionsAssign}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary25: selectFocus,
          neutral0: selectBg,
          primary: selectBorder,
          neutral80: selectTxtColor1,
          neutral10: selectFocusActive,
          neutral50: selectTxtColor,
          primary50: selectFocus,
        },
      })}
      onChange={(choice) => handleSetAssignArray(choice.map((elem) => elem?.value) as string[])}
    />
  );
};
