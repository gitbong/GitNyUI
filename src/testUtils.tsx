import React from 'react';
import { render } from '@testing-library/react';
import { Theme, defaultTheme } from './theme';

export function renderWithTheme(component: any, theme: any = defaultTheme) {
  return render(<Theme theme={theme}>{component}</Theme>);
}
