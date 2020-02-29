import React from 'react';
import { Size } from '../constants';

export interface BaseHtmlUI extends React.HTMLAttributes<any> {
  size?: Size;
  [attribute: string]: any;
}
