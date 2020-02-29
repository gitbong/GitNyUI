import React, { MouseEvent, ReactChild } from 'react';
import * as S from './Button.style';
import { BaseHtmlUI } from '../../types';

export interface ButtonProps extends BaseHtmlUI {
  label: string;
  variant?: string;
  outline?: boolean;
  disabled?: boolean;
  prepend?: ReactChild;
  append?: ReactChild;
  onClick(e: MouseEvent): void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  variant,
  outline,
  disabled,
  prepend,
  append,
  onClick,
  ...restProps
}) => {
  return (
    <S.Button
      variant={variant}
      outline={outline}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {prepend && <S.PrependWrapper>{prepend}</S.PrependWrapper>}
      <span>{label}</span>
      {append && <S.AppendWrapper>{append}</S.AppendWrapper>}
    </S.Button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  outline: false
};
