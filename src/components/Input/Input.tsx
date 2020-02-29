import React, { useState } from 'react';
import * as S from './Input.style';
import { BaseHtmlUI } from '../../types';

export interface InputProps extends BaseHtmlUI {
  defaultValue?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FunctionComponent<InputProps> = ({
  defaultValue,
  onChange,
  ...restProps
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <S.Input
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        setValue(value);
        if (onChange) onChange(event);
      }}
      {...restProps}
    />
  );
};

Input.defaultProps = {
  defaultValue: '',
  placeholder: '',
  disabled: false,
  size: 'md'
};
