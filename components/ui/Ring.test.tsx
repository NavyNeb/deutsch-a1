import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Ring } from './Ring';

describe('Ring', () => {
  it('clamps value to 1', () => {
    render(<Ring value={3} size={100} />);
    expect(screen.getByRole('img', { name: '100%' })).toBeInTheDocument();
  });
  it('clamps negative to 0', () => {
    render(<Ring value={-1} size={100} />);
    expect(screen.getByRole('img', { name: '0%' })).toBeInTheDocument();
  });
  it('value 0.6 reads as 60%', () => {
    render(<Ring value={0.6} size={100} />);
    expect(screen.getByRole('img', { name: '60%' })).toBeInTheDocument();
  });
  it('treats NaN as 0', () => {
    render(<Ring value={NaN} size={100} />);
    expect(screen.getByRole('img', { name: '0%' })).toBeInTheDocument();
  });
  it('renders children in the centre', () => {
    render(<Ring value={0.5} size={100}><span>18</span></Ring>);
    expect(screen.getByText('18')).toBeInTheDocument();
  });
});
