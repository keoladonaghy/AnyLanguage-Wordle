import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Not Wordle', () => {
  render(<App />)
  const linkElement = screen.getByText(/Hulihua - YourLanguageHere/i)
  expect(linkElement).toBeInTheDocument()
})
