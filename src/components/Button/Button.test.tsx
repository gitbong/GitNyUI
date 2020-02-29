import React from 'react';
import userEvent from '@testing-library/user-event';
import { FiAperture } from 'react-icons/fi';
import { Button, ButtonProps } from './Button';
import { renderWithTheme } from '../../testUtils';
import { defaultTheme } from '../../theme/defaultTheme';

describe('Button', () => {
  let props: ButtonProps;
  let onClickFunction: any;

  beforeEach(() => {
    onClickFunction = jest.fn();
    props = {
      label: 'button',
      onClick: onClickFunction
    };
  });

  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<Button {...props} />);
    expect(getByText('button')).toBeInTheDocument();
  });
  it('should call onClick function', () => {
    const { getByText } = renderWithTheme(<Button {...props} />);
    userEvent.click(getByText('button'));
    expect(onClickFunction).toHaveBeenCalled();
  });
  it('should not call onClick function when disabled is true', () => {
    props.disabled = true;
    const { getByText } = renderWithTheme(<Button {...props} />);
    userEvent.click(getByText('button'));
    expect(onClickFunction).not.toHaveBeenCalled();
  });

  describe('render variant', () => {
    it('should render correctly when variant is primary', () => {
      props.variant = 'primary';
      const { container } = renderWithTheme(<Button {...props} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('render size', () => {
    it('should render correctly when size is xs', () => {
      props.size = 'xs';
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toHaveStyle('font-size: 10px');
    });
    it('should render correctly when size is sm', () => {
      props.size = 'sm';
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toHaveStyle('font-size: 12px');
    });
    it('should render correctly when size is md', () => {
      props.size = 'md';
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toHaveStyle('font-size: 16px');
    });
    it('should render correctly when size is lg', () => {
      props.size = 'lg';
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toHaveStyle('font-size: 18px');
    });
    it('should render correctly when size is xl', () => {
      props.size = 'xl';
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toHaveStyle('font-size: 20px');
    });
  });

  describe('render outline', () => {
    it('should render correctly', () => {
      props.outline = true;
      const { container } = renderWithTheme(<Button {...props} />);
      const button = container.querySelector('button');
      expect(button).toMatchSnapshot();
    });
    it('should render 1px border when theme.border.width is 0', () => {
      props.outline = true;
      const { container } = renderWithTheme(<Button {...props} />, {
        ...defaultTheme,
        border: { ...defaultTheme.border, width: '0' }
      });
      const button = container.querySelector('button');
      expect(button).toHaveStyle('border-width: 1px');
    });
  });

  describe('render prepend and append', () => {
    it('should render prepend correctly', () => {
      props.prepend = <FiAperture />;
      const { container } = renderWithTheme(<Button {...props} />);
      expect(container).toMatchSnapshot();
    });
    it('should render append correctly', () => {
      props.append = <FiAperture />;
      const { container } = renderWithTheme(<Button {...props} />);
      expect(container).toMatchSnapshot();
    });
  });
});
