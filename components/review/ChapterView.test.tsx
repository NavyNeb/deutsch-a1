import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChapterView } from './ChapterView';

const lesson = { id: 'l1', number: 1, title: { de: 'Hallo', en: 'Hi' }, theme: 'greetings', goals: ['greet'],
  steps: [ { kind: 'vocab', item: { id: 'v1', german: 'Hallo', english: 'Hello', gender: null, syllables: ['HAL','lo'], example: { de: 'Hallo!', en: 'Hi!' } } } ] } as any;

it('lists vocab in a chapter view', () => {
  render(<ChapterView lesson={lesson} />);
  expect(screen.getByText('Hallo')).toBeInTheDocument();
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
