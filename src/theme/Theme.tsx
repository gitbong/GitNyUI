import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';

interface ThemeProps {
  theme?: any;
  children: React.ReactNode;
}

export const Theme: React.FunctionComponent<ThemeProps> = ({
  theme,
  children
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.defaultProps = {
  theme: defaultTheme
};
