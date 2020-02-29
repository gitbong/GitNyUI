import styled, { css } from 'styled-components';
import { math } from 'polished';

export const Input = styled.input<any>`
  transition: 0.3s ease-out;
  appearance: none;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align:middle;
  ${size};
  ${border};
  outline: none;
  &:focus {
    z-index: 0;
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5);
  }
`;

function size({ size, theme }: { size: string; theme: any }) {
  return css`
    font-size: ${theme.size[size]};
    height: ${math(`${theme.size[size]} * 2.5`)};
    padding-left: ${math(`${theme.size[size]} * 1`)};
    padding-right: ${math(`${theme.size[size]} * 1`)};
  `;
}

function border({ theme }: { theme: any }) {
  return css`
    border-width: ${theme.border.width};
    border-radius: ${theme.border.radius};
    border-color: ${theme.border.color};
  `;
}
