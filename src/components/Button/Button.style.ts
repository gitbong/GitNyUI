import styled, { css } from 'styled-components';
import { math, darken } from 'polished';

export const Button = styled.button<any>`
  margin:0;
  transition: 0.3s ease-out;
  box-sizing: border-box;
  appearance: button;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width};
  border-color: ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none; display: flex;
  flex-direction: row;
  align-items: center;
  ${variants};
  ${size};
  ${outline};
  ${disabled};
  &:focus {
    z-index: 0;
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5);
  }
`;
export const PrependWrapper = styled.span`
  display: flex;
  margin-right: 0.5em;
`;
export const AppendWrapper = styled.span`
  display: flex;
  margin-left: 0.5em;
`;

function disabled({ disabled }: { disabled: boolean }) {
  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.65;
    `;
  } else {
    return css`
      cursor: pointer;
    `;
  }
}

function outline({
  outline,
  variant,
  theme
}: {
  outline: boolean;
  variant: string;
  theme: any;
}) {
  let borderWidth: string;
  if (parseInt(theme.border.width) === 0) {
    borderWidth = '1px';
  } else {
    borderWidth = theme.border.width;
  }

  if (outline) {
    return css`
      background: none;
      color: ${({ theme }) => theme.color[variant].background};
      border-width: ${borderWidth};
      border-color: ${({ theme }) => theme.color[variant].background};
      &:hover {
        background-color: ${({ theme }) => theme.color[variant].background};
        color: ${({ theme }) => theme.color[variant].font};
        border-color: ${({ theme }) => theme.border.color};
      }
      &:active {
        color: ${({ theme }) => theme.color[variant].font};
        background-color: ${({ theme }) =>
          darken(0.15, `${theme.color[variant].background}`)};
      }
    `;
  }
}

function size({ size }: { size: string }): any {
  return css`
    font-size: ${({ theme }) => theme.size[size]};
    height: ${({ theme }) => math(`${theme.size[size]} * 2.5`)};
    padding-left: ${({ theme }) => math(`${theme.size[size]} * 1`)};
    padding-right: ${({ theme }) => math(`${theme.size[size]} * 1`)};
  `;
}

function variants({ variant }: { variant: string }): any {
  return css`
    color: ${({ theme }) => theme.color[variant].font};
    background-color: ${({ theme }) => theme.color[variant].background};
    &:hover {
      background-color: ${({ theme }) =>
        darken(0.05, `${theme.color[variant].background}`)};
    }
    &:active {
      background-color: ${({ theme }) =>
        darken(0.15, `${theme.color[variant].background}`)};
    }
  `;
}
