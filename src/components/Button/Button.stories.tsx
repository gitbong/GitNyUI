import React from 'react';
import { FiAperture } from 'react-icons/fi';
// import { IoIosAddCircleOutline } from 'react-icons/io';

import { Button, Theme, defaultTheme } from '../../index';

export default { title: 'Button' };

const Space = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: '10px' }}>{children}</div>
);

export const withEmoji = () => (
  <Theme theme={defaultTheme}>
    <Space>
      <Button
        label="Primary"
        variant="primary"
        prepend={<FiAperture />}
        disabled={true}
        type="submit"
        aria-label="test button"
        tabIndex={1}
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
    <Space>
      <Button
        size="xl"
        label="Primary"
        variant="primary"
        type="submit"
        prepend={<FiAperture />}
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
    <Space>
      <Button
        label="Primary"
        variant="primary"
        outline={true}
        type="submit"
        prepend={<FiAperture />}
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
    <Space>
      <Button
        label="Secondary"
        size="md"
        variant="secondary"
        append={<FiAperture />}
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
    <Space>
      <Button
        label="Secondary"
        variant="secondary"
        outline={true}
        append={<FiAperture />}
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
    <Space>
      <Button
        label="Link"
        variant="link"
        onClick={() => {
          // alert('click');
        }}
      />
    </Space>
  </Theme>
);
