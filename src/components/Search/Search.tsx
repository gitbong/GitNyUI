import React from 'react';
import * as S from './Search.style';
import { Size } from '../../constants';

export interface SearchProps {
  defaultValue: string;
  placeholder: string;
  enterButton: string;
  size: Size;
  onSearch: (value: string) => void;
}
export const Search: React.FunctionComponent<SearchProps> = ({
  defaultValue,
  placeholder,
  enterButton,
  size,
  onSearch
}: SearchProps) => {
  return (
    <S.Search>
      <S.SearchInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        size={size}
        onChange={() => {}}
      />
      <S.SearchButton
        label={enterButton}
        size={size}
        variant="secondary"
        onClick={() => {
          onSearch('1');
        }}
      />
    </S.Search>
  );
};
