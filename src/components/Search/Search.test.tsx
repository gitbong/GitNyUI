import React from 'react';
import { renderWithTheme } from '../../testUtils';
import { Search, SearchProps } from './Search';

describe('Search', () => {
  let props: SearchProps;
  beforeEach(() => {
    props = {
      defaultValue: 'Hello',
      placeholder: 'Please input',
      enterButton: 'Search',
      size: 'md',
      onSearch: jest.fn()
    };
  });
  it('should render correctly', () => {
    const { container, getByText } = renderWithTheme(<Search {...props} />);
    const input = container.querySelector('input');
    expect(input).toHaveValue('Hello');
    expect(getByText('Search')).toBeInTheDocument();
  });
});
