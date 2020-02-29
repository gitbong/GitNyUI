import styled from 'styled-components';
import { Input, Button } from '../../index';

export const Search = styled.span`
  position: relative;
  width: 100%;
  display: flex;
`;

export const SearchInput = styled(Input)`
  flex: 1 1 auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

export const SearchButton = styled(Button)`
  flex: 0 0 auto;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
