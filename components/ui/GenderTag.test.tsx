import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GenderTag } from './GenderTag';

describe('GenderTag', () => {
  it('renders der/die/das text', () => { render(<GenderTag gender="das" />); expect(screen.getByText('das')).toBeInTheDocument(); });
  it('renders nothing for null', () => { const { container } = render(<GenderTag gender={null} />); expect(container).toBeEmptyDOMElement(); });
});
