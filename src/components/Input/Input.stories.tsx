import React from 'react';
import { Input, Theme, defaultTheme } from '../../index';

export default { title: 'Input' };

export const withEmoji = () => (
  <Theme theme={defaultTheme}>
    <Input
      defaultValue="Hello"
      placeholder="let's input something"
      size="md"
      disabled={false}
      onChange={value => {
        console.log(value);
      }}
    />
  </Theme>
);
