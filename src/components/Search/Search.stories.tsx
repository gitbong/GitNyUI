import React from 'react';
import { Search, Theme, defaultTheme } from '../../index';

export default { title: 'Search' };

export const withEmoji = () => (
  <Theme theme={defaultTheme}>
    <Search
      defaultValue="Hello"
      placeholder="let's input something"
      size="lg"
      enterButton="Search"
      onSearch={(value: string) => {
        console.log(value);
      }}
    />
  </Theme>
);
