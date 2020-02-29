import React from 'react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';
import { renderWithTheme } from '../../testUtils';

describe('Input', () => {
  let props: any;
  beforeEach(() => {
    props = {
      defaultValue: 'This is a default value',
      placeholder: 'This is a placeholder',
      disabled: false
    };
  });
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Input {...props} />);
    const input = container.querySelector('input');
    expect(input).toHaveValue('This is a default value');
  });
  it('should render placeholder', () => {
    props.defaultValue = '';
    const { container } = renderWithTheme(<Input {...props} />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('placeholder', 'This is a placeholder');
  });
  it('should call onChange when user is typing', () => {
    props.onChange = jest.fn();
    const { container } = renderWithTheme(<Input {...props} />);
    userEvent.type(container.querySelector('input'), 'abc');
    expect(props.onChange).toHaveBeenCalled();
  });
  it('should not call onChange when disabled is true', () => {
    props.disabled = true;
    props.onChange = jest.fn();
    const { container } = renderWithTheme(<Input {...props} />);
    userEvent.type(container.querySelector('input'), 'abc');
    expect(props.onChange).not.toHaveBeenCalled();
  });

  describe('render size', () => {
    it('should render correctly when size is xs', () => {
      props.size = 'xs';
      const { container } = renderWithTheme(<Input {...props} />);
      const input = container.querySelector('input');
      expect(input).toHaveStyle('font-size: 10px');
    });
    it('should render correctly when size is sm', () => {
      props.size = 'sm';
      const { container } = renderWithTheme(<Input {...props} />);
      const input = container.querySelector('input');
      expect(input).toHaveStyle('font-size: 12px');
    });
    it('should render correctly when size is md', () => {
      props.size = 'md';
      const { container } = renderWithTheme(<Input {...props} />);
      const input = container.querySelector('input');
      expect(input).toHaveStyle('font-size: 16px');
    });
    it('should render correctly when size is lg', () => {
      props.size = 'lg';
      const { container } = renderWithTheme(<Input {...props} />);
      const input = container.querySelector('input');
      expect(input).toHaveStyle('font-size: 18px');
    });
    it('should render correctly when size is xl', () => {
      props.size = 'xl';
      const { container } = renderWithTheme(<Input {...props} />);
      const input = container.querySelector('input');
      expect(input).toHaveStyle('font-size: 20px');
    });
  });
});
