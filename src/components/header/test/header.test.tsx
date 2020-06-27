import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../index';

afterEach(cleanup);

describe('Header', () => {
  it('runs', () => {
    const { container } = render(<Header />);
    expect(container.getElementsByTagName('header')).toHaveLength(1);
  });
});
